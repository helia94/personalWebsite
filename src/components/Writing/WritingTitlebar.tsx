import * as React from 'react'
import { Plus, Radio } from 'react-feather'

import Button, { GhostButton } from '~/components/Button'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { useViewerQuery } from '~/graphql/types.generated'

import { DialogComponent } from '../Dialog'
import SegmentedControl from '../SegmentedController'
import { WritingContext } from './PostsList'

export function WritingTitlebar({ scrollContainerRef }) {
  const { data } = useViewerQuery()

  function getAddButton() {
    if (data?.viewer?.isAdmin) {
      return (
        <GhostButton
          href="/writing/new"
          data-cy="new-post-button"
          size="small-square"
          aria-label="Add post"
        >
          <Plus size={16} />
        </GhostButton>
      )
    }
    return null
  }


  function trailingAccessory() {
    return (
      <div className="flex space-x-2">
        {getAddButton()}
      </div>
    )
  }

  function getChildren() {
    const { data } = useViewerQuery()
    const { setFilter, filter } = React.useContext(WritingContext)
    if (data?.viewer?.isAdmin) {
      return (
        <div className="pt-2 pb-1">
          <SegmentedControl
            onSetActiveItem={setFilter}
            active={filter}
            items={[
              { id: 'published', label: 'Published' },
              { id: 'draft', label: 'Drafts' },
            ]}
          />
        </div>
      )
    }
    return null
  }

  return (
    <TitleBar
      trailingAccessory={trailingAccessory()}
      title="Writing"
      scrollContainerRef={scrollContainerRef}
    >
      {getChildren()}
    </TitleBar>
  )
}

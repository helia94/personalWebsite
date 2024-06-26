import { useApolloClient } from '@apollo/client'
import * as React from 'react'

import Button, { DeleteButton } from '~/components/Button'

import { DeleteUserDialog } from './DeleteUserDialog'

export function UserSettingsFooter() {
  const apolloClient = useApolloClient()
  return (
    <div className="flex justify-between space-x-4 py-12">
      <Button
        onClick={async () => {
          apolloClient.resetStore()
        }}
      >
        Log out
      </Button>
      <DeleteUserDialog trigger={<DeleteButton>Delete account</DeleteButton>} />
    </div>
  )
}

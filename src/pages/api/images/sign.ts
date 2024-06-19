import fetch from 'isomorphic-unfetch'
import { NextApiRequest, NextApiResponse } from 'next'

import { UserRole } from '~/graphql/types.generated'
import { prisma } from '~/lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  async function isAuthenticated(req, res) {
    const { sessionToken } = { sessionToken: null }
    return sessionToken
  }

  async function getIsAdmin(req, res) {
    const sessionToken = await isAuthenticated(req, res)
    if (!sessionToken) return false

    const viewer = await prisma.user.findUnique({
      where: { authikId: sessionToken.userId },
    })

    return viewer.role === UserRole.Admin
  }

  const isAdmin = await getIsAdmin(req, res)
  if (!isAdmin) {
    return res.status(401).json({ uploadURL: null })
  }


  return res.status(200).json({ })
}

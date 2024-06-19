import { NextApiRequest, NextApiResponse } from 'next'


import { validEmail } from '~/lib/validators'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = JSON.parse(req.body)

  if (!validEmail(email)) {
    return res.status(200).json({ error: 'Invalid email' })
  }


  return res.status(201).json({ error: '' })
}

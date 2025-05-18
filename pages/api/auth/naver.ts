import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID!
  const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET!
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!
  const redirectUri = `${BASE_URL}/api/auth/naver/callback`

  const url = new URL('https://nid.naver.com/oauth2.0/authorize')
  url.searchParams.set('client_id', NAVER_CLIENT_ID)
  url.searchParams.set('redirect_uri', redirectUri)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('state', 'RANDOM_STATE')

  return res.redirect(url.toString())
}

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const KAKAO_CLIENT_ID = process.env.KAKAO_REST_API_KEY!
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!
  const redirectUri = `${BASE_URL}/api/auth/kakao/callback`

  const url = new URL('https://kauth.kakao.com/oauth/authorize')
  url.searchParams.set('client_id', KAKAO_CLIENT_ID)
  url.searchParams.set('redirect_uri', redirectUri)
  url.searchParams.set('response_type', 'code')

  return res.redirect(url.toString())
}

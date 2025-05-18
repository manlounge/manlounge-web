import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = Math.random().toString(36).substring(2, 15);
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/naver/callback`;
  const naverKey = process.env.NAVER_CLIENT_ID;      // .env.local 에 등록한 키
  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverKey}&redirect_uri=${redirectUri}&state=${state}`;
  return res.redirect(url);
}

// pages/api/auth/naver.ts
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const CLIENT_ID     = process.env.NAVER_CLIENT_ID!;
  const redirectUri   = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/naver/callback`;
  const state         = crypto.randomBytes(16).toString('hex');
  // (state를 쿠키에 저장해 두고, 콜백 시 검증하면 CSRF 방어 가능)
  const naverAuthUrl  = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${state}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  res.redirect(naverAuthUrl);
}

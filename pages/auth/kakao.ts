// pages/api/auth/kakao.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const REST_API_KEY = process.env.KAKAO_REST_API_KEY!;
  const redirectUri  = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/kakao/callback`;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  res.redirect(kakaoAuthUrl);
}

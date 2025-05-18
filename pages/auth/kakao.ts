import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/kakao/callback`;
  const kakaoKey = process.env.KAKAO_REST_API_KEY;
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=${redirectUri}&response_type=code`;
  return res.redirect(url);
}

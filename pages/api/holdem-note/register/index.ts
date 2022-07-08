import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/User";
import bcrypt from "bcrypt";

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: "올바른 정보가 아닙니다." });
    }
    try {
      const user = await User.findOne({ email }).exec();
      if (user) {
        return res.status(401).json({ error: "이미 사용중인 이메일입니다." });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      newUser.save((err: any) => {
        if (err) return res.status(500).json({ error: "회원가입실패" });
      });
      res.status(200).end();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

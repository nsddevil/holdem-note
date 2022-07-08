import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/User";
import bcrypt from "bcrypt";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "잘못된 요청입니다." });
    try {
      const result = await User.findOne({ email }).exec();
      if (!result) {
        return res
          .status(401)
          .json({ error: "이메일과 비밀번호를 확인해주세요" });
      }
      const isPass = await bcrypt.compare(password, result.password);
      if (!isPass) {
        return res
          .status(401)
          .json({ error: "이메일과 비밀번호를 확인해주세요" });
      }

      res.status(200).json({ id: result._id.toString(), email: result.email });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

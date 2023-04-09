import { serialize } from "cookie";

export default async function logoutHandler(req, res) {
  const { UserToken } = await req.cookies;

  try {
    const serialized = serialize("UserToken", UserToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      sameSite: "strict",
      maxAge: 0, // 0 horas
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(200).send("logout success");
  }
}

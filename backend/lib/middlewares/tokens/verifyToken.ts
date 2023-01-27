import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "config";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.jwt;
  const key = config.get<Secret>("ACCESS_TOKEN_PRIVATE_KEY") || "";
  let user;
  try {
    if (!token) {
      return res
        .status(403)
        .json({ error: true, message: "Invalid Authentication" });
    }

    user = jwt.verify(token, key);
    (req as CustomRequest).token = user;

    next();
  } catch (error) {
    res.status(500).json({ error: true, message: error });
  }
};

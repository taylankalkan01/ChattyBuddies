import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env.local"
});

export const generateToken = (user: any) => {
  try {
    const payload = { userId: user._id, roles: user.roles };
    const key = process.env.ACCESS_TOKEN_PRIVATE_KEY || "";
    const accessToken = jwt.sign(payload, key, { expiresIn: "3d" });
    return Promise.resolve(accessToken);
  } catch (error) {
    return Promise.reject(error);
  }
};

import { Response, Request } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const registerUser = async (req: Request, res: Response) => {
  let user, data;
  const { email, firstName, lastName, password } = req.body;
  try {
    //validation: TODO

    //check email
    user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: true,
        message: "You cannot register, Email already exist"
      });
    }

    //hash password
    const saltPass = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, saltPass);

    //register user
    const newUser = new User({
      email,
      firstName,
      lastName,
      password: hashPass
    });

    data = await newUser.save();

    res.status(201).json({
      error: false,
      message: "Account Created Succesfully!",
      data: data
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error });
  }
};

export default { registerUser };

import User from "../model/User.js";
export const addUser = async (req, res) => {
  console.log(req.body);
  try {
    let userExist = await User.findOne({ sub: req.body.sub });
    if (userExist) {
      res.status(200).json({ message: "user already exists" });
      return;
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

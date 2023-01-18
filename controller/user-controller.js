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

export const getUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

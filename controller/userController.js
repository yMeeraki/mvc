import { usersList } from "../model/userModel.js";

export const showUsers = (req, res) => {
  res.render("user", { users: usersList() });
};

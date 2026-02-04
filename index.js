import express from "express";
import { showUsers } from "./controller/userController.js";

const app = express();

app.set("view engine", "ejs");

app.get("/users", showUsers);

app.listen(3200);

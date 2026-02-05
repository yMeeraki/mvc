import express from "express";

const app = express();

app.get("/", (req, res) => {
  const users = ["viraj", "disha", "yukti", "aman", "riya"];
  let data = "<ul>";
  for (let i = 0; i < users.length; i++) {
    const displayData = users[i].charAt(0).toUpperCase() + users[i].slice(1);
    data += `<li>View 
    <a href="users/${users[i]}">${displayData}</a> webpage
    </li>`;
  }
  data += "</ul>";
  res.send(data);
});

app.get("/users/:name", (req, res) => {
  const userName = req.params.name;
  const displayName = userName.charAt(0).toUpperCase() + userName.slice(1);
  res.send(`Welcome, ${displayName}`);
});

app.listen(3200);

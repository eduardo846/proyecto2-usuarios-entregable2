const express = require("express");
const app = express();

app.use(express.json());

const usuariosDB = [
    {
        firstName: "Sahid",
        lastName: "Kick",
        email: "sahid.kick@academlo.com",
        password: "root",
        age: 22,
    },
];

let baseId = 2;

app.get("/users", (req, res) => {
    res.status(200).json(usuariosDB);
});

app.post("/users", (req, res) => {
    const data = req.body;
    const newUser = {
        id: ++baseId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age,
    };
    usuariosDB.push(newUser);
    res.status(201).json(newUser);
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = usuariosDB.find((item) => id === item.id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({
            message: "Invalid ID",
        });
    }
});

app.listen(9000, () => {
    console.log("Server started at port 9000");
});

module.exports = app;

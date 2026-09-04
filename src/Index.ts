import express from 'express';
import {userModel} from './db.js'

const app = express();
app.use(express.json());

app.post("/api/signup", async (req, res) => {
   //Zod validation
   const username = req.body.username;
   const password = req.body.password;

   await userModel.create({
    username: username,
    password: password
})

res.status(200).json({
    message: "User Signed up successfully"
})

})

app.post("/api/signin", (req, res) => {
   
})

app.post("/api/content", (req, res) => {
})

app.get("/api/content", (req, res)=>{

})

app.delete("/api/content", (req, res)=>{

})

app.get("/api/share", (req, res)=>{

})
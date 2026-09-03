import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.post("/api/signup", (req, res) => {
   //Zod validation
   const username = req.body.username;
   const password = req.body.password;

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
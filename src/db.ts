import {model,Schema} from 'mongoose';
import mongoose from 'mongoose';

export const dbConnection = await mongoose.connect("mongodb+srv://vijaycdevkate_db_user:qF0tnD0EJvKwJlTV@cluster0.eosddbv.mongodb.net/?appName=Cluster0");

const userSchema = new Schema({
    username: {String, unique:true},
    password: String

})

export const userModel = model("User", userSchema)
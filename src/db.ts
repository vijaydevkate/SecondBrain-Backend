import {model,Schema} from 'mongoose';

const userSchema = new Schema({
    username: {String, unique:true},
    password: String

})

export const userModel = model("User",userSchema)
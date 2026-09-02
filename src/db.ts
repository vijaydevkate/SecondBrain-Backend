import {Model,Schema} from 'mongoose';

const userSchema = new Schema({
    username: {String, unique:true},
    password: String

})

const userModel = new Model(userSchema, "User")
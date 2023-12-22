import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:'string',
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:'string',
        required:true,
    },
},{timestamps:true});

export const User = mongoose.model('User', userSchema_);
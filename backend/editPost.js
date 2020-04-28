import mongoose from 'mongoose';

import dbpost from './models/Post';
const db = mongoose.model('po');
export function setUpConnection() {
    mongoose.connect(`mongodb://localhost:27017/auth`);
}

export function listPost() {
    return dbpost.find();
}

export function addPost() {
    return dbpost.insert()
}




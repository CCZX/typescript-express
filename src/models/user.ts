import { Schema, Document, Model, model } from 'mongoose'
import DB from './../utils/connectDB'

export interface Iuser extends Document {
  account: String,
  password: String
}

const userSchema: Schema = new DB.Schema({
  account: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User: Model<Iuser> = model<Iuser>('user', userSchema)

export default User

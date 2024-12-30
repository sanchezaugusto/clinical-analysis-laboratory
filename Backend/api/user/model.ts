import { Schema, model } from 'mongoose';
import bycrypt from 'bcrypt';

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please fill a valid email address",
        ],
      },
    password: {
        type: String,
        required: true
    },
    role: {
      type: String,
      enum: ["admin", "patient", "professional" ],
      default: "patient",
    },
});

UserSchema.pre('save',async function(next){
    try{
        const hash= await bycrypt.hash(this.password, 10);
        this.password = hash;
        next();
    }catch(error){
       console.log(error);
    }

}); 

const User = model('User', UserSchema);

export default User;
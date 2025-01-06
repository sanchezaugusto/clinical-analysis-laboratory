import { Schema, model } from 'mongoose';
// import bycrypt from 'bcrypt';

const Appointmentschema = new Schema({
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


const Record = model('Record', Appointmentschema);

export default Record;
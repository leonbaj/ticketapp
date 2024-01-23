import mongoose, { Schema } from "mongoose";
//importing Mongoose

mongoose.connect(process.env.MONGODB_URI); //connecting to our database.
mongoose.Promise = global.Promise; //should return a promise which we are assigning to our mongoose promise.

//createing what the database is collecting.
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true, //access time information for ticket
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;

import app from "./app";
import mongoose from "mongoose";
import { Server } from "http";
import config from "./app/config";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database as string);
    server = app.listen(config.port, () => {
      console.log(`Server is on:- ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

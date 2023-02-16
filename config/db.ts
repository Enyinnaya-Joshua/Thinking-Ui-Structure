import mongoose from "mongoose";

const URI: string = "mongodb://localhost/modelDB";
const lifeUri =
  "mongodb+srv://Enyinnaya:enyinnaya2022@cluster0.8lonchc.mongodb.net/bookStore?retryWrites=true&w=majority";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("Database Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to connect to the Database\n${error}`);
  });

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "enyinnaya",
  api_key: "enyinnaya",
  api_secret: "enyinnaya",
  secure: true,
});

export default cloudinary;

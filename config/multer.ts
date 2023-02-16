import multer from "multer";
import express from "express";
import { Request } from "express";

type DestinationCallBack = (error: Error | null, destination: string) => void;
type FileNameCallBack = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallBack
  ) => {
    cb(null, "../uploads");
  },

  filename: (req: Request, file: Express.Multer.File, cb: FileNameCallBack) => {
    cb(null, file.originalname);
  },
});

const authorUpload = multer({ storage: storage }).single("authorImage");
const coverUpload = multer({ storage: storage }).single("coverImage");

export { authorUpload, coverUpload };

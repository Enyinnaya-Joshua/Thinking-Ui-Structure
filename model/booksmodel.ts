import mongoose from "mongoose";

interface books {
  title: string;
  category: number;
  color: string;
  coverImage: string;
  summary: string;
  views: [];
  author: string;
  authorImage: string;
}

interface iBooks extends books, mongoose.Document {}

const bookSchema = new mongoose.Schema(
  {
    title: String,
    category: Number,
    color: String,
    coverImage: String,
    summary: String,
    views: [],
    author: String,
    authorImage: String,
  },
  { timestamps: true }
);

export default mongoose.model<iBooks>("userCars", bookSchema);

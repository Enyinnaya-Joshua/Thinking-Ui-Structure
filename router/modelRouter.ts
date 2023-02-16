import { Router } from "express";
import { coverUpload } from "../config/multer";

import {
  postBook,
  getAllbooks,
  getOneBook,
  searchBooks,
  myViews,
} from "../controller/controller";

const router = Router();

router.route("/newBook").post(coverUpload, postBook);
router.route("/getall").get(getAllbooks);
router.route("/getone/:id").get(getOneBook);
router.route("/search").get(searchBooks);
router.route("/views/:id").patch(myViews);

export default router;

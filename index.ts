import express, { Application, Response, Request } from "express";

const port: number = 1999;

const app: Application = express();

app.use(express.json());

require("./config/db");
import bookRouter from "./router/modelRouter";

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server is up and running ",
  });
});

app.use("/api", bookRouter);

app.listen(port, () => {
  console.log(`Server up on port: ${port}`);
});

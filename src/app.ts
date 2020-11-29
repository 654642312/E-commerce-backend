import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import userRoutes from "./routes/user.routes";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(userRoutes);

app.set("port", process.env.PORT || 3000);

export default app;

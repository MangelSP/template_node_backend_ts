import express from "express";
import cors from "cors";
import { swaggerSetup } from "./config/swagger";
import authRoutes from "./routes/auth/auth.routes";

const app = express();


app.use(cors());
app.use(express.json());
swaggerSetup(app);

app.use("/auth", authRoutes);

export default app;

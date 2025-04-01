import express from "express";
import { checkConnection } from "./db.js";
import createAllTables from "./utils/dbUtils.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 8000;
app.use(express.json());
app.use("/api/auth",authRoutes);
app.listen(PORT,async()=>{
    console.log(`Server is running on port  ${PORT}`);
    try {
        await  checkConnection();
        await createAllTables();
    } catch (error) {
        console.log("Fail to initialize the database",error);
    }
})
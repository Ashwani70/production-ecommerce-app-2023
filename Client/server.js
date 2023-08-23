import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from 'cors';
import path from "path"


//configure env
dotenv.config();


//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use('/api/v1/product', productRoutes);
app.use(express.static(path.join(__dirname, "./client/build")))
//rest api
app.use('*', function () {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})


//port
const PORT = process.env.PORT || 8001;

//run listen
app.

    listen(PORT, () => {
        console.log(`server Running on mode on ${process.env.DEV_MODE} ${PORT}`.bgCyan.white);
    });
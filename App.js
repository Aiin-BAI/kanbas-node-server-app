import express from "express";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://Cluster14526:200096@cluster11643.wdcet3d.mongodb.net/kanbas?retryWrites=true&w=majority&appName=Cluster11643");
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./kanbas/courses/routes.js";
import ModuleRoutes from "./kanbas/modules/routes.js";
import AssignmentRoutes from "./kanbas/assignments/routes.js";
import UserRoutes from "./Users/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);
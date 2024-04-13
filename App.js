import express from "express";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://Cluster14526:200096@cluster11643.wdcet3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster11643");
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./kanbas/courses/routes.js";
import ModuleRoutes from "./kanbas/modules/routes.js";
import AssignmentRoutes from "./kanbas/assignments/routes.js";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";
console.log("Session Secret:", process.env.SESSION_SECRET);

const app = express();
app.use(
    cors({
      credentials: true,
      origin: true//process.env.FRONTEND_URL

    })
   );
   
   const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  

  
app.use(express.json());
Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);
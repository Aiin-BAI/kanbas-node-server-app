//import Database from "../Database/index.js";
import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });
  app.post("/api/courses",async (req,res)=>{
    const course = await dao.createCourse(req.body);//{...req.body,_id:new Date().getTime().toString()};
    //Database.courses.push(course);
    res.send(course);
  });
  app.delete("/api/courses/:id",async (req,res)=>{
    const id = req.params.id;
    
    const status = await dao.deleteCourse(id);//Database.courses.filter((c) => c._id !== id);
  res.json(status);
  });
  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
  
    const result = await dao.updateCourse(id, course);
    //Database.courses = Database.courses.map((c) =>c._id === id ? { ...c, ...course } : c);
    res.sendStatus(204);
  });
  app.get("/api/courses/:id", async (req, res) => {
    const id  = req.params.id;
  
    const course = await dao.findCourseById(id);//Database.courses.find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

}


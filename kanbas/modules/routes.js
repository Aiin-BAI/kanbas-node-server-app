//import db from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
  app.get("/api/modules", async (req, res) => {
    const modules = await dao.findAllModules();
    res.send(modules);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;

    const newModule = await dao.createModule(req.body,cid);//{ ...req.body,course: cid,_id: new Date().getTime().toString(),};
    //db.modules.push(newModule);
    res.send(newModule);
  });
    
    
    app.get("/api/courses/:cid/modules", async (req, res) => {
      
        const cid  = req.params.cid;
        
        const modules = await dao.findModuleByCid(cid);//db.modules.filter((m) => m.course === cid);
        res.send(modules);
      });

      app.delete("/api/modules/:mid", async(req, res) => {
        const { mid } = req.params;
        
        //db.modules = db.modules.filter((m) => m._id !== mid);
        const result = await dao.deleteModule(mid);
        res.sendStatus(200);
       
      });

      app.put("/api/modules/:mid", async(req, res) => {
        const { mid } = req.params;
        const module = req.body;
        const result= await dao.updateModule(mid,module);//Index = db.modules.findIndex((m) => m._id === mid);db.modules[moduleIndex] = {...db.modules[moduleIndex],...req.body};
        res.sendStatus(204);
      });
    
    }
    
    

  export default ModuleRoutes;
  
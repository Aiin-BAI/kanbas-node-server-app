function Hello(app){
    function sayHello (req,res){
        res.send("Hello,World");
    }
    function lifeisGood (req,res){
        res.send("LifeisGOod");
    }
    function rootResponse(req,res){
        res.send("Welcome To Node.js HTTP Restful Server")
    }
    app.get("/hello",sayHello);
    app.get("/",rootResponse);
    app.get("/good",lifeisGood);
}
 export default Hello;
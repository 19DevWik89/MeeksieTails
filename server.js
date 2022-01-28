import express from 'express';
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("./public"));
app.use(express.static("/.node_modules/three"))
express.static.mime.types['wasm'] = 'application/wasm';

app.get("/", function(req, res){
    console.log("connected");
});

app.listen(port,()=>{
    console.log("listening on ",port);
});

 
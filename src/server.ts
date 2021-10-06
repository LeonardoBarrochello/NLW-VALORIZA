import "reflect-metadata";
import express from "express";
import "./database";
import {router} from "./Routes"

const port = 3000;


const app = express();
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log("Rodando servidor")
})
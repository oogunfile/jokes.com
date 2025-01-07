import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const baseUrl = " https://v2.jokeapi.dev/joke/";
app.use(express.static("public"));

//using the safe-mode options to ensure i dont get offesive or explicit jokes
app.get("/", async(req,res)=>{
    try{
    const response = await axios.get(baseUrl+"Any?safe-mode");
    const result = response.data;
    res.render("index.ejs", {jokeQuestion: result.setup, jokeAnswer: result.delivery});
    }catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})
app.listen(port, (req,res)=>{
    console.log(`server is running at port ${port}.`);
});
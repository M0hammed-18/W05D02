const express = require("express");
const fs = require("fs");
const app = express();
const POET = 5000;
// app level middleware
app.use(express.json());

function add(movies) {
    fs.writeFile("./read.json", JSON.stringify(movies), () => {
      console.log("Add To File");
    });
  }
app.get("/movies", (req, res) => {
  const isDelet = req.query.isDelet;

  if (isDelet) {
    const del = movies.filter((item) => {
      return item.isDelet === false;
    });
    add(movies)
    res.status(200);
    res.json(del);
  } else {
    res.status(200).json(movies);
  }
});
// app.get("/movies" ,(req,res)=>{
//     const id=req.query.id
//        if(id){
//         const show= movies.filter((item)=>{
//            return item.id==id;
//        } );
//        res.status(200).json(show);
//     } else {
//       res.status(200).json(movies);
//     }
//     });

app.get("/movies", (req, res) => {
    const id = req.query.id;
    fs.readFile("./movies.json",(err,data)=>{
        const show=JSON.parse(data.toString())
        if (id) {
            movies.find((item) => item.id);
          res.status(200).json(show);
        } else {
          res.status(404).json("Not Found");
        }
    })
  
  
});

app.post("/create", (req, res) => {
  fs.readFile("./movies.json", (err, data) => {
    const movies = JSON.parse(data.toString());

    let add = {
      id: req.body.id,
      name: req.body.name,
      isFavort: req.body.isFavort,
      isDelet: req.body.isDelet,
    };
    movies.push(add);
    console.log();
    res.status(200).json(movies);
  });
});

app.put("/update", (req, res) => {
  fs.readFile("./movies.json", (err, data) => {
    const movies = JSON.parse(data.toString());
    const updateid = req.body;
    const update = movies.map((item) => {
      if (item.id == updateid.id) {
        console.log("done");
        item.isFavort = update.isFavort;
      }
      return item;
    });
    res.status(200).json(update);
  });
});
app.delete("/delet", (req,res)=>{

})
app.listen(POET, () => {
  console.log(`server on ${PORT}`);
});

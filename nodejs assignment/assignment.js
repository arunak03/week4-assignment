const fs = require("node:fs");
// let writeHero = function(){
//     fs.writeFileSync("data2/data2.json",'{"avengers":[{ "title" : "", "power" : "", "city" : " ", "poster" : " "  }]}',function(error, data){
//         if(error){
//             console.warn("Error ", error);
//         }
//     }); 
   
// }

// if(fs.existsSync("data2/data2.json")){
//     console.log("folder already exists");
//     writeHero();
// }else{
//     fs.mkdirSync("data2");
//     writeHero();
//     console.log("folder created and file updated");
// }
const hero= require("./assets/hero.json");
const data = require("./data2/data2.json");
const city= require("./assets/city.json");

for (let i = 0; i < 50; i++) {
var heroname= hero[Math.round(Math.random() * hero.length)];

const newAvenger = {
    
    title: heroname,
    power: Math.round( Math.floor(Math.random() * 10) + 1),
    city: city[Math.round(Math.random() * city.length)],  
    poster: heroname + '.jpg'
  };
  data.avengers.push(newAvenger);  

fs.writeFileSync("data2/data2.json",JSON.stringify(data),"utf-8");
}
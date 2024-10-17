const express = require("express"); //record libraries
const app = express();
const cors = require("cors");
//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started on port 5000.");
  //hello im zhen hao
});
//hello haha
//1234567890
//testing pull request 2.0
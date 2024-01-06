const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 7;

app.use(bodyParser.json());

// app.get('/yunus-api', function(req, res){
//     res.json({
//         name: 'Yunus',
//     })
// })

// app.post('/post-data', (req, res) => {
//     console.log(req.headers)
//     console.log(req.body)
//     res.send('header and body received')
// })

const users = [
  {
    user: "Yunus",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];



app.get('/', function(req, res){
    
})

app.post('/', function(req, res){

})

app.put('/', function(req, res){

})

app.delete('/', function(req, res){

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

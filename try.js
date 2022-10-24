// var readable =fs.createReadStream('massage.txt')
// var readable =fs.createWriteStream('nawid.txt')
// readable.pipe(writable)
// console.log('file added')

// var fs = require('fs');
// var http = require('http');
// var url = require('url');
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'})
//     fs.readFile('try.html',(err,data)=>{
//         if(err) throw err
//         res.write(data)
//         return res.end();
//     })
//     // var myReadStream =fs.createReadStream(__dirname+'message.txt','utf8')
//     // myReadStream.pipe(res)
//     // res.write('./message.txt')
//     // res.end();

// }).listen(8040,()=>{
//     console.log("our server is running on port 8080")
// })

// var fs = require('fs');
// var http = require('http');
// const { json } = require('stream/consumers');
// var url = require('url');

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'Application/json'})
//     // var myObjFile=fs.readFileSync('new.json')
//     // res.end(myObjFile)
//     // var myJob={
//     //     name:"saradr",
//     //     job:"programer",
//     //     age:19
//     // }
//     // res.end(JSON.stringify(myJob))
//     fs.createReadStream('./new.json').pipe(res)
// }).listen(8080,()=>{
//     console.log("our server is running on port 8080")
// })

// -----------basicrouting-----------------------------

var fs = require('fs');
var http = require('http');
const { json } = require('stream/consumers');
var url = require('url');

http.createServer(function(req,res){
   
   console.log('erquest made for '+ req.url)
   if(req.url ==='home'|| req.url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    fs.createReadStream('./try.html').pipe(res)

   }else if(req.url ==='/contact'){
    fs.createReadStream('./contact.html').pipe(res)

   }else if(req.url==='/api/employee'){
    res.writeHead(200,{'content-type':'Application/json'})
          var myObjFile=fs.readFileSync('new.json')
         res.end(myObjFile)
    //  var myJob={
    //         name:"saradr",
    //          job:"programer",
    //           age:19}
    //           res.end(myJob)
              

   }else{
    fs.createReadStream('./404.html').pipe(res)

   }
}).listen(8080,()=>{
    console.log("our server is running on port 8080")
})




const http = require('http');


const server = http.createServer((req, res)=>{
       if(req.url === '/'){
        res.write('<html><head><title>Buffer</title> </head>');
        res.write('<body> <form method="post"; action="/process"><input name="message"/> </form> </body>');
        res.end();
       }
       else if(req.url === '/process' && req.method === 'POST'){

          const body = [];  
        req.on('data',(chunk)=>{
            
             body.push(chunk); 
                         
        });

        req.on('end',(data)=>{
            
           const finalParseData = Buffer.concat(body).toString();
           console.log(finalParseData);
                        
       });
        res.write('Your process has been submited');
        res.end();
       }

       else{
        res.write('Not found');
        res.end();
       }

});


server.listen(3000);
const http = new easyHttp;

//get Posts
http.get('https://jsonplaceholder.typicode.com/posts', 
      function(err,response){
        if(err){
          console.log(err);  
        }else{
        console.log(response);
        }
    });

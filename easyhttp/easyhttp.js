function easyHttp(){
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET request
easyHttp.prototype.get = function(url, callback){
  this.http.open('GET',url,true);

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      //return self.http.responseText;
      callback(null,self.http.responseText);
    }else{
      callback("GET "+url+" Error: "+self.http.status);
    }
  }


  this.http.send();
}
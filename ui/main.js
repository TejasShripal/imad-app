var button = document.getElementById('counter');
var counter = 0;
button.onclick =function() {
    //CREATing a request object
var request=new XMLHttpRequest();
//capturing the request
request.onreadystatechange=function() {
  if(request.readyState == XMLHttpRequest.DONE) {
      if(request.readystate===200) {
      var counter=request.responseText;
      var span=document.getElementById('count');
      span.innerHTML=counter.toString();
      }
  }  
};
//making request
request.open('GET','http://tejasshripal.imad.hasura-app.io/counter',true);
request.send(null);

    
    
    
    //render that shit
    counter=counter + 1;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString();
};
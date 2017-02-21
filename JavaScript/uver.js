function main(){
var today = new Date();
 
    var curr_hour=today.getHours();
    var curr_minute=today.getMinutes ();
    var curr_seconds=today.getSeconds ();
    
    var curr_time=curr_hour + ":" + curr_minute + ":" + curr_seconds;
   
    document.getElementById("clock").innerHTML=curr_time; 
    
    console.log(curr_time);
    
     setInterval(main,1500);
    
    



}


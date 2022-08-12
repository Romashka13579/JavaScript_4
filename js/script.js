function MyTime(){
    var time = new Date()
    document.getElementById("timer").innerHTML=time.toLocaleTimeString()
}
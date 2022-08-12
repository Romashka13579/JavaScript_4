function Btn_Clock(){
    var btn_status = new Boolean(true)
    MyTime(btn_status)
}
function Btn_Timer(){
    var btn_status = new Boolean(false)
    MyTime(btn_status)
}
function MyTime(btn_status) {
    var time = new Date()
    document.getElementById("clock").innerHTML = time.toLocaleTimeString()
    var time = new Date(0,0,0)
    document.getElementById("timer").innerHTML = time.toLocaleTimeString()
    if(btn_status == false){
        document.getElementById("clock").style.fontSize = "80px"
        document.getElementById("clock").style.color = "transparent"
        setInterval(Changes,1000)
    }
    else if (btn_status == true){
        document.getElementById("timer").style.fontSize = "0px"
        document.getElementById("timer").style.color = "transparent"
        setInterval(Changes_false,1000)
    }
}
function Changes(){
    document.getElementById("timer").style.fontSize = "40px"
    document.getElementById("timer").style.color = "white"
    document.getElementById("clock").style.display = "none"
}
function Changes_false(){
    document.getElementById("clock").style.fontSize = "40px"
    document.getElementById("clock").style.color = "white"
    document.getElementById("timer").style.display = "none"
}
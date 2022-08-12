
function MyTime() {
    var time = new Date()
    document.getElementById("clock").innerHTML = time.toLocaleTimeString()
    var time = new Date(0, 0, 0)
    document.getElementById("timer").innerHTML = time.toLocaleTimeString()
    if (document.getElementById('btn-clock').checked){
        document.getElementById("clock").style.fontSize = "80px"
        document.getElementById("clock").style.color = "transparent"
        document.getElementById("timer").style.display = "block"
        document.getElementById("timer").style.fontSize = "40px"
        document.getElementById("timer").style.color = "white"
    }
    else if (document.getElementById('btn-timer').checked){
        document.getElementById("timer").style.fontSize = "0px"
        document.getElementById("timer").style.color = "transparent"
        document.getElementById("clock").style.display = "block"
        document.getElementById("timer").style.fontSize = "40px"
        document.getElementById("timer").style.color = "white"
    }
}
function Changes() {
    document.getElementById("timer").style.fontSize = "40px"
    document.getElementById("timer").style.color = "white"
    document.getElementById("clock").style.display = "none"
}
function Changes_false() {
    document.getElementById("clock").style.fontSize = "40px"
    document.getElementById("clock").style.color = "white"
    document.getElementById("timer").style.display = "none"
}
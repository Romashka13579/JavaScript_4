var clock = document.getElementById("clock")
var timer = document.getElementById("timer")
var time_txt = document.getElementById("time-txt")
function MyTime() {
    var time = new Date()
    clock.innerHTML = time.toLocaleTimeString()
    var time1 = new Date(0, 0, 0)
    timer.innerHTML = time1.toLocaleTimeString()
}
function Remove_Clock() {
    clock.style.fontSize = "80px"
    clock.style.color = "transparent"
    setTimeout(Display_1,1000)
}
function Display_1() {
    time_txt.remove()
    clock.style.display = "none"
    timer.style.display = "block"
    Timer_Add()
}
function Timer_Add() {
    timer.style.fontSize = "46px"
    timer.style.color = "white"
}
function Remove_Timer() {
    timer.style.fontSize = "80px"
    timer.style.color = "transparent"
    setTimeout(Display_2,1000)
}
function Display_2() {
    time_txt.remove()
    clock.style.display = "block"
    timer.style.display = "none"
    Clock_Add()
}
function Clock_Add() {
    clock.style.fontSize = "46px"
    clock.style.color = "white"
}
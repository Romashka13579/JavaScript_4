var clock = document.getElementById("clock")
var timer = document.getElementById("timer")
var time_txt = document.getElementById("time-txt")
var time_txt_right = document.getElementById("time-txt-right")
var btns_fortimer = document.getElementById("btns-fortimer")
var weekday
var back
var back_img = document.getElementById("main")
var weekday_1 = "0"
function MyTime() {
    var time = new Date()
    clock.innerHTML = time.toLocaleTimeString()
    var time_weekday = new Date()
    weekday = time_weekday.toLocaleDateString('en-Us', { weekday: 'long' })
    if(weekday_1 != weekday && weekday_1 != "0"){
        document.getElementById(weekday_1).style.borderBottom = "0px"
    }
    document.getElementById(weekday).style.borderBottom = "3px dotted"
    weekday_1 = weekday
    timer.innerHTML = time1.toLocaleTimeString({ hours: 'numeric', minutes: 'numeric', seconds: 'numeric' })
    var time2 = new Date()
    time_txt_right.innerHTML = time2.toLocaleDateString('en-Us', { year: 'numeric', month: 'numeric', day: 'numeric' })
    Background()
}
function Background(){
    var background = new Date()
    back = background.toLocaleTimeString(Date.UTC, {hour: 'numeric'})
    if(back >= 00 && back < 06){
        back_img.style.backgroundImage = "url('img/wp4526824.jpg')"
    }
    else if(back >= 06 && back < 12){
        back_img.style.backgroundImage = "url('img/tes.com-main-min.jpg')"
    }
    else if(back >= 12 && back < 18){
        back_img.style.backgroundImage = "url('img/480.jpg')"
    }
    else if(back >= 18 && back < 24){
        back_img.style.backgroundImage = "url('img/wp3113563.webp')";
    }
    back_img.style.backgroundRepeat = "no-repeat";
    back_img.style.backgroundPosition = "center";
    back_img.style.backgroundSize = "cover";
}
function Remove_Clock() {
    time_txt_right.style.display = "none"
    clock.style.fontSize = "80px"
    clock.style.color = "transparent"
    setTimeout(Display_1, 1000)
}
function Display_1() {
    time_txt.remove()
    btns_fortimer.style.display = "flex"
    clock.style.display = "none"
    timer.style.display = "block"
    Timer_Add()
}
function Timer_Add() {
    timer.style.fontSize = "46px"
    timer.style.color = "white"
}
function Remove_Timer() {
    btns_fortimer.style.display = "none"
    timer.style.fontSize = "80px"
    timer.style.color = "transparent"
    setTimeout(Display_2, 1000)
}
function Display_2() {
    time_txt.remove()
    time_txt_right.style.display = "flex"
    clock.style.display = "block"
    timer.style.display = "none"
    Clock_Add()
}
function Clock_Add() {
    clock.style.fontSize = "46px"
    clock.style.color = "white"
}
var time1 = new Date(0, 0, 0)
var k = 2
var s = 0
var m = 0
var h = 0
function Change(i) {
    k = i
}
function Timer() {
    if (k == 0) {
        s++
        if (s == 60) {
            s = 0
            m++
            if (m == 60) {
                m = 0
                h++
                if (h == 24) {
                    h = 0
                }
                time1.setHours(h)
            }
            time1.setMinutes(m)
        }
        time1.setSeconds(s)
    }
    else if (k == 2) {
        s = 0
        m = 0
        h = 0
        time1 = new Date(0, 0, 0)
    }
}

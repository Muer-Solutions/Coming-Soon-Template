let count = new Date("jan 20, 2021 00:00:00:00").getTime()
let x = setInterval(()=>{
    let now = new Date().getTime();
    let d = count - now

    let days = Math.floor(d/(1000*60*60*24))
    let hours = Math.floor((d%(1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((d%(1000*60*60))/(1000*60))
    let seconds = Math.floor((d%(1000*60))/1000)

    

    document.getElementById("days").innerHTML = parseInt(days)
    document.getElementById("hours").innerHTML = parseInt(hours)
    document.getElementById("minutes").innerHTML = parseInt(minutes)
    document.getElementById("seconds").innerHTML = parseInt(seconds)

    if(d<=0){
        clearInterval(x)
    }

}, 1000)
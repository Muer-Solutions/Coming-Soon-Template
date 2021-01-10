let count = new Date('2021-01-21 12:00:00'.replace(/-/g, '/')).getTime()
let x = setInterval(()=>{
    let now = new Date().getTime();
    let d = count - now

    let days = Math.floor(d/(1000*60*60*24))
    let hours = Math.floor((d%(1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((d%(1000*60*60))/(1000*60))
    let seconds = Math.floor((d%(1000*60))/1000)

    

    document.getElementById("days").innerHTML = String(days)
    document.getElementById("hours").innerHTML = String(hours)
    document.getElementById("minutes").innerHTML = String(minutes)
    document.getElementById("seconds").innerHTML = String(seconds)


    if(d<=0){
        clearInterval(x)
    }

}, 1000)
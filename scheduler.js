function abc(){
    console.log("i am inside abc")
}
console.log("hello")
let interval=setInterval(abc,1000)
console.log("hyyy")

function clear()
{
    clearInterval(interval) 
}
let timeout = setTimeout(clear,3000)

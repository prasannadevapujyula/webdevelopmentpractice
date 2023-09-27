
function callbacktest(){
    console.log("i am being printed iside callback test function")
}
function sub(n1,n2,func){
    console.log(n1-n2);
    func()
}
let a=10
let b=2
sub(a,b,callbacktest)
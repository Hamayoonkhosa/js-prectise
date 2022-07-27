// let a = 12
// if(a == 0){
//     console.log("Abid is chutu")
// }
// else if (a == 12){
//     console.log("Abid is not chutu")
// }
// else{
//     console.log("Abid is fucking chutu")
// }

// function cal(a,b,c){
//     if (c == "+"){
//         console.log(a+b)
//     }
//     else if(c == "-"){
//     console.log(a-b)}
//     else if(c == "*"){
//         console.log(a*b)}
//     else if(c == "/"){
//         console.log(a/b)}
    
// }
// cal(10,0,"/")
function cal(a,b,c){
    switch(c){
        case "+":
        console.log(a+b)
        break
        
        case "-":
        console.log(a-b)
        break
        
        case "*":
        console.log(a*b)
        break
        
        case "/":
        console.log(a/b)
        break
    }}

cal(10,5,"-")
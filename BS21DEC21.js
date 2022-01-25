var num1Input = document.getElementById("num1")
var num2Input = document.getElementById("num2")
var operator = document.getElementById("operator")
var result = document.getElementById("result")
var button = document.getElementById("btn")

button.addEventListener("click",function(){
    if(num1Input.value===""){
        alert("number enter krdo bhai")
    }if(num2Input.value===""){
        alert("number enter krdo bhai")
    }

    var num1 = Number(num1Input.value)
    var num2 = Number(num2Input.value)

    var op = operator.value
    
    if(op==="-"){
        result.value=num1-num2
    }else if(op==="/"){
        result.value = num1/num2
    }else if(op==="*"){
        result.value = num1*num2
    }else{
        result.value = num1+num2
    }
})

// function calculate(){
//     console.log(operator.value)

//     if(num1Input.value===""){
//         alert("number enter krdo bhai")
//     }if(num2Input.value===""){
//         alert("number enter krdo bhai")
//     }

//     var num1 = Number(num1Input.value)
//     var num2 = Number(num2Input.value)

//     var op = operator.value
    
//     if(op==="-"){
//         result.value=num1-num2
//     }else if(op==="/"){
//         result.value = num1/num2
//     }else if(op==="*"){
//         result.value = num1*num2
//     }else{
//         result.value = num1+num2
//     }
// }
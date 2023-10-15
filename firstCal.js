
let inputtext = document.getElementById('inputNum')
function display(num){

    inputtext.value+=num
 
}
function Calculate(){

try{
      inputtext.value = eval( inputtext.value)

}
catch(err){ 
    //test
//test3
//test4
alert("Invalid input")
}

}
function Clear(){

inputtext.value=0;


}
function del(){

inputtext.value = inputtext.value.slice(0,-1)

}
var numbers = [28, 6, 19, 95];
function myfunction(num) {
 return num * 10;

}
 var newarray = numbers.map(myfunction);
 document.getElementById("product value").innerHTML = newarray;
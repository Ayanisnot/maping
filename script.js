function validateform() {
 var x = document.forms["myform"]["fname"].value;
 var y = document.forms["myform"]['id1'].value;
if (x ==  ""  || y == "") {
    alert("name/age cannot be empty");
return false;
}
 else
  alert("Succesfully logged in");

}
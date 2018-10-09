function verify(){
var content = document.getElementById('password');
var content2 = document.getElementById('confirmPassword');
if(content.value != content2.value){
	content.style.border = "1px solid red";
	content2.style.border = "1px solid red";
} else {
	content.style.border = "1px solid green";
	content2.style.border = "1px solid green";
}
}
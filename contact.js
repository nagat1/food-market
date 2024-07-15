// nav
$(".iconn").click(function(){
  if( $(".side-nav-menu").css('left')==='0px'){
  $(".side-nav-menu").animate({ left: `-260px` }, 500);
  $(".iconn").removeClass('fa-x').addClass('open-close-icon')
}
else{
  $(".side-nav-menu").animate({ left: `0px` }, 500);
  $(".iconn").removeClass('open-close-icon').addClass('fa-x')
}
 
})
/////////////////
function closeSideNav(){
  $(".side-nav-menu").animate({ left: `-260px` }, 500);
}

// //////////////////////
input1=document.querySelector("#name");
input2=document.querySelector("#email");
input3=document.querySelector("#phone");
input4=document.querySelector("#age");
input5=document.querySelector("#password");
input6=document.querySelector("#repassword");
submitbtn=document.querySelector(".btn");
var arr;
if (localStorage.getItem("list") == null) arr = [];
else {
  arr = [JSON.parse(localStorage.getItem("list"))];
}
// submit...............
function validate(ele) {
  var regex = {
    name: /^[\w]{3,10}$/,
    email: /^[a-zA-z]{4,15}(\@)(gmail|yahoo)(\.com)$/,
    phone: /^(01)[012|5]{1}[0-9]{8}$/,
    age: /^[1-9][0-9]?$/,
    password: /^.{5,15}$/,
    repassword: /^.{5,15}$/,
};

if (regex[ele.id].test(ele.value)) {
    console.log("match");
    ele.nextElementSibling.classList.replace( "d-block","d-none");
    ele.classList.add("is-valid");
    ele.classList.remove("is-invalid");
   
    return true;
} else {
    console.log("not match");
    ele.nextElementSibling.classList.replace("d-none", "d-block");
    ele.classList.add("is-invalid");
    ele.classList.remove("is-valid");
  
    return false;
  }
}  

$(".btn").click(function () {
 if (inputsValidation()==true){
  var obj = {
    name: input1.value,
    email: input2.value,
    phone: input3.value,
    age: input4.value,
    password: input5.value,
    repassword: input6.value,
  };
 
  arr.push(obj); 
  localStorage.setItem("list", JSON.stringify(arr));
  console.log(arr);
  
  
}
  clear();
  
 }
 

);


function inputsValidation() {
  if (validate(input1) && validate(input2) && validate(input3) && validate(input4) && validate(input5) && validate(input6) ) 
    $(".btn").attr('disabled',false)
  return true;
}


function clear() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  input5.value = "";
  input6.value = "";
}




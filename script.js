var myNav = document.createElement("NAV");
myNav.setAttribute("class","navbar  bg-info bg-gradient p-2 text-dark bg-opacity-50 ");
document.body.appendChild(myNav);


//const navDiv=document.createElement("div");
//navDiv.setAttribute("class","container-fluid p-5 bg-success p-2 text-dark bg-opacity-50");
//myNav.appendChild(navDiv);
//document.body.appendChild(myNav);

var formPage = document.createElement("FORM");
formPage.setAttribute("id","myForm"); 
formPage.setAttribute("class","m-4  w-50    p-3 mb-2  text-white");
myNav.appendChild(formPage);
document.body.appendChild(myNav);

const divFirstName=document.createElement("div");
divFirstName.setAttribute("id","divFirstName");
divFirstName.setAttribute("class","p-3 mb-2  d-flex  text-white");
formPage.appendChild(divFirstName);
myNav.appendChild(formPage);
document.body.appendChild(myNav);
const lableFirstlName=document.createElement("label");
lableFirstlName.setAttribute("id","lableFirstName");
lableFirstlName.setAttribute("class","d-flex s-3 w-25 text-dark");
lableFirstlName.innerHTML="First Name:";
divFirstName.appendChild(lableFirstlName);
const textFirstName =document.createElement("input");
textFirstName.setAttribute("type","text");
textFirstName.setAttribute("id","FirstName");
textFirstName.setAttribute("setAttribute","");
textFirstName.setAttribute("value","");
textFirstName.setAttribute("class","form-control p-2 border border-dark");
divFirstName.appendChild(textFirstName)
formPage.appendChild(divFirstName);
myNav.appendChild(formPage);
document.body.appendChild(myNav);


const divLastName=document.createElement("div");
divLastName.setAttribute("id","divLastName");
divLastName.setAttribute("class","p-3 mb-2  d-flex  text-white");
formPage.appendChild(divLastName);
myNav.appendChild(formPage);
document.body.appendChild(myNav);
const lableLastName=document.createElement("label");
lableLastName.setAttribute("id","lableLastName");
lableLastName.setAttribute("class","d-flex  w-25 text-dark");
lableLastName.innerHTML="Last Name:";
divLastName.appendChild(lableLastName);
const textLasttName =document.createElement("input");
textLasttName.setAttribute("type","text");
textLasttName.setAttribute("id","LastName");
textLasttName.setAttribute("value","");
textLasttName.setAttribute("class","form-control p-2 border border-dark");
divLastName.appendChild(textLasttName)
formPage.appendChild(divLastName);
myNav.appendChild(formPage);
document.body.appendChild(myNav);

const divAddress=document.createElement("div");
divAddress.setAttribute("id","divAddress");
divAddress.setAttribute("class","p-3 mb-2  d-flex  text-white form-floating");
formPage.appendChild(divAddress);
myNav.appendChild(formPage);
document.body.appendChild(myNav);
const lableAddress=document.createElement("label");
lableAddress.setAttribute("id","lableAddress");
lableAddress.setAttribute("class","d-flex text-dark");
lableAddress.innerHTML="Address:";
divAddress.appendChild(lableAddress);
const textAddress =document.createElement("textarea");
textAddress.setAttribute("type","text");
textAddress.setAttribute("id","address");
textAddress.setAttribute("value","Address");
textAddress.setAttribute("class","form-control  border border-dark ");
divAddress.appendChild(textAddress)
formPage.appendChild(divAddress);
myNav.appendChild(formPage);
document.body.appendChild(myNav);

//const divlName=document.createElement("div");
//divlName.setAttribute("id","div2");
//divlName.setAttribute("class","m-5 ml-4 d-flex align-items-center gap-2 w-80");
//formPage.appendChild(divlName);
//const lablelName=document.createElement("label");
//lablelName.setAttribute("id","lable2");
//lablelName.setAttribute("value","LastName");
//lablelName.setAttribute("class","d-flex s-3 w-25");
//lablelName.innerHTML="Last Name:";
//divlName.appendChild(lablelName);
//const textlName =document.createElement("input");
//textlName.setAttribute("type","text");
//textlName.setAttribute("id","text2");
//textlName.setAttribute("value","");
//textlName.setAttribute("class","form-control p-2 border border-dark");
//divlName.appendChild(textlName)
//formPage.appendChild(divlName);
//navDiv.appendChild(formPage);
//myNav.appendChild(navDiv);
//document.body.appendChild(myNav);


const divPinCode=document.createElement("div");
divPinCode.setAttribute("id","divPincode");
divPinCode.setAttribute("class","p-3 mb-2  d-flex  text-white");
formPage.appendChild(divPinCode);
const lablePinCode=document.createElement("label");
lablePinCode.setAttribute("id","lablePincode");
lablePinCode.setAttribute("value","pincode");
lablePinCode.setAttribute("class","d-flex s-3 w-25 text-dark");
lablePinCode.innerHTML="Pincode:";
divPinCode.appendChild(lablePinCode);
const textPinCode =document.createElement("input");
textPinCode.setAttribute("type","text");
textPinCode.setAttribute("id","pincode");
textPinCode.setAttribute("value","");
textPinCode.setAttribute("class","form-control p-2 border border-dark");
divPinCode.appendChild(textPinCode)
formPage.appendChild(divPinCode);
myNav.appendChild(formPage);
document.body.appendChild(myNav);

const divGender=document.createElement("div");
divGender.setAttribute("id","divGender");
divGender.setAttribute("class","p-3 mb-2  d-flex  text-white form-floating");
divGender.setAttribute("name","gender");
formPage.appendChild(divGender);
const lableGender=document.createElement("label");
lableGender.setAttribute("id","lableGender");
lableGender.setAttribute("class","text-dark ");
lableGender.innerHTML="Gender :";
divGender.appendChild(lableGender);
const radiobtnFemale =document.createElement("input");
radiobtnFemale.setAttribute("type","radio");
radiobtnFemale.setAttribute("name","gender");
radiobtnFemale.setAttribute("id","gender");
radiobtnFemale.setAttribute("value","Female");
radiobtnFemale.setAttribute("class","form-check-input radiobtnFemale");
divGender.appendChild(radiobtnFemale)
//formPage.appendChild(divFood);
const lableoption1=document.createElement("label");
lableoption1.setAttribute("id","genderlableop1");
lableoption1.setAttribute("value","");
lableoption1.setAttribute("class","form-check-label text-dark");
lableoption1.setAttribute("for","radiobtnFemale");
lableoption1.innerHTML="Female";
divGender.appendChild(lableoption1);

const radiobtnMale =document.createElement("input");
radiobtnMale.setAttribute("type","radio");
radiobtnMale.setAttribute("name","gender");
radiobtnMale.setAttribute("id","gender");
radiobtnMale.setAttribute("value","Female");
radiobtnMale.setAttribute("class","form-check-input radiobtnMale");
divGender.appendChild(radiobtnMale)
const lableoption2=document.createElement("label");
lableoption2.setAttribute("id","genderlableop2");
lableoption2.setAttribute("value","Male");
lableoption2.setAttribute("class","form-check-label text-dark");
lableoption2.setAttribute("for","radiobtnMale");
lableoption2.innerHTML="Male";
divGender.appendChild(lableoption2);





const divFood = document.createElement("div");
divFood.setAttribute("id","divFood");
divFood.setAttribute("class","form-check form-check-inline  text-white d-flex justify-content-between");
//const divFoodOption = document.createElement("div");
//divFoodOption.setAttribute("class","bg-warning p-3 w-100 ");
//divFoodOption.setAttribute("id","divOption");
//divFood.appendChild(divFoodOption);
formPage.appendChild(divFood);
myNav.appendChild(formPage);
document.body.appendChild(myNav);

const divlable=document.createElement("div");
divlable.setAttribute("id","");
divlable.setAttribute("class","me-4 p-1 flex-start text-dark");
divlable.innerHTML="Food :";
divFood.appendChild(divlable);

const divlable1=document.createElement("div");
divlable1.setAttribute("id","divlable1");
divlable1.setAttribute("class","lableDiv ");
divFood.appendChild(divlable1);
const textFood1 =document.createElement("input");

textFood1.setAttribute("type","checkbox");
textFood1.setAttribute("name","food");
textFood1.setAttribute("id","textfood1");
textFood1.setAttribute("value","Idly");
textFood1.setAttribute("class","form-check-input ms-1 fooditems");
divlable1.appendChild(textFood1)
const FoodLable1=document.createElement("lable");
FoodLable1.setAttribute("class","text-dark ");
FoodLable1.innerHTML="Idly";
divlable1.appendChild(FoodLable1);

const divlable2=document.createElement("div");
divlable2.setAttribute("id","divlable2");
divlable2.setAttribute("class","lableDiv ");
divFood.appendChild(divlable2);
const textFood2 =document.createElement("input");
textFood2.setAttribute("type","checkbox");
textFood2.setAttribute("name","food");
textFood2.setAttribute("id","textFood2");
textFood2.setAttribute("value","Dosa");
textFood2.setAttribute("class","form-check-input ms-1 fooditems");
divlable2.appendChild(textFood2)
const FoodLable2=document.createElement("lable");
FoodLable2.setAttribute("class","text-dark ");
FoodLable2.innerHTML="Dosa";
divlable2.appendChild(FoodLable2);

const divlable3=document.createElement("div");
divlable3.setAttribute("id","divlable3");
divlable3.setAttribute("class","lableDiv ");
divFood.appendChild(divlable3);
const textFood3 =document.createElement("input");
textFood3.setAttribute("type","checkbox");
textFood3.setAttribute("name","food");
textFood3.setAttribute("id","textFood3");
textFood3.setAttribute("value","Meal");
textFood3.setAttribute("class","form-check-input ms-1 fooditems");
divlable3.appendChild(textFood3)
const FoodLable3=document.createElement("lable");
FoodLable3.setAttribute("class","text-dark");
FoodLable3.innerHTML="Meal";
divlable3.appendChild(FoodLable3);


const divlable4=document.createElement("div");
divlable4.setAttribute("id","divlable4");
divlable4.setAttribute("class","lableDiv");
divFood.appendChild(divlable4);
const textFood4 =document.createElement("input");
textFood4.setAttribute("type","checkbox");
textFood4.setAttribute("name","food");
textFood4.setAttribute("id","textFood4");
textFood4.setAttribute("value","Chappati");
textFood4.setAttribute("class","form-check-input ms-1 fooditems");
divlable4.appendChild(textFood4)
const FoodLable4=document.createElement("lable");
FoodLable4.setAttribute("class"," text-dark");
FoodLable4.innerHTML="Chappati";
divlable4.appendChild(FoodLable4);

const divlable5=document.createElement("div");
divlable5.setAttribute("id","divlable5");
divlable5.setAttribute("class"," lableDiv");
divFood.appendChild(divlable5);
const textFood5 =document.createElement("input");
textFood5.setAttribute("type","checkbox");
textFood5.setAttribute("name","food");
textFood5.setAttribute("id","textFood5");
textFood5.setAttribute("value","Poori");
textFood5.setAttribute("class","form-check-input ms-1 fooditems");
divlable5.appendChild(textFood5)
const FoodLable5=document.createElement("lable");
FoodLable5.setAttribute("class","text-dark ");
FoodLable5.innerHTML="Poori";
divlable5.appendChild(FoodLable5);

const divState = document.createElement("div");
divState.setAttribute("id","divState");
divState.setAttribute("class","form-check form-check-inline p-2 text-white d-flex ");
formPage.appendChild(divState);
myNav.appendChild(formPage);
document.body.appendChild(myNav);

const lableState=document.createElement("lable");
lableState.setAttribute("id","");
lableState.setAttribute("class","text-dark");
lableState.innerHTML="state :";
divState.appendChild(lableState);

const dropDown1=document.createElement("SELECT");
dropDown1.setAttribute("id","state1");
dropDown1.setAttribute("class","ms-5");
divState.appendChild(dropDown1);

const dropOptionState=document.createElement("option");
dropOptionState.setAttribute("name","state");
dropOptionState.setAttribute("value","");
const empty = document.createTextNode("");
dropOptionState.appendChild(empty);
document.getElementById("state1").appendChild(dropOptionState);

const dropOptionState1=document.createElement("option");
dropOptionState1.setAttribute("name","state");
dropOptionState1.setAttribute("value","TamilNadu");
const TamilNadu = document.createTextNode("TamilNadu");
dropOptionState1.appendChild(TamilNadu);
document.getElementById("state1").appendChild(dropOptionState1);

const dropOptionState2=document.createElement("option");
dropOptionState2.setAttribute("name","state");
dropOptionState2.setAttribute("value","Andhra");
const Andhra = document.createTextNode("Andhra");
dropOptionState2.appendChild(Andhra);
document.getElementById("state1").appendChild(dropOptionState2);

const dropOptionState3=document.createElement("option");
dropOptionState3.setAttribute("value","Karnataka");
dropOptionState3.setAttribute("name","state");
const Karnataka = document.createTextNode("Karnataka");
dropOptionState3.appendChild(Karnataka);
document.getElementById("state1").appendChild(dropOptionState3);

const dropOptionState4=document.createElement("option");
dropOptionState4.setAttribute("value","Kerala");
dropOptionState4.setAttribute("name","state");
const Kerala = document.createTextNode("Kerala");
dropOptionState4.appendChild(Kerala);
document.getElementById("state1").appendChild(dropOptionState4);


const divCountry = document.createElement("div");
divCountry.setAttribute("id","divCountry");
divCountry.setAttribute("class","form-check form-check-inline p-2 text-white d-flex ");
formPage.appendChild(divCountry);
myNav.appendChild(formPage);
document.body.appendChild(myNav);

const lableCountry=document.createElement("lable");
lableCountry.setAttribute("id","");
lableCountry.setAttribute("class","text-dark");
lableCountry.innerHTML="Country :";
divCountry.appendChild(lableCountry);

const dropDown2=document.createElement("SELECT");
dropDown2.setAttribute("id","country1");
dropDown2.setAttribute("class","ms-5");
divCountry.appendChild(dropDown2);
const dropOptionCountry1=document.createElement("option");
dropOptionCountry1.setAttribute("value","India");
dropOptionCountry1.setAttribute("name","country");
const India = document.createTextNode("India");
dropOptionCountry1.appendChild(India);
document.getElementById("country1").appendChild(dropOptionCountry1);

const dropOptionCountry2=document.createElement("option");
dropOptionCountry2.setAttribute("value","USA");
dropOptionCountry2.setAttribute("name","country");
const usa = document.createTextNode("USA");
dropOptionCountry2.appendChild(usa);
document.getElementById("country1").appendChild(dropOptionCountry2);

const dropOptionCountry3=document.createElement("option");
dropOptionCountry3.setAttribute("value","London");
dropOptionCountry3.setAttribute("name","country");
const london = document.createTextNode("London");
dropOptionCountry3.appendChild(london);
document.getElementById("country1").appendChild(dropOptionCountry3);

const dropOptionCountry4=document.createElement("option");
dropOptionCountry4.setAttribute("value","Africa");
dropOptionCountry4.setAttribute("name","country");
const africa = document.createTextNode("Africa");
dropOptionCountry4.appendChild(africa);
document.getElementById("country1").appendChild(dropOptionCountry4);



const btnDiv = document.createElement("div");
btnDiv.setAttribute("id","btnDiv");
btnDiv.setAttribute("class","form-check form-check-inline  p-2 text-white d-flex ");
formPage.appendChild(btnDiv);
myNav.appendChild(formPage);
document.body.appendChild(myNav);

const btn1 =document.createElement("button");
btn1.setAttribute("type","button");
btn1.setAttribute("id","formSubButton");
btn1.setAttribute("value","");
btn1.setAttribute("class","btn btn-info");
//btn1.setAttribute("onclick",display);
btn1.innerHTML="Submit";
btnDiv.appendChild(btn1);

// navDiv
const navdiv=document.createElement("div");
navdiv.setAttribute("id","navDiv");
navdiv.setAttribute("class"," ");
navdiv.setAttribute("onload",createTable)
myNav.appendChild(navdiv);
const tbody = document.createElement("tbody");
tbody.setAttribute("id","tbody");
navdiv.appendChild(tbody);
myNav.appendChild(navdiv);
document.body.appendChild(myNav);
//btn AddEvent Listner
btn1.addEventListener("click",()=>{
  stateCheck();
  countryCheck();
  checkRadioGender();
  FoodCheckBoxCount();
  clearForm();
  
});

function checkRadioGender(){
  var checkRadioGender = document.querySelector(
    'input[name="gender"]:checked');
  
if(checkRadioGender != null) {
      let gender=checkRadioGender.value;
      return gender;
}
else {
   
  
      alert("must check gender");

}
}
function FoodCheckBoxCount() {
let food = document.getElementsByName("food")
    let foodList = []
    let foodCount = 0;
    console.log(food)
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value)
            foodCount++
        }
    }
    if(foodList.length>=2){
        result = foodList.join(", ")
    }else{
        result = alert("Choose atleast 2 options Food")
    }
  }

  function stateCheck(){
    let stateCheck = document.querySelector(
      '#state1');
      console.log(stateCheck.value);
  if(stateCheck != null) {
        let state=stateCheck.value;
        return state;
  }
  }
  function countryCheck(){
    var countryCheck = document.querySelector(
      '#country1');
      console.log(countryCheck.value);
  if(countryCheck != null) {
        let country=countryCheck.value;
        return country;
  
  }
}

function clearForm(){

createTable(fName.value,lname.value,address.value,pincode.value,gender.value,result,state.value,country.value)
// fName.value = ""
// lname.value = ""
// address.value = ""
// pincode.value = ""
// //gender.checked =false
// foodList=[]
// state.value = ""
// country.value = ""
// const checkfood=document.getElementsByClassName("fooditems");
//console.log(typeof checkfood);
//document.getElementById("food").checked=false;
//window.location.reload();

document.getElementById("myForm").reset();
}
const mytable=document.createElement("table");
mytable.setAttribute("class","table-danger table-bordered table justify-content-center align-items-center w-75 ms-5 mt-4");
const mythead=document.createElement("thead");
mythead.setAttribute("class","table-dark");
const tr1= document.createElement("tr");
const th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First Name";
tr1.appendChild(th1);
const th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Last Name";
tr1.appendChild(th2);
const th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Address";
tr1.appendChild(th3);
const th4=document.createElement("th");
th4.setAttribute("scope","col");
tr1.appendChild(th4);
th4.innerHTML="Pincode";
const th5=document.createElement("th");
th5.setAttribute("scope","col");
tr1.appendChild(th5);
th5.innerHTML="Gender";
mythead.appendChild(tr1);
const th6=document.createElement("th");
th6.setAttribute("scope","col");
tr1.appendChild(th6);
th6.innerHTML="Food";
mythead.appendChild(tr1);
const th7=document.createElement("th");
th7.setAttribute("scope","col");
tr1.appendChild(th7);
th7.innerHTML="State";
const th8=document.createElement("th");
th8.setAttribute("scope","col");
tr1.appendChild(th8);
th8.innerHTML="Country";
mythead.appendChild(tr1);
mytable.appendChild(mythead);



let fName=document.getElementById("FirstName");
let lname=document.getElementById("LastName");
let address=document.getElementById("address");
let pincode=document.getElementById("pincode");
let gender=document.getElementById("gender");
let food=document.getElementById("food");
let state=document.getElementById("state1");
let country=document.getElementById("country1");


function createTable(fName,lname,address,pincode,gender,food,state,country){
let tbody=document.getElementById("tbody");
console.log(state,country);
let tr =document.createElement("tr");
tbody.appendChild(tr);
let td1=document.createElement("td");
tr.appendChild(td1);
let td2=document.createElement("td");
tr.appendChild(td2);
let td3=document.createElement("td"); 
tr.appendChild(td3);
let td4=document.createElement("td");
tr.appendChild(td4);
let td5=document.createElement("td");
tr.appendChild(td5);
let td6=document.createElement("td");
tr.appendChild(td6);
let td7=document.createElement("td");
tr.appendChild(td7);
let td8=document.createElement("td");
tr.appendChild(td8);
td1.innerHTML=fName;
td2.innerHTML=lname;
td3.innerHTML=address;
td4.innerHTML=pincode;
td5.innerHTML=gender;
td6.innerHTML=food;
td7.innerHTML=state;
td8.innerHTML=country;
tr.append(td1);
tr.append(td2);
tr.append(td3);
tr.append(td4);
tr.append(td5);
tr.append(td6);
tr.append(td7);
tr.append(td8);
tbody.append(tr);
mytable.appendChild(tbody);
}
document.body.appendChild(mytable);
  

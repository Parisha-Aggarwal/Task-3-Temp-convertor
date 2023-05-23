function convert(){
var temp= document.getElementById("input")
var result= document.getElementById("output")
var degree=document.getElementById("degree")

var selectedindex= degree.options[degree.selectedIndex].value
var selectedtext= degree.options[degree.selectedIndex].text

if(temp.value!==""){
    if(selectedindex==0)
    alert("select a unit")
    else{
        if(selectedtext==="Fahrenhite")
        result.value= ((temp.value-32)*5)/9 +" C"
        else if(selectedtext==="Celcius")
        result.value=(temp.value*9)/5 +32 +" F"
    }
}
else
alert("enter temperatue to convert")
}

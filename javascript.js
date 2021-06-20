
alert("Welcom To Petra Website")

let userName = prompt(" What Is your Name?")




let userCountry = prompt(" Where Are You From?")

// console.log(userCountry);

if (userCountry === "jordan"){alert ("welcom")}
else {alert ("WElcom To Jordan")}


 
let visit = prompt("Did you visit jordan befor?")

let favPlace = prompt("Favorite tourist areas in Jordan : Dead sea, Aqaba, Petra")

function favPlaceFun() {
    while (favPlace != "Dead sea" && favPlace != "Aqaba" && favPlace != "Petra") {

      favPlace = prompt("please enter on of : Dead sea, Aqaba, Petra");
   }

favPlaceFun();

console.log (favPlaceFun);


   let x = prompt("how many times do you want to see a camel image ?")

let camelFun = function () {
 let output='';
  let  i = 0;
  while (i < x) {
    
   output = output + document.write( "<img src='https://www.tripsavvy.com/thmb/h1q2GeTSADs-0HXy-HcMMWb_u34=/1885x1414/smart/filters:no_upscale()/GettyImages-529579912-5822cbe83df78c6f6add2b85.jpg' />")

    // console.log(i,output)

    i++;
  }

  return output;

}
camelFun()
}
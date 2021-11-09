//1
let a="4";
let b="12";
let c="20";
 let d;
 d=(12-4);
 console.log(12-4);//8

 let e;
 e=(2+6);
 console.log(2+6);//8

 let f;
 f=(2**3)
 console.log(2**3);//8

 let g;
 g=(2*2); //8
//2
 let student ="Jag heter Eduard";
 console.log(student.length);
 
//3
let säsong="höst";
if(säsong=>höst) {
    console.log("Potatis")
}else if(säsong<=höst){
    console.log("Ingen Potatis")
}
//4
let frukt="-3"
if(frukt>1){
    console.log("Det finns frukt kvar")
}else if(frukt<1){
    console.log("Ingen frukt kvar")
}

//5
let Åland={name:"Åland island", huvudstad:"Mariehamn", djur:"Rådjur", golf:"Diskgolf"}
console.log(Åland.name)

//6
let vardshav=["stilla havet","atlanten","norra ishavet"];
console.log(vardshav); // skriver ut de tre vardshav som befinner sig i hårda klammar.

vardshav.push("indiska okeanen"); //skriver ut den nya hav indiska oceanen.
console.log(vardshav);

vardshav.shift("stilla havet");
vardshav.pop("indiska okeanen");
console.log(vardshav); //shift raderar första vardshavet och pop sista vardshavet inom de hårda klammar.

vardshav.splice(1,0,"indiska okeanen");
console.log(vardshav);
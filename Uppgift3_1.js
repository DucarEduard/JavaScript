//1
let alder= Math.floor(Math.random()*100)+0;

if(alder<18){
    console.log("Man måste vara över 18 år gamalt");
}else if(alder>18){
    console.log("Wälkommen in");
}

//2
let a=Math.floor(Math.random()*6)+1;
switch(a){
    case(1):
    console.log("Hej har är 1");
    break;
    case(2):
    console.log("Du fick nummer 2");
    break;
    case(3):
    console.log("Nummer 3 är din");
    break;
    case(4):
    console.log("4 väntar på dig");
    break;
    case(5):
    console.log("5 dushar just nu");
    break;
    case(6):
    console.log("6 har fått brevet");
    break;
}

//3
for(let e=0;e<17;e++){
    console.log(e);
}

for(let b=17;b>0;b--){
    console.log(b);
}

for(let c=134;c<147;c++){
    console.log(c);
}

for(let d=0;d<20;d+=2){
    console.log(d);
}
//4
/*
let array=["Jack","Jeff" ,"Kalle","Joe", "Fransson"];

for(let i=0;i<4;i++){
    console.log(namn[i]);
}
*/

//5

let ord="Wearethechampions";
for(let i=0;i<ord.length;i++){
    bet.push(ord.charAt(i));
}
    console.log(bet);
for(let i=0;i< ord.length;i++){
    console.log(bet [i])
}

//6
function getRandomInclusive(min, max){
    min=Math.ceil(0);
    max=Math.floor(100);
    return Math.floor(Math.random()*(max-min+1))+min; //max & min both included
}
console.log(getRandomInclusive(min,max));
let randomNumber=[0,100];
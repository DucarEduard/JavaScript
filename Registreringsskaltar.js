let alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","S","U","V","W","X","Y","Z"];
let skyltar=[];
let skylt="";
let o,n;
// For loop för att öka i värdet varje gång den loopar tills i blir mindre eller samma som 1000.
for(let i=0;i<=1000;i++){
    // Ta upp bokstäver som skulle vara i skylt.
    for(let j=0;j<3;j++){
        o=Math.floor(Math.random()*alphabet.length);
        skylt=skylt+(alphabet[o]);
    }

// Delning av siffror i grupp av tre.
    skylt+="-";
    for(let j=0;j<3;j++){
        n=Math.floor(Math.random()*10);
        skylt=skylt+(n);
    }


//If satsen checkar om det redan finns en skylt, om det redan finns så skulle den backa.
if(skyltar.includes(skylt)){
    i--;
    
}else{
    skyltar.push(skylt);
}
skylt="";
}

    console.log(skyltar.join(" "));
//Skriver ut skyltarna

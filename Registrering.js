let alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","S","U","V","W","X","Y","Z"];
let skyltar=[];
let skylt="";
let bockstäver,sifra;
// For loop för att öka i värdet varje gång den loopar tills i blir mindre eller samma som 1000.
for(let a=0;a<=1000;a++){
    // Ta upp bokstäver som skulle vara i skylt.
    for(let b=0;b<3;b++){
        bockstäver=Math.floor(Math.random()*alphabet.length);
        skylt=skylt+(alphabet[bockstäver]);
    }

// Delning av siffror i grupp av tre.
    skylt+="-";
    for(let b=0;b<3;b++){
        sifra=Math.floor(Math.random()*10);
        skylt=skylt+(sifra);
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

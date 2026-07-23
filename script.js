const target = document.getElementById("target");
const input = document.getElementById("input");
const start = document.getElementById("start");
const timer = document.getElementById("timer");
const preview = document.getElementById("preview");
const hasil = document.getElementById("hasil");


let angka="";
let waktu=60;
let interval;

let total=0;
let benar=0;
let salah=0;


function angkaAcak(){

let hasil="";

for(let i=0;i<8;i++){

hasil += Math.floor(Math.random()*10);

}

return hasil;

}


function soalBaru(){

angka=angkaAcak();

target.innerHTML=angka;

input.value="";

preview.innerHTML="";

input.focus();

}



input.addEventListener("input",()=>{

let tampilan="";

for(let i=0;i<input.value.length;i++){


if(input.value[i]===angka[i]){

tampilan += 
`<span class="benar">${input.value[i]}</span>`;

}

else{

tampilan +=
`<span class="salah">${input.value[i]}</span>`;

}


}

preview.innerHTML=tampilan;


});



input.addEventListener("keydown",(e)=>{


if(e.key==="Enter"){


total++;


if(input.value===angka){

benar++;

}

else{

salah++;

}


soalBaru();


}


});





start.onclick=()=>{


start.disabled=true;

input.disabled=false;

total=0;
benar=0;
salah=0;

waktu=60;

timer.innerHTML=waktu;


soalBaru();



interval=setInterval(()=>{


waktu--;

timer.innerHTML=waktu;



if(waktu<=0){


clearInterval(interval);


input.disabled=true;


target.innerHTML="SELESAI";


let akurasi=0;


if(total>0){

akurasi=((benar/total)*100).toFixed(2);

}



hasil.innerHTML=

`
Total Soal : ${total}<br>
Benar : ${benar}<br>
Salah : ${salah}<br>
Ketepatan : ${akurasi}%<br>
Kecepatan : ${benar*8} digit/menit
`;



}


},1000);



};

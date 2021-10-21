var bpl =document.querySelectorAll(".bp");
var bmo =document.querySelectorAll(".bm");
var remouve =document.querySelectorAll(".remouve");
var like =document.querySelectorAll(".like");
var total =document.querySelectorAll(".total");

for (let i = 0; i < bpl.length; i++ ){
    bpl[i].addEventListener("click",function(){
        bpl[i].nextElementSibling.innerHTML++;
    })}
    for (let i = 0; i < bmo.length; i++){
        bmo[i].addEventListener("click",function(){
            if( bmo[i].previousElementSibling.innerHTML>0){
                bmo[i].previousElementSibling.innerHTML;
            } })
    }
for(let i =0 ; i<remouve.length;i++){
    remouve[i].addEventListener("click",function(){
        remouve[i].parentElement.parentElement.parentElement.remouve();
    })
}
for(let i=0 ; i< like.length;i++){
    like[i].addEventListener("click",function(){
        like[i].classList.toggle("red");
    
    })
}
function total(){
    var pricepro = document.querySelectorAll("price");
    var quantity = document.querySelectorAll("quantity");
    var totalprice  =document.querySelector("totalprice");
    var tot=0;
    for(let i=0;i<quantity.length;i++){
sum+=Number(quantity[i].innerHTML)*Number(pricepro[i].innerHTML);
    }
    total.innerHTML=sum;
}
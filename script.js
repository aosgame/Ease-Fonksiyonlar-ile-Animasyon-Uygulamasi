
function calistir(hedef,sure){
    var hedef=document.querySelector(hedef);
    //console.log(hedef);

    var hedefPozisyon=hedef.getBoundingClientRect().top;
   // console.log(hedefPozisyon);

   var baslangicPozisyon=window.pageYOffset;
   //console.log(baslangicPozisyon);

   var mesafe=hedefPozisyon-baslangicPozisyon;
   //console.log(mesafe);

   var baslangicZaman=null;

   function animasyon(simdikiZaman){
       if(baslangicZaman===null) baslangicZaman=simdikiZaman;
       var zamanFarkı=simdikiZaman-baslangicZaman;

       var calis=ease(zamanFarkı,baslangicPozisyon,mesafe,sure);

       window.scrollTo(0,calis);

       if(zamanFarkı<sure) requestAnimationFrame(animasyon);
   }

   function ease(t,b,c,d){
    t /= d/2;
	if (t < 1) return c/2*t*t*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t*t*t + 2) + b;
   }
   
   requestAnimationFrame(animasyon);
    
    
}

calistir('.bolum2',1000);

var bolum1=document.querySelector('.bolum1');

bolum1.addEventListener('click',function(){
    calistir('.bolum2',3000);
});

var bolum2=document.querySelector('.bolum2');

bolum2.addEventListener('click',function(){
    calistir('.bolum1',3000);
});


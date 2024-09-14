'use strict.'
let p=document.querySelectorAll('.prdd');
let delcart= document.querySelectorAll('.delcart')
let cartadded=document.querySelector('.productslayout')
let hide=document.querySelector('.hidden')
let itemarr=document.querySelectorAll('.individual')
let productdis=document.querySelectorAll('.pr');
let cartRem=document.querySelectorAll('.cartbtn')
let clear=document.querySelector('.clear')
let cnt=document.querySelectorAll('.prd1')
let totpri=document.querySelector('.totalprice')
let summ=document.querySelector('.summm')
// console.log(cnt)
let count=0
let sum=0
let arr=[]

function succes(){
    alert('Details submitted successfully')
}
for(let i=0;i<p.length;i++){
    p[i].addEventListener('click',function(){
        p[i].textContent='Item added to cart 🎉'
        p[i].style.backgroundColor='#55e855';

        delcart[i].style.display='block';
        cartadded.style.gridTemplateColumns='75% 25%'
        
        hide.style.display='block';
        // styles
        productdis[count].style.display='flex'
       productdis[count].style.flexDirection='column'
       productdis[count].style.alignItems='center'
        // image
       let imgsrc=itemarr[i].src
        const imgElement = document.querySelector(`.cartimage${count+1}`);
       imgElement.src = imgsrc;
       const innerimg =productdis[count].querySelector(`.cartimage${count+1}`);
        innerimg.src = imgsrc;
       // content
        let imgcont=cnt[i].textContent
        const innercontent=productdis[count].querySelector('.pr h4')
        innercontent.textContent=imgcont
        const sm=add(imgcont)
        summ.textContent=sm
    
        totpri.textContent=sm+1500
        count++;
       
       if(count==10){
        alert('You can Add only 10 items in to the cart')
       } 
    })
     delcart[i].addEventListener('click',function(){
        delcart[i].style.display='none';
        p[i].textContent='Add to Cart👜';
        p[i].style.backgroundColor='#ffff00'
       count--;
       productdis[count].style.display='none'
       if(count==0){
         delcart[i].style.display='none';
        cartadded.style.gridTemplateColumns='100%'

       }
       let imgcont=cnt[i].textContent
        const innercontent=productdis[count].querySelector('.pr h4')
        innercontent.textContent=imgcont
        const sm=subtract(imgcont)
        summ.textContent=sm
        totpri.textContent=sum+1500
     })

     clear.addEventListener('click',function(){
        hide.style.display='none';
        cartadded.style.gridTemplateColumns='100%'
         p[i].textContent='Add to Cart👜';
            p[i].style.backgroundColor='#ffff00'
          sum=0
          delcart[i].style.display='none';
            for (let index = 0; index < count+1; index++) {
                productdis[index].style.display='none';      
            }    
    })
}

function add(imgcont){
    let str=imgcont
    let lastFiveChars = Number(str.slice(-5));
    sum+=lastFiveChars
    return sum
}
function subtract(imgcont){
    let str=imgcont
    let lastFiveChar = Number(str.slice(-5));
    sum-=lastFiveChar
    return sum
}
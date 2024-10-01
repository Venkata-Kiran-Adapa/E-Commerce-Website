'use strict'
// let productlist=document.querySelectorAll('.productlist');
// let delcartbtn= document.querySelectorAll('.delcartbtn')
// let cartadded=document.querySelector('.productslayout')
// let hide=document.querySelector('.hidden')
let individualimg=document.querySelectorAll('.individual')
// let productdis=document.querySelectorAll('.pr');
let cartRem=document.querySelectorAll('.cartbtn')
let clear=document.querySelector('.clear')
let cnt=document.querySelectorAll('.prd1')
let totpri=document.querySelector('.totalprice')
let carrtshow=document.querySelector('.cartshow')
let summ=document.querySelector('.summm')
// let cartform=document.querySelectorAll('.cartform')
let removebtn=document.querySelectorAll('.remove')

// let count=0
// let sum=0
// let value=1
let valuee=1

// let arr=[]

// function succes(){
//     alert('Details submitted successfully')
// }
for(let i=0;i<p.length;i++){

    // add to cart button
  
    productlist[i].addEventListener('click',function(){
      
        productlist[i].textContent='Item added to cart 🎉'
        productlist[i].style.backgroundColor='#55e855';

        delcartbtn[i].style.display='block';
        cartadded.style.gridTemplateColumns='75% 25%'
        
         hide.style.display='block';
        // styles
        if(value===1)
            {
                productdis[count].style.display='flex'
                productdis[count].style.flexDirection='column'
                productdis[count].style.alignItems='center'
                arr[count]=i
                cartform[count].textContent= `Items ${value} `;
               let imgsrc=individualimg[i].src
               const imgElement = document.querySelector(`.cartimage${count+1}`);
               imgElement.src = imgsrc;
               const innerimg =productdis[count].querySelector(`.cartimage${count+1}`);
               innerimg.src = imgsrc;
            //    console.log("if block")
            // const html=`<div class="pr"><img src="/products/downtown_yellow_green 20000.png" class="cartimage1 hiddenn cicss"><img> <h4 style="margin: 15px;">X-Treme-blues-black1<br><p>₹22000</p></h4>    <p class="cartform">items </p><button style="background-color: red;"class="remove">Remove</button></div>`
            
       // content
            let imgcont=cnt[i].textContent
            const innercontent=productdis[count].querySelector('.pr h4')
            innercontent.textContent=imgcont
            const sm=add(imgcont)
           summ.textContent=sm
         totpri.textContent=sm+1500
         value+=1
        //  console.log(`value in if ${value}`)
        //  console.log(`count in if ${count}`)   
         count++;   
       }
       else{
         
    
        let index=search(i)
        cartform[index].textContent= `Items ${value} `;
    
        let imgcont=cnt[i].textContent
        const innercontent=productdis[count].querySelector('.pr h4')
        innercontent.textContent=imgcont
        const sm=add(imgcont)
        summ.textContent=sm
        totpri.textContent=sm+1500
        value+=1
    //   console.log(`count in else ${count}`)    
    }
       
       
       
       if(count==12){
        alert('only 12 items can be added to the cart')
       } 
    })
       
     // delete button(🗑️)
     delcartbtn[i].addEventListener('click',function(){
        delcartbtn[i].style.display='none';
        productlist[i].textContent='Add to Cart👜';
        productlist[i].style.backgroundColor='#ffff00'
        count--;
       value=1
       let index=search(i)
       productdis[index].style.display='none'
       
        if(count==0){
                delcartbtn[i].style.display='none';
                cartadded.style.gridTemplateColumns='100%'
                hide.style.display='none';
            }
                let imgcont=cnt[i].textContent
                const innercontent=productdis[count].querySelector('.pr h4')
                innercontent.textContent=imgcont
                const sm=subtract(imgcont)
                summ.textContent=sm
                if(sm==0){
                    totpri.textContent=0
                }
                else{
                    totpri.textContent=sum+1500
                }
     })


  // clear all items button 

     clear.addEventListener('click',function(){
            hide.style.display='none';
            cartadded.style.gridTemplateColumns='100%'
            productlist[i].textContent='Add to Cart👜';
            productlist[i].style.backgroundColor='#ffff00'
            sum=0
            delcartbtn[i].style.display='none';
            for (let index = 0; index < count+1; index++) {
               productdis[index].style.display='none';      
            }  
            count=0  
    })


    // remove button

    
removebtn[count].addEventListener('click',function(){
    valuee=valuee-1
    let index=search(count)
    cartform[i].textContent= `Items ${valuee-1} `;
    // let imgcont=cnt[count].textContent
    // subtract(imgcont)
    // // value=value-1
    // if((value-1)==0 ){
    //     let n=arr[count]
    //     console.log(count)
    //     delcartbtn[n].style.display='none';
    //     console.log(n)
    // p[n].textContent='Add to Cart👜';
    // p[n].style.backgroundColor='#ffff00'

// }

})
   
}
// for (let inde = 0; inde < arr.length; inde++) {
//     const element = arr[inde];
//     console.log(element)
    
// }

// removebtn[count].addEventListener('click',function(){
//     value=value-1
//     let index=search(count)
//     cartform[index].textContent= `Items ${value-1} `;
//     let imgcont=cnt[count].textContent
//     subtract(imgcont)
//     // value=value-1
//     if((value-1)==0 ){
//         let n=arr[count]
//         console.log(count)
//         delcartbtn[n].style.display='none';
//         console.log(n)
//     p[n].textContent='Add to Cart👜';
//     p[n].style.backgroundColor='#ffff00'

// }

// })
function search(i){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]==i){
            return index;
        }
    }
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
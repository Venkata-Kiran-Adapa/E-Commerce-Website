'use strict.'
let productlist=document.querySelectorAll('.productlist');
let delcartbtn= document.querySelectorAll('.delcartbtn');
let cartadded=document.querySelector('.productslayout');
let hide=document.querySelector('.hidden')
let individualimg=document.querySelectorAll('.individual')
let cartshow=document.querySelector('.cartshow')
let productdis=document.querySelectorAll('.pr');
let productnameandrate=document.querySelectorAll('.prd1')
let summ=document.querySelector('.summm')
let totpri=document.querySelector('.totalprice')
let clearAll=document.querySelector('.clear')
let removebtn=document.querySelectorAll('.remove');

let valArr=new Array(productlist.length).fill(0)
let arr=[]
let count=0
let value=1
let sum=0
 
for(let i=0;i<productlist.length;i++){

    // Add to cart button
    
    productlist[i].addEventListener('click',function(){  

        if(count<=9){
        if(valArr[i]===0){
        productlist[i].textContent='Item added to cart 🎉'
        productlist[i].style.backgroundColor='#55e855';
        delcartbtn[i].style.display='block';
        cartadded.style.gridTemplateColumns='75% 25%'
        hide.style.display='block';
        let imgsrc=individualimg[i].src
        let nameandrate=productnameandrate[i].textContent
        valArr[i]=valArr[i]+1;
        const html=`<div class="pr"> <img src="${imgsrc}" class="cicss"><img> <h4>${(nameandrate).slice(0,nameandrate.length-6)}<br>${(nameandrate).slice(nameandrate.length-6,nameandrate.length)}</h4><p class="cartform">Items:${valArr[i]}</p><button style="background-color: red;"class="remove">Remove Item</button></div>`      
        cartshow.insertAdjacentHTML('afterbegin',html)
        arr.unshift(i)
        count++;
        // Updating Cart Summary when items are added
        const sm=add(nameandrate)
        updatesum(sm)
       
    }
    
    else{
         valArr[i]=valArr[i]+1;
         let index=search(i)
         cartshow.children[index].children[3].textContent=`Items:${valArr[i]}`;
         let nameandrate=productnameandrate[i].textContent
         const sm=add(nameandrate)
         updatesum(sm)
    }
      }
     else{
            alert(" Only 10 Different items can be added into the Cart.\n Item Cant be added as it exceeded the limit.... :( ")
        }
        function updatesum(sm){
            summ.textContent=sm
            totpri.textContent=sm+1500 
        }
           

        let index=search(i)
        cartshow.children[index].children[4].addEventListener('click', function(){
        if(!valArr[i]==0){
                 del()
            }
           })
    })    



    function del(){
        delcartbtn[i].style.display='none';
        productlist[i].textContent='Add to Cart👜';
        productlist[i].style.backgroundColor='#ffff00'
        count--;
        value=1
        let index=search(i)
        cartshow.children[index].remove();
        arr.splice(index,1);
        if(count==0){
                delcartbtn[i].style.display='none';
                cartadded.style.gridTemplateColumns='100%'
                hide.style.display='none';
            }
        let nameandrate=productnameandrate[i].textContent
        let sm=0;
        if(valArr[i]>1){sm=subtract(nameandrate,valArr[i]) }
        else{ sm=subtract(nameandrate,1) }
        valArr[i]=0
        summ.textContent=sm
        if(sm==0){      totpri.textContent=0    }
        else{ totpri.textContent=sum+1500 }
    }

     // delete button(🗑️)


     delcartbtn[i].addEventListener('click',function(){
      del();
     })
        

     // For clear all button


     clearAll.addEventListener('click',function(){
        hide.style.display='none';
        cartadded.style.gridTemplateColumns='100%'
        productlist[i].textContent='Add to Cart👜';
        productlist[i].style.backgroundColor='#ffff00'
        sum=0
        delcartbtn[i].style.display='none';
        for (let index = 0; index < arr.length; index++) {
            cartshow.children[index].remove();  
            arr.splice(index,1);   
        }  
        count=0  
        valArr.fill(0);
})


}


function add(imgcont){
    let str=imgcont
    let lastFiveChars = Number(str.slice(-5));
    sum+=lastFiveChars
    return sum
}
function subtract(imgcont,val){
    let str=imgcont
    let lastFiveChar = Number(str.slice(-5));
    sum-=lastFiveChar*val;
    return sum
}
function search(i){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]==i){
            return index;
        }
    }
}

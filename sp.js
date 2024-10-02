// l=[1,2,3,4,5,6,]
// l2=[...l,7,8,9]
// console.log(l2);

// d={name:'asd',age:25}
// d2={...d,place:'ekm'}
// console.log(d2);

// d={name:'asd',age:25,place:'ekm'}
// const {name,...d1}=d
// console.log(name);
// console.log(d1);

// console.log('start');
// function display(callVback){
//     console.log('asd');
//     console.log('avd');
//     setTimeout(function(){
//         console.log('adfcv');
//         callVback()
        
//     },3000)
    
    
// }
// function display1(){
//     console.log('dcv');
//     console.log('dcv');
//     console.log('dcv');
//     }
//     console.log('before');
//     display(display1)
// function display(){
//     console.log('end');
// }
// const a=setInterval(display,500)

// clock 
    
// let count=60
// let c=setInterval(function(){
//     console.log(count);
//     count--
//     document.getElementById('h2').innerHTML=count
//     if(count==0){
//         clearInterval(c)
//         console.log('completed ');
    
//     }
    
// },100)

// function clock(){
//     let count =60
//     let c=setInterval(function(){
//         console.log(count);
//         count--
//         const main=document.querySelector('.main')
//         const div=document.createElement('div')
//         if(count==0){
//             clearInterval(c)
//             console.log('compleat ');
            
//         }
//         div.innerHTML=`<h2>00:${count}</h2>`
//         main.appendChild(div)
        
//     });
// }

function demo(){
    const main=document.querySelector('.main')
    const div=document.createElement('div')
let count=10
let count1=3
let c=setInterval(function(){
     div.innerHTML=`<h2>${count1}:${count}</h2>`
    count--
       if(count==0){
        count1--
        count=10
               
    }
    if (count1==0){
        clearInterval(c)
        console.log('compleat');
        
    }
   

},500)
main.appendChild(div)   
}
demo()
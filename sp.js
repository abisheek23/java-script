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
    
let count=60
let c=setInterval(function(){
    console.log(count);
    count--
    document.getElementById('h2').innerHTML=count
    if(count==0){
        clearInterval(c)
        console.log('completed one houer');
    
    }
    
},100)
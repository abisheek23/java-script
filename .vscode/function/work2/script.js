// function charg(){
//     a=parseInt(document.getElementById('unit'))
//    b=0
//     if (a<100){
      
//        document.getElementById('h1').innerHTML=b
//        console.log(b);
       
//     }

// }
function unit(){
    u=parseInt(document.getElementById("units").value)
    if(u==100){
        document.getElementById("h1").innerHTML=0
    }
    else if(u<=200){
        document.getElementById("h1").innerHTML=(u-100)*5
    }
    else{
        document.getElementById("h1").innerHTML=(u-200)*10
    }
}
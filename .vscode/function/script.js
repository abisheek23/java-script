function sample(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h6").innerHTML=a+b
    
   
}
function sample1(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h2").innerHTML=a-b
}
function sample2(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h3").innerHTML=a*b
}
function sample3(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h4").innerHTML=a/b
}
function sample4(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h5").innerHTML=a%b
}
function sample5(){
    // alert('welcom')
    a=parseInt(document.getElementById('fno').value);
    b=parseInt(document.getElementById('sno').value);
    console.log(a);
    // console.log(parseInt(b.value));
    // b=parseInt(b.value)
    console.log(b)
    
    
    
    if(a>b){
        document.getElementById('h1').innerHTML=a
    }
    else{
        document.getElementById('h1').innerHTML=b
    }
}
function sample6(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    c=parseInt(document.getElementById("tno").value)
    if(a>b && a>c){
        document.getElementById('h7').innerHTML=a
    }
    else if(b>a && b>c){
        document.getElementById('h7').innerHTML=b
    }
    else{
        document.getElementById('h7').innerHTML=c

    }
    
    
}
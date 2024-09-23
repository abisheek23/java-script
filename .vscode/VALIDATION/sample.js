function valid(){
    document.getElementById("phno_error").innerHTML=""
    name=document.getElementById("name").value
    phno=document.getElementById("phno").value
    email=document.getElementById("email").value
    console.log(name,phno,email);
    if (phno.length!=10){
        document.getElementById("phno_error").innerHTML="invalid number"

    }
    else
    if (!phno.match("[6-9].{9}")){
        document.getElementById("phno_error").innerHTML="* invalid number"
    }
    
}
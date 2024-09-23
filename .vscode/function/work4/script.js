function city(){
    c=document.getElementById("city").value

    if (c=="delhi")
        {
            document.getElementById("h1").innerHTML="redfort"
        }
   
    else if(c=="agra") 
        {
            document.getElementById("h1").innerHTML="Taj Mahal"
        }
            
    else if(c=="jaipur")
        {
            document.getElementById("h1").innerHTML="Jal Mahal"
        }
            
    else {
        document.getElementById("h1").innerHTML="invalid"
    }
           
}
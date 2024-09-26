d=[{name:'arun',age:20,place:'ekm'},{name:'anu',age:30,place:'thr'},{name:'joji',age:25,place:'kol'},{name:'arathi',age:28,place:'pal'},{name:'alex',age:30,place:'koz'},{name:'sree',age:35,place:'pat'},{name:'manu',age:40,place:'alp'}]
function display(){
    const t_var=document.querySelector('#peopleTable tbody')
    t_var.innerHTML=''

d.forEach(element => {
      const t_row=document.createElement('tr')

      const t_name=document.createElement('td')
      t_name.textContent=element.name
      t_row.appendChild(t_name)

      const t_age=document.createElement('td')
      t_age.textContent=element.age
      t_row.appendChild(t_age)

      const t_place=document.createElement('td')
      t_place.textContent=element.place
      t_row.appendChild(t_place)

      const edit_td=document.createElement('td')
      const edit_btn=document.createElement('button')
      edit_btn.textContent='edit'
      edit_btn.onclick=function(){
        edit_frm(element.name)
      }
      edit_td.appendChild(edit_btn)
      t_row.appendChild(edit_td)

      t_var.appendChild(t_row)

    
});
}
document.getElementById('Submit_form').addEventListener('submit',function(event){
    event.preventDefault()  
    const name=document.getElementById('name').value 
    const age=parseInt(document.getElementById('age').value )
    const place=document.getElementById('place').value 
    d.push({name:name,age:age,place:place})
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''

    display()
})
let edit_name=''
function edit_frm(name){
    console.log('editing',name);
    document.getElementById('edit_form').style.display='block'
    document.getElementById('Submit_form').style.display='none'
    const edit_data=d.find(user=>user.name==name)
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    document.getElementById('e_place').value=edit_data.place
    console.log(edit_data);
    edit_name=name
    
    
}
document.getElementById('edit_form').addEventListener('submit',function(event){
    event.preventDefault()
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    const e_place=document.getElementById('e_place').value
    console.log(e_name,e_age,e_place);
    d=d.map(user=>{
        if(user.name==edit_name){
            return{...user,name:e_name,age:e_age,place:e_place}
        }
        return user
    })

    
    document.getElementById('edit_form').style.display='none'
    document.getElementById('Submit_form').style.display='block'
  display()

})






display()
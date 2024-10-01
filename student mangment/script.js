d=[{id:'1',name:'asd',age:20,email:'a@gmail.com',cource:'bsc',date:"1/12/24"}]
function display(){
    const t_var=document.querySelector('#student tbody')
    t_var.innerHTML=''

    d.forEach(element => {
        const t_row=document.createElement('tr')

        const t_id=document.createElement('td')
        t_id.textContent=element.id
        t_row.appendChild(t_id)

        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)
         
        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        const t_email=document.createElement('td')
        t_email.textContent=element.email
        t_row.appendChild(t_email)

        const t_cource=document.createElement('td')
        t_cource.textContent=element.cource
        t_row.appendChild(t_cource)

        const t_date=document.createElement('td')
        t_date.textContent=element.date
        t_row.appendChild(t_date)

        const edit_td=document.createElement('td')
        const edit_btn=document.createElement('button')
        edit_btn.textContent='edit'
        edit_btn.onclick=function(){
            edit_data(element.id)
        }
        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        const del_td=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='delete'
        del_btn.onclick=function(){
            delete_data(element.id)
        }
        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)


        t_var.appendChild(t_row)
        
    });
}

document.getElementById('student_data').addEventListener('submit',function(event){
    event.preventDefault()
    const id=document.getElementById('id').value
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    const email=document.getElementById('email').value
    const cource=document.getElementById('cource').value
    const date=document.getElementById('date').value
    d.push({id:id,name:name,age:age,email:email,cource:cource,date:date})
    document.getElementById('id').value
    document.getElementById('name').value
    document.getElementById('age').value
    document.getElementById('email').value
    document.getElementById('cource').value
    document.getElementById('date').value

display()
})
let edit_id=''
function edit_data(id){
    console.log('editing',id);
    
    document.getElementById('student_edit_data').style.display='block'
    document.getElementById('student_data').style.display='none'
    const student_edit_data=d.find(user=>user.id==id)
    document.getElementById('e_id').value=student_edit_data.id
    document.getElementById('e_name').value=student_edit_data.name
    document.getElementById('e_age').value=student_edit_data.age
    document.getElementById('e_email').value=student_edit_data.email
    document.getElementById('e_cource').value=student_edit_data.cource
    console.log(edit_data);
    edit_id=id
    


}
document.getElementById('student_edit_data').addEventListener('submit',function(event){
    event.preventDefault()
    // const e_id=document.getElementById('e_id').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    const e_email=document.getElementById('e_email').value
    const e_cource=document.getElementById('e_cource').value
    console.log( e_id,e_name,e_age,e_email,e_cource);
    d=d.map(user=>{
        if(user.id==edit_id){
            return{...user,name:e_name ,age:e_age,email:e_email,cource:e_cource}
        }
        return user
    })
    document.getElementById('student_edit_data').style.display='none'
    document.getElementById("student_data").style.display='block'
    display()
})
function delete_data (id){
    console.log(id);
    d=d.filter(user=>{
        if(user.id!=id){
            return user 
        }
    })
    display()
    
}



display()
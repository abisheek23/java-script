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
display()
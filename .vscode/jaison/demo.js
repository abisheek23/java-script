fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
    data.products.forEach(element => {
        // console.log(element);
    const row = document.querySelector('.row')
    const col=document.createElement('div')
    col.classList.add('col-lg-4')
    col.innerHTML=`
    <img src="${element.images}" width='100%'>
    


    `
     row.appendChild(col)
        
    });
})
fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
    data.products.forEach(element => {
        // console.log(element);
    const row = document.querySelector('.row')
    const col=document.createElement('div')
    col.classList.add('col-lg-3')
    col.innerHTML=`
    <div class="card" m-5>
    <img src="${element.thumbnail}" width='100%'>
    <div class="card-body">
    <h4 class="card-title">${element.title}</h4>
    <h4 class="card-text">${element.category}</h4>
    <div class= "card-footer">
    <h5 class-"text-muted>$${element.price}</h5>
    <a href="#" class= "btn btn-primary see-more-btn" data-id="${element.id}"  data-bs-toggle="modal" data-bs-target="#productmodel">see more</a>

    </div>
    </div>
    `
     row.appendChild(col)
        
    });
    document.querySelectorAll('.see-more-more').forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const productid=e.target.getAteribute('data-id');
            const product =data.products.find(p=> p.id == productid);

            if(product){
                console.log('products');
                
                document.getElementById('modelimage').src=product.thumbnail;
                document.getElementById('modeltitle').textContent=product.title;
                document.getElementById('modeldescription').textContent=product.id;
                document.getElementById('modelprice').textContent=`price:${prodect.price}`;
            }
        })
    })
})
.catch(error =>{
    console.error('error fetching the  data , error ');
    
});

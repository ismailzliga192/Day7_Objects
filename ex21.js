let products=[
    {name:"book", quantity:20},
    {name:"pen", quantity:5},
    {name:"glue", quantity:12}
]
for(i=0;i<products.length;i++){
    if(products[i].name=="pen"){
        products[i].quantity += 10
        console.log(products[i])
         
    }

   
}

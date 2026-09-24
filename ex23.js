let products=[
    {name:"pen", price:5},
    {name:"book", price:20},
    {name:"glue", price:10}
]
for(i=0;i<products.length-1;i++)
    {
    if(products[i].price>products[i+1].price){
        console.log(products[i])
        console.log(i)
    }
}

let products=[
    {name:"pen", price:5},
    {name:"book", price:20},
    {name:"glue", price:10}
]
let highest=products[0]
let index=0
for(i=0;i<products.length;i++)
    {
    if(highest.price<products[i].price){
       highest=products[i]
       index=i
     
    }
}
 console.log(highest)
 console.log(index)

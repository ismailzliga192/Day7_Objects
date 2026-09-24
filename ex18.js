let products=[
    {name:"p1", price:2},
    {name:"p2", price:3},
    {name:"p3", price:5},
    {name:"p4", price:10},
    {name:"p5", price:15}
]
let total=0
for(i=0;i<products.length;i++){
    total+=products[i].price
}
console.log(total)
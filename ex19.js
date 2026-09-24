let products=[
       {name:"pen", inStock:true},
       {name:"book",inStock:false},
       {name:"ruler", inStock:true},
       {name:"glue", inStock:false}
]
 let Store=[]
for(i=0;i<products.length;i++){
  if(products[i].inStock==true){
    Store.push(products[i])
  }
}
console.log(Store)
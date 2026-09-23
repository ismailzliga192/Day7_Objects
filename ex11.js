let product={ name:"shoes", stock:{quantity:5}}
if(product.stock.quantity>0){
product.stock.quantity-=1
}
console.log(product.stock.quantity)
let students=[
    {name:"sara", age:18},
    {name:"inas", age:30},
    {name:"ismail", age:29}
]
let count=0
for(i=0;i<students.length;i++){
    if(students[i].age >=20){
        count++
    }
}
console.log(count)
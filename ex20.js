let students=[
    {name:"sara", age:18},
    {name:"omar", age:29},
    {name:"bouchra", age:34},
]
let min=students[0]
for(i=0;i<students.length;i++){
    if(students[i].age<min.age){
        min=students[i]
    }
}
console.log(min)
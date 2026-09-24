let list=[
    {id:1, name:"sara"},
    {id:2, name:"omar"},
    {id:3, name:"inas"}
]
function findById(list,id){
    for(i=0;i<list.length;i++){
        if(id==list[i].id){
            return list[i]
        }
        }return null
    }
    console.log(findById(list,2))



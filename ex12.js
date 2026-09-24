let profile = {name:"omar", age:29, email:"123@gmail.com", isActive:true}
function isValidProfile(profile){
    if(profile.name!=="" && profile.age>0){
        return true
    }else{
        return false
    }
}
console.log(isValidProfile(profile))
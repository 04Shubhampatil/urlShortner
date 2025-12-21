

const sessionIdToUserMap = new Map()

function setUser(id,user){
sessionIdToUserMap.set(id,user)//id user


}

function getUser(id){
    return sessionIdToUserMap.get(id)//pass only id
}


export{
    setUser,
    getUser
}
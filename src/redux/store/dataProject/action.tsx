const updateName = (name:string) => {
    console.log('action')
    console.log(name)
    return{
        type: 'Update_name',
        payload: name
    }
    
}

const updateCost = (cost:number) =>{
    console.log('action cost')
    return{
        type:'Update_cost',
        payload: cost
    }
}

export default updateName; updateCost;
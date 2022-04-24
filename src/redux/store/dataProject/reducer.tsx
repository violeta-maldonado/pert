const initalState = { name:'', cost:0};

//action es el valor devuelto por el action
//action.playload sera el valor que quiero a añadir, borrar, etc
const dataReducer = (state = initalState, action)=>{
  console.log(action.type)
  if(action.type === 'Update_name'){
    return {
      ... state, // valor que devuelve reducer
      name: action.payload
    }
  }
  if(action.type === 'Update_cost'){
    return {
      ... state, // valor que devuelve reducer
      cost: action.payload
    }
  }
  return state;
};

export const selectActiveName = state => state.dataReducer.name;
export const selectActiveCost = state => state.dataReducer.cost;

export default dataReducer;
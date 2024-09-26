
import {createStore} from "redux"

const INITIALVALUE = {
  counter:0,
  privacy:false
}


const reducer = (store=INITIALVALUE,action) => {
  if (action.type === 'INCREMENT') {
    return {...store,counter:store.counter + 1 }
  } else if(action.type === 'DECREMENT'){
    return {...store,counter:store.counter > 0 ? store.counter- 1 :0 }
  }  else if(action.type === 'ADD'){
    return {...store,counter:store.counter + Number(action.payload.num) }
  }  else if(action.type === 'SUBTRACT'){
    return {...store,counter:store.counter - Number(action.payload.num) }
  } else if(action.type === 'PRIVACY_TOGGLE'){
    return {...store,privacy:!store.privacy}

  }
  return store
}
const counterStore = createStore(reducer)

export default counterStore
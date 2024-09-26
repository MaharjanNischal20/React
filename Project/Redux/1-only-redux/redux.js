const redux = require("redux")

const INITIALVALUE = {
  counter : 0
}

const Reducer = (store=INITIALVALUE,action) => {
  let newStore = store
  if (action.type === "INCREMENT") {
    newStore ={counter:store.counter + 1}
  } else if (action.type === "DECREMENT") {
    newStore ={counter:store.counter - 1}
  } else if (action.type === "ADDITION") {
    newStore ={counter:store.counter + action.payload.number}
  }
  return newStore
}

const store = redux.createStore(Reducer)

const Subscriber = () => {
  const state = store.getState()
  console.log(state)
}

store.subscribe(Subscriber)

store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DECREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"ADDITION", payload:{number:10}})
store.dispatch({type:"INCREMENT"})

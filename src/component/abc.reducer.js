// create a reducer function which is pure function
//pass two arguments prev state and action
//then we use switch case in this. if condition is matched thn it give us chnged state including action
//else it go to default case and give us state.
// now we have to call this reducer in {createStore} in inde.js.
export const abcReducer = (state = {text:''}, action) => {
    switch(action.type) {
case "TEXT":
    return Object.assign({}, state, { text: action.text })
default:
return(
        state
    )
}
}
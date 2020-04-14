import * as actionsTypes from '../actions';

const initialState={
    persons:[]
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionsTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            state={
                ...state,
                persons:state.persons.concat(newPerson)
            }
        case actionsTypes.REMOVE_PERSON:
            state={
                ...state,
                persons:state.persons.filter(person => person.id !== action.personId)
            }
    }
    return state;
}

export default reducer;
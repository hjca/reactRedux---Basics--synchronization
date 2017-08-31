import { combineReducers  } from 'redux';
import { ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters } from '../actions/actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL,action){
  alert("reducers visi");
  console.log(action.type)
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [],action){
  alert("reducers todos")
  console.log(action.type)
  switch (action.type){
    case ADD_TODO:
      alert("add")
      return [
        ...state,
        {
          text:action.text,
          completed:false
        }
      ]
    case COMPLETE_TODO:
      alert("comp")
      return [
        ...state.slice(0,action.index),
        Object.assign({},state[action.index],{completed:true}),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

/*将各个小的Reducer函数，整合成一个大的Reducer函数*/
const todoApp = combineReducers ({
  visibilityFilter,
  todos
})

export default todoApp

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

alert("action");

export const VisibilityFilters = {
  SHOW_ALL:'SHOW_ALL',
  SHOW_COMPLETED:'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
  alert("addTodo")
  return { type:'ADD_TODO',text }
}

export function completeTodo(index){
  alert("completeTodo")
  return { type:'COMPLETE_TODO',index }
}

export function setVisibilityFilter(filter){
  alert("setVisibilityFilter")
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

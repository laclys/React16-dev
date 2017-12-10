
const ADD = 'add'
const MINUX = 'minus'


// reducer
export function counter(state=0, action) {
  switch (action.type) {
    case ADD:
      return state + 1
    case MINUX:
      return state - 1
    default:
      return 10
  }
}

// action creator
export function addCount() {
  return {type: ADD}
}
export function minuxCount() {
  return {type: MINUX}
}

const ADD = 'add'
const MINUX = 'minus'


// reducer
export function counter(state=10, action) {
  switch (action.type) {
    case ADD:
      return state + 1
    case MINUX:
      return state - 1
    default:
      return state
  }
}

// action creator
export function addCount() {
  return {type: ADD}
}
export function minuxCount() {
  return {type: MINUX}
}

// 延迟添加
export function  addCountAsync() {
  // thunk插件的作用，这里可以返回函数
  return dispatch => {
    setTimeout(() => {
      // 异步结束后，手动执行dispatch
      dispatch(addCount())
    }, 2000)
  }
}
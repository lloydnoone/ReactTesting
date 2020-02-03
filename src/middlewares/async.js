export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on tis payload property
  // if it does, wait for it to resolve
  // if it doesnt then send the action to the
  // next middleware
  if (!action.payload || !action.payload.then) return next(action)

  // we want to wait for the promise tp resolve
  //(get its data) and then ceate a new action
  // with that data and dispatch it
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })
}
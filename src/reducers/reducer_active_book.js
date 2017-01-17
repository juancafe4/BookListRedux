// State argument is not application state, only the state
// this reducer is responsable for

// If state is undefined set it to null ES56 otherwise no
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
const initState = {
  locations: [
    { id: '1', city: 'Charlotte', state: 'North Carolina' },
    { id: '2', city: 'Loveland', state: 'Colorado' },
    { id: '3', city: 'San Francisco', state: 'California' },
  ],
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer
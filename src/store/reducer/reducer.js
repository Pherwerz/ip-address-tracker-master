import * as actionTypes from '../action/action';

const initialState = {
  value: '',
  options: ['IP Address', 'Location', 'Timezone', 'ISP'],
  optionsVal: [],
  latlng: [53.463059, -2.29134]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_INPUT:
      return {
        ...state,
        value: action.value
      };
    case actionTypes.SUBMITTED:
      return {
        ...state,
        optionsVal: action.data,
        latlng: action.latlng
      };
    default:
      return state;
  }
};

export default reducer;

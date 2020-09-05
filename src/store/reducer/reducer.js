import * as actionTypes from '../action/action';

const initialState = {
  value: '',
  options: ['IP Address', 'Location', 'Timezone', 'ISP'],
  optionsVal: [
    'old traford',
    'manchester',
    'UTC -1.00',
    'GGMU'
  ],
  latlng: [53.463059, -2.29134],
  spin: false
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
        latlng: action.latlng,
        spin: action.spin
      };
    case actionTypes.SUBMITTED_FAIL:
    case actionTypes.SUBMITTED_SUCCESS:
      return {
        ...state,
        spin: action.spin
      };
    default:
      return state;
  }
};

export default reducer;

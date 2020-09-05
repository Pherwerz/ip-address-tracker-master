import axios from 'axios';

export const SAVE_INPUT = 'SAVE_INPUT';
export const SUBMITTED = 'SUBMITTED';
export const SUBMITTED_FAIL = 'SUBMITTED_FAIL';
export const SUBMITTED_SUCCESS = 'SUBMITTED_SUCCESS';

export const saveInput = e => {
  return {
    type: SAVE_INPUT,
    value: e.target.value
  };
};

const disSubmit = res => {
  return {
    type: SUBMITTED,
    data: [
      res.data.ip,
      `${res.data.location.region}, ${res.data.location.city} ${res.data.location.postalCode}`,
      `UTC ${res.data.location.timezone}`,
      res.data.isp
    ],
    latlng: [res.data.location.lat, res.data.location.lng],
    spin: false
  };
};

export const submitted = (e, val) => {
  e.preventDefault();

  return dispatch => {
    dispatch({
      type: SUBMITTED_SUCCESS,
      spin: true
    });
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_YbnjNpSX4bkaxEgcBb0WK9fE3fwCb&ipAddress=${val}`
      )
      .then(res => {
        dispatch(disSubmit(res));
      })
      .catch(err => {
        dispatch({
          type: SUBMITTED_FAIL,
          spin: false
        });
      });
  };
};

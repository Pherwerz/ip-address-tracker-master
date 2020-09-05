import axios from 'axios';

export const SAVE_INPUT = 'SAVE_INPUT';
export const SUBMITTED = 'SUBMITTED';

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
    latlng: [res.data.location.lat, res.data.location.lng]
  };
};

export const submitted = (e, val) => {
  e.preventDefault();

  return dispatch => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_YbnjNpSX4bkaxEgcBb0WK9fE3fwCb&ipAddress=${val}`
      )
      .then(res => {
        dispatch(disSubmit(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

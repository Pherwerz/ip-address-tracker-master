import React from 'react';
import styles from './Header.module.scss';
import go from '../../images/icon-arrow.svg';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action/action';
import Spinner from '../../components/spinner';

const Header = props => {
  return (
    <header className={styles.Header}>
      {props.spin ? <Spinner /> : null}
      <div className={styles.HeaderContainer}>
        <h1 className={styles.HeaderHeading}>
          IP Address Tracker
        </h1>

        <form
          className={styles.HeaderForm}
          onSubmit={e =>
            props.onSubmitclick(e, props.value)
          }
        >
          <input
            type="text"
            onChange={e => props.onButtonClick(e)}
            value={props.value}
            placeholder="Search for any IP address or domain"
          />
          <button>
            <img src={go} alt="go" />
          </button>
        </form>

        <div className={styles.HeaderBody}>
          {props.options.map((cur, i) => (
            <div key={cur} className={styles.HeaderItems}>
              <p>{cur}</p>
              <h3>{props.optionsVal[i]}</h3>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    value: state.value,
    options: state.options,
    optionsVal: state.optionsVal,
    spin: state.spin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: e => dispatch(actionTypes.saveInput(e)),
    onSubmitclick: (e, val) =>
      dispatch(actionTypes.submitted(e, val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

import React, { Component } from 'react';
import styles from './Header.module.scss';
import go from '../../images/icon-arrow.svg';

class Header extends Component {
  state = {
    value: ''
  };

  valueChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <header className={styles.Header}>
        <div className={styles.HeaderContainer}>
          <h1 className={styles.HeaderHeading}>
            IP Address Tracker
          </h1>

          <form
            className={styles.HeaderForm}
            onSubmit={this.props.submit}
          >
            <input
              type="text"
              onChange={this.valueChange}
              value={this.state.value}
              placeholder="Search for any IP address or domain"
            />
            <button>
              <img src={go} alt="go" />
            </button>
          </form>

          <div className={styles.HeaderBody}>
            <div className={styles.HeaderItems}>
              <p>IP Address</p>
              <h2> </h2>
            </div>

            <div className={styles.HeaderItems}>
              <p>Location</p>
              <h2></h2>
            </div>

            <div className={styles.HeaderItems}>
              <p>Timezone</p>
              <h2></h2>
            </div>

            <div className={styles.HeaderItems}>
              <p> UTC</p>
              <h2></h2>
            </div>

            <div className={styles.HeaderItems}>
              <p> ISP</p>
              <h2></h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import styles from './layout.module.scss';

class layout extends Component {
  submited = () => {
    alert('submitted');
  };
  render() {
    return (
      <div className={styles.layout}>
        <Header submit={this.submited} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default layout;

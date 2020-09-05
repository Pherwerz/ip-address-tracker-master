import React, { Component } from 'react';
import leaflet from 'leaflet';
import styles from './main.module.scss';
import { connect } from 'react-redux';
import location from '../../images/icon-location.svg';

class Main extends Component {
  componentDidMount() {
    const map = leaflet
      .map('map')
      .setView(this.props.latlng, 13);

    leaflet
      .tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      )
      .addTo(map);

    const myIcon = leaflet.icon({
      iconUrl: location
    });

    leaflet
      .marker(this.props.latlng, { icon: myIcon })
      .addTo(map);
  }

  render() {
    let maps = (
      <div id="map" className={styles.MainBody}></div>
    );

    return <main className={styles.Main}>{maps}</main>;
  }
}

const mapStateToProps = state => {
  return {
    latlng: state.latlng
  };
};

export default connect(mapStateToProps)(Main);

import React, { Component } from 'react';
import leaflet from 'leaflet';
import styles from './main.module.scss';

class Main extends Component {
  componentDidMount() {
    var map = leaflet
      .map('map')
      .setView([51.505, -0.09], 13);

    leaflet
      .tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      )
      .addTo(map);

    leaflet
      .marker([51.5, -0.09])
      .addTo(map)
      .bindPopup(
        'A pretty CSS3 popup.<br> Easily customizable.'
      )
      .openPopup();
  }
  render() {
    return (
      <main className={styles.Main}>
        <div id="map" className={styles.MainBody}></div>
      </main>
    );
  }
}

export default Main;

import * as leaflet from 'leaflet';
import css from "./style.css";

export class Map {

    constructor(parentEl) {
        this.createMapElement(parentEl);
        this.setupLeaflet();
        this.renderMap();
    }

    createMapElement(parentEl) {
        this.mapDiv = document.createElement('div');
        (parentEl || body).appendChild(this.mapDiv);
        this.mapDiv.id = 'leaflet-map';
    }

    setupLeaflet() {
        this.tileLayer = leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            accessToken: '???'
        });
    }

    renderMap() {
        this.map = leaflet.map(this.mapDiv).setView([51.505, -0.09], 13);
        this.tileLayer.addTo(this.map);
    }
}
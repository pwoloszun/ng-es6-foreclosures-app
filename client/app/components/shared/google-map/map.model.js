import Marker from "./marker.model";

const gm = window.google.maps;

class Map {
  constructor(element, options) {
    this._map = new gm.Map(element[0], {
      center: {lat: 52.14, lng: 21.0},
      zoom: 6
    });
    this._markers = [];
    this._latLngs = [];
  }

  createMarker(object) {
    let latLng = {lat: object.lat, lng: object.lng};
    this._latLngs.push(latLng);
    let marker = new gm.Marker({
      position: latLng,
      map: this._map
    });
    this._markers.push(marker);
    return new Marker(marker, object);
  }

  fitMarkerBounds() {
    let lats = _(this._latLngs).pluck("lat");
    let lngs = _(this._latLngs).pluck("lng");
    let south = _(lats).min();
    let north = _(lats).max();
    let east = _(lngs).max();
    let west = _(lats).min();
    let bounds = new gm.LatLngBounds(new gm.LatLng(south, west), new gm.LatLng(north, east));
    this._map.fitBounds(bounds);
  }
}

export default Map;


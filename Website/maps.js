function initMap() {
  const mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, {
      center: { lat: 48.85, lng: 2.35 },
      zoom: 12,
      mapId: "6afc2a91e6c54f94",
  });
}

window.initMap = initMap;

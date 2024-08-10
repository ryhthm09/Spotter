const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error("Geolocation error:", error);
      alert("Unable to retrieve your location. Please check your settings.");
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
} else {
  alert("Geolocation is not supported by your browser.");
}

const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap Ryhthm",
}).addTo(map);

const markers = {};

socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;

  if (latitude && longitude && id) { // Validation check
    if (!markers[id]) {
      markers[id] = L.marker([latitude, longitude]).addTo(map);
    } else {
      markers[id].setLatLng([latitude, longitude]);
    }
    map.setView([latitude, longitude], 16); // Consider limiting how often this runs
  } else {
    console.error("Invalid location data received:", data);
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});

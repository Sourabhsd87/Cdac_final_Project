import React, { useState, useEffect, useRef } from "react";

function Garages() {
  const [map, setMap] = useState(null);
  const [service, setService] = useState(null);
  const [places, setPlaces] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const searchBoxRef = useRef(null);

  useEffect(() => {
    // Load the Google Maps JavaScript API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAXBh-sGuC9mM8bOcgqSei4fw2z5rZx-7Q&libraries=places`;
    script.onload = initMap;
    document.body.appendChild(script);
  }, []);

  const initMap = () => {
    // Create a new Google Maps instance
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 15,
    });
    setMap(map);

    // Create a new PlacesService instance
    const service = new window.google.maps.places.PlacesService(map);
    setService(service);

    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Center the map on the user's location
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(pos);

          // Create a marker for the user's current location
          const marker = new window.google.maps.Marker({
            position: pos,
            map,
            title: "You are here",
          });
          setCurrentLocation(marker);

          // Search for nearby mechanic shops
          const request = {
            location: pos,
            radius: 4000,
            type: ["car_repair"],
          };
          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setPlaces(results);
            }
          });
        },
        () => {
          // Handle geolocation errors
          console.error("Error: The Geolocation service failed.");
        }
      );
    } else {
      // Handle geolocation errors
      console.error("Error: Your browser doesn't support geolocation.");
    }

    // Create the search box and link it to the UI element.
    const searchBox = new window.google.maps.places.SearchBox(searchBoxRef.current);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(searchBoxRef.current);

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      // Clear out the old markers.
      setPlaces([]);

      // For each place, get the icon, name and location.
      const bounds = new window.google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        // Create a marker for the search result
        const marker = new window.google.maps.Marker({
          map,
          title: place.name,
          position: place.geometry.location,
        });

        // Create a request to find nearby garages
        const request = {
          location: place.geometry.location,
          radius: 5000,
          type: ["car_repair"],
        };

        // Search for nearby garages
        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPlaces(results);
            }
            });
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });
            map.fitBounds(bounds);
          });
        };

        return (
        <div>
        <input
        ref={searchBoxRef}
        placeholder="Search for a location"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        />
        <div id="map" style={{ height: "400px", width: "60%"}}></div>
        <ul>
        {places.map((place, index) => (
        <li key={index}>{place.name}</li>
        ))}
        </ul>
</div>
);
}

export default Garages;          
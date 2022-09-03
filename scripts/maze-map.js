// MAP

import { fetchAdventures } from "./adventures/adventures.js";
let locationsToShow = [];

// const populateMap = async () => {
//   let adventures = [];

//   try {
//     adventures = await fetchAdventures();
//     // console.log(adventures);
//   } catch (err) {
//     console.error("Error:", error);
//   }
//   const data = adventures.data;
//   data.map((adventure) => {
//     locationsToShow.push(adventure);
//   });
//   // console.log("adventures", adventures);
// };
// populateMap();

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

const showMissingAdventureMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("fair not found");
};

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("mazeMap"), {
    center: { lat: 51.51382754700306, lng: -0.09138173055736436 },
    zoom: 14,
    mapId: "116b56ec96574c87",
    // zoomControl: true,
    mapTypeControl: false,
    // scaleControl: boolean,
    // streetViewControl: boolean,
    // rotateControl: boolean,
    // fullscreenControl: false,
  });

  let iconBase = "./../assets/img/markers/";

  const icons = {
    adventure: {
      icon: {
        url: iconBase + "adventure-marker.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
  };

  // TODO Trying to dynamically populate map
  // let locations = [];
  // locationsToShow.map(
  //   (locationToShow) => {
  //     console.log("hi", locationToShow);
  //   },
  // const { name, oneline, tags, latitude, longitude, slug } = locationToShow;
  // const location = {
  //   position: new google.maps.LatLng(latitude, longitude),
  //   type: "adventure",
  //   content:
  //     '<div id="content" class="infoContent">' +
  //     '<div class="contentItem">' +
  //     '<img src="../assets/img/illustrations/info-door.png">' +
  //     "</div>" +
  //     '<div class="content-item">' +
  //     `<h3>${name}</h3>` +
  //     `<p>${oneline}</p>` +
  //     "<p>Family Friendly</p>" +
  //     "<p>Wheelchair accessible</p>" +
  //     `<a href="../adventures/${slug}.html"><strong>Find out more</strong></a>` +
  //     "</div>" +
  //     " </div>",
  // };
  // locations.push(location);
  // });
  // );

  // console.log("locations", locations);
  const locations = [
    {
      position: new google.maps.LatLng(51.51202, -0.09088),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>Animals in the City </h3>" +
        '<p class="">Start at Bloomberg Arcade, on Cannon Street Side. </p>' +
        '<div class="maptags"><span class="maptag">Just for families</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-1.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-1.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51702, -0.09015),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>Epic Investment </h3>" +
        '<p class="">Start at Coleman Street Gardens, in front of Girdler\'s Company </p>' +
        '<div class="maptags"><span class="maptag">Just for adults</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-3.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-3.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51449, -0.0803),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>Daniel Mendoza</h3>" +
        '<p class="">Start at 30 St Mary\'s Axe (The Gerkin), on the east side. </p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-4.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-4.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51424, -0.10332),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>Moll Cutpurse and Ann Duck</h3>" +
        '<p class="">Start across the road from City Thameslink </p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-5.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-5.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51705, -0.09275),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>Ghost Hunting with Brian</h3>" +
        '<p class="">Start at Aldermenbary Square </p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-6.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-6.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51349, -0.08808),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>The Artful Dodges Again </h3>" +
        '<p class="">Start in the square outside the main entrance of The Royal Exchange </p>' +
        '<div class="maptags"><span class="maptag">Just for families</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-7.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-7.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.52006, -0.09683),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>The Smashing Rock Sisters </h3>" +
        '<p class="">Start in the square opposite Barbican Tube at the entrance to Barbican Estate</p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-8.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-8.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51018, -0.08593),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>A Resting Place </h3>" +
        '<p class="">Start at the open square in front of Monument</p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-9.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-9.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.50811, -0.07594),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>Mariam the 2040 Tour Guide </h3>" +
        '<p class="">Tower of London</p>' +
        '<div class="maptags"><span class="maptag">Just for adults</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-10.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-10.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51785, -0.08643),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>Phyllis Wheatley  </h3>" +
        '<p class="">Start at Finsbury Circus Gardens</p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-11.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-11.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51909, -0.09028),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        "<h3>Mysteries of the City </h3>" +
        '<p class="">Start at St Bartholemew\'s Gatehouse</p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-12.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        `<div><a href="../adventures/door-12.html"><strong>More info</strong></a></div>` +
        "</div>" +
        " </div>",
    },
  ];

  // TODO change it to follow this logic https://developers.google.com/maps/documentation/javascript/examples/marker-remove

  const clearMarkers = () => {
    if (activeMarkers) {
      activeMarkers = [];
    }
  };

  let currentInfoWindow = null;

  const showAllMarkers = () => {
    locations.map((location) => {
      // console.log("location", location);
      const marker = new google.maps.Marker({
        position: location.position,
        icon: icons[location.type].icon,
        map: map,
      });
      const placewindow = new google.maps.InfoWindow({
        content: location.content,
      });

      marker.addListener("click", () => {
        if (currentInfoWindow != null) {
          currentInfoWindow.close();
        }
        placewindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
        currentInfoWindow = placewindow;
      });
    });
  };

  showAllMarkers();

  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.getElementById("locateBtn");
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(
      navigator.geolocation.watchPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          const userMarker = new google.maps.Marker({
            icon: {
              path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
              fillColor: "#70b000",
              fillOpacity: 0.9,
              strokeWeight: 2,
              strokeColor: "#70b000",
              rotation: 40,
              scale: 6,
            },
            position: pos,
            map: map,
          });
          userMarker.setPosition(pos);
          userMarker.addListener("click", () => {
            placewindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
          });

          infoWindow.setPosition(pos);
          infoWindow.setContent("You are here.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
  google.maps.event.addListener(map, "click", function () {
    if (currentInfoWindow != null) {
      currentInfoWindow.close();
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}

window.initMap = initMap;

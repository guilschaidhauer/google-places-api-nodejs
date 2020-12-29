const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});

const apiKey = "ENTER_YOUR_API_KEY_HERE";

//Elevation 
client
    .elevation({
        params: {
            locations: [{
                lat: 45,
                lng: -110
            }],
            key: apiKey,
        },
        timeout: 1000, // milliseconds
    })
    .then((r) => {
        console.log("Elevation api call response:");
        console.log(r.data.results[0].elevation);
    })
    .catch((e) => {
        console.log(e.response.data.error_message);
    });

//Places nearby
client
    .placesNearby({
        params: {
            location: "-29.768858, -51.146018",
            key: apiKey,
            radius: "100",
            type: "restaurant"
        },
        timeout: 1000, // milliseconds
    })
    .then((r) => {
        console.log("Places nearby api call response:");
        console.log(r.data.results[0]);
    })
    .catch((e) => {
        console.log(e.response.data.error_message);
    });

//Text search    
client
    .textSearch({
        params: {
            query: "Shibuya Station",
            location: "35.6580099, 139.7006702",
            radius: "1000",
            key: apiKey
        },
        timeout: 1000, // milliseconds
    })
    .then((r) => {
        console.log("Text search api call response:");
        console.log(r.data.results[0]);
    })
    .catch((e) => {
        console.log(e.response.data.error_message);
    });
const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});

const apiKey = "1234";

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
        console.log(r.data.results[0].elevation);
    })
    .catch((e) => {
        console.log(e.response.data.error_message);
    });
const mqtt = require('mqtt');
console.log("Subscribing...");
const username = 'gepc-subs';
const password = '14d1b530';
const clientId = 'f44a7c6a-219f-417d-9a1d-f2bafd38ad53';
const host = '10.246.0.10:1883';
//const MQTT_TOPIC = 'MC/V1/testing';
const client = mqtt.connect('mqtt://test.mosquitto.org:1883');
const client1 = mqtt.connect(`mqtt://${username}:${password}@${host}`, {
    clientId,
    clean: true,
    rejectUnauthorized: false
});
//const topic='MC/V1/testing';
const topic = 'testing_new';
client.on('connect', () => {
    client.subscribe('testing_new');
});

client.on('message', (topic, message1) => {
    console.log(`Received message on topic ${topic}: ${message1}`);
    // Process the received message as needed
});
const mqtt = require('mqtt');
console.log("Subscribing...");
const client = mqtt.connect('mqtt://test.mosquitto.org:1883');
const topic = 'testing_new';
client.on('connect', () => {
    client.subscribe('testing_new');
});

client.on('message', (topic, message1) => {
    console.log(`Received message on topic ${topic}: ${message1}`);
    // Process the received message as needed
});
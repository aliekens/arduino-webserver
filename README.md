# Guide to getting Arduino data to the browser with Express

This repository acts as an extremely short guide to connecting an Arduino to the internet using Node.js and Express, showing data from an Arduino on the most basic web site.

## Install serialport and express dependencies

```
npm install serialport express
```

## Install the Arduino code

The example code in `arduino/` reads analog input `A0` every second and sends the value as a string over the serial port. Upload it to your Arduino. It doesn't matter if nothing's connected, we'll get some free noise if nothing is connected.

## First server: Track the Arduino from node

The `server1.js` example reads the Arduino's serial port and prints out the data. Run

```
node server1.js
```

You may have to configure the port (e.g., to "COM3" on a windows), or dependent on your setup (e.g. a different USB device on a mac or linux), in `server1.sh`:

```
var portName = '/dev/tty.usbmodem1421';
```

## Second server: Hello World with Express

The `server2.js` example is the Hello World for Express. Run

```
node server2.js
```

and open `http://localhost:3000/` in your browser. Hi, there.

## Third server: Get the Arduino's data into your web browser

The final `server3.js` combines these two functionalities. 

It tracks input from the Arduino and stores it in a `data` variable. Upon a HTTP request, it returns this stored data. 

Besides adding this `data` variable, the previous two examples have simply been merged.

Make sure to configure the `portName` in this script as with the first server. Run

```
node server3.js
```

and open `http://localhost:3000/` in your browser to see the last retreived data from the Arduino.
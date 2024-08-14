
# Spotter

Spotter is a Node.js web application that uses [Leaflet.js](https://leafletjs.com/) and [Socket.io](https://socket.io/) to display the real-time locations of all users currently accessing the application. Users can view the locations of others on a map that updates every 5 seconds.

## Live Website

Visit the live version of Spotter here: [Spotter Live Website](https://spotter-lo6y.onrender.com/)


## Features

- **Real-time Location Tracking:** Spotter uses Socket.io to ensure real-time communication between the server and clients, updating user locations every 5 seconds.
- **Interactive Map:** Built with Leaflet.js, the map provides an intuitive and user-friendly interface for viewing user locations.
- **Scalable:** Designed to handle multiple users simultaneously, updating their locations in real time.

## Screenshot

![image](https://github.com/user-attachments/assets/450739c5-7368-458f-8290-40dc707f3ffd)


## Technologies Used

- [Node.js](https://nodejs.org/en/) - Backend
- [Leaflet.js](https://leafletjs.com/) - Mapping library
- [Socket.io](https://socket.io/) - Real-time, bi-directional communication
- [Express.js](https://expressjs.com/) - Web framework for Node.js

## Installation

To get started with Spotter, follow these steps:

1.**Clone the repository:**

```bash
https://github.com/ryhthm09/Spotter.git
```

2.**Navigate to Project Directory:**
 ```bash
 cd spotter
```
3.**Install the dependencies:**
```bash
npm install
```
4.**Start the application:**
```bash
node app.js
```
5.**Open your browser and go to:**
```
http://localhost:3000
```
**Usage**
Once the application is running, users can open the provided URL in their web browsers. The application will prompt users for permission to access their current location. Once granted, the map will display their location and the locations of all other users connected to the application.

**Contributing**
Contributions are welcome! Please feel free to submit a pull request or issue to enhance the project.

**Contact**
For any questions or feedback, please reach out at:

Email:anandsharma1123@gmail.com
GitHub: @ryhthm09


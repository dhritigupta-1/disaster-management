# Disaster Management System

## Description

The **Disaster Management System** is a role-based web application designed to enable efficient coordination, communication, and response during emergency and disaster situations. The platform supports multiple user roles—**Citizens**, **Volunteers**, and **Administrators**—each with clearly defined responsibilities and access levels.

The system allows citizens to report incidents and send SOS alerts, volunteers to manage assigned rescue tasks, and administrators to oversee incident handling, SOS management, and emergency communications through a centralized control panel. The application emphasizes real-time incident tracking, location-based SOS handling, and structured workflows across all user roles.

---

## Key Features

* Role-based access for Citizens, Volunteers, and Administrators
* Incident reporting with real-time status tracking
* Volunteer assignment, acceptance, and completion workflow
* Global SOS functionality accessible without user authentication
* Browser-based geolocation capture for SOS alerts
* Google Maps integration for location-based directions
* Admin-controlled SOS lifecycle management (active, completed, false alarm)
* Emergency alert broadcasting to citizen and volunteer dashboards
* Administrative remarks, internal notes, and user communication tools

---

## Tech Stack

### Frontend

* React

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose (Object Data Modeling)

### APIs & Integrations

* Browser Geolocation API
* Google Maps API

### Architecture

* RESTful APIs
* Role-Based Access Control (RBAC)

---

## System Architecture

* **Frontend:** Dynamic, role-based dashboards with responsive UI updates
* **Backend:** REST APIs managing incidents, SOS requests, volunteer assignments, and alerts
* **Database:** MongoDB collections for users, incidents, SOS records, and emergency alerts
* **Location Services:** Real-time coordinate capture and mapping via Google Maps

---

## Core Functionalities

### Citizen

* Submit disaster incident reports
* Track incident status in real time
* Send SOS alerts without account login
* View emergency broadcast messages

### Volunteer

* View and accept assigned incidents
* Navigate to incident locations using map directions
* Mark incidents as completed
* Access completed incident history
* Receive emergency alerts

### Administrator

* Review and assign reported incidents
* Monitor and manage SOS alerts with live location data
* Mark SOS cases as completed or false alarms
* Broadcast emergency alerts to all users
* Add remarks, internal notes, and communicate with users

---

## Getting Started

### Prerequisites

* Node.js (v14 or higher)
* MongoDB (local or cloud instance)
* Git

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dhritigupta-1/disaster-management.git
   ```

2. Navigate to the project directory:

   ```bash
   cd disaster-management
   ```

3. Install backend dependencies:

   ```bash
   npm install
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

5. Start the frontend application:

   ```bash
   cd client
   npm install
   npm start
   ```

---

## Project Structure

```
disaster-management/
│
├── client/              # React frontend
│   ├── src/
│   └── package.json
│
├── server/              # Node.js backend
│   ├── models/          # Mongoose schemas
│   ├── routes/          # REST API routes
│   ├── controllers/     # Application logic
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

## Outcome

* Improved coordination between citizens, volunteers, and administrators
* Faster SOS response through real-time location tracking
* Structured, role-based workflows for disaster response
* Scalable architecture suitable for real-world emergency management systems

---

## Future Enhancements

* Authentication and authorization using JWT
* Real-time notifications using WebSockets
* Mobile application support
* Advanced analytics and reporting dashboards
* Cloud deployment and CI/CD integration

---

## Contributing

Contributions are welcome.
Please fork the repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the **MIT License**.

---

## Author

**Dhriti Gupta**
GitHub: [https://github.com/dhritigupta-1](https://github.com/dhritigupta-1)

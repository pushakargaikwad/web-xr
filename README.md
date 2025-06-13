# WebXR React Application

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-blue?logo=vite)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.169-blue?logo=three.js)](https://threejs.org/)

A modern WebXR application built with React, enabling immersive Virtual and Augmented Reality experiences directly in your web browser. This project demonstrates the capabilities of WebXR API using React components.

## Features

- 🎮 VR/AR Mode Support
- 🖱️ Interactive 3D Objects
- 🎯 Pointer Events
- 🔄 Transform Controls
- 📱 Cross-device Compatible

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v7 or higher)
- A WebXR-compatible browser and device

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pushakargaikwad/web-xr.git
   cd web-xr
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev -- --host
```

Use the following command to serve the app using the basicSsl plugin, allowing you to access it at https://your-ip-address:5173.

You may encounter a warning about an invalid certificate when accessing the site from your browser; you can safely ignore it to proceed.

```bash
npx vite serve --host
```

The `--host` flag makes the server accessible from other devices on your network, which is useful for testing on VR/AR devices.

## Technology Stack

- React (^18.3.1)
- Vite (^5.4.8)
- Three.js (^0.169.0)
- @react-three/fiber (^8.17.10)
- @react-three/xr (^6.4.8)
- @react-three/drei (^9.115.0)
- @react-three/handle (^6.5.1)
- TypeScript (^5.5.3)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

WebXR React Application is Free Software, released under the GNU Affero General Public License (AGPL-3.0). This means you have fundamental freedoms to use and enhance this software:

### Your Freedoms

- ✨ You can use this application for any purpose, including commercial use
- 🔄 You can study how the application works and modify it
- 🌍 You can share the application with others
- 🛠️ You can share your modifications with the community

The AGPL-3.0 license is chosen to protect these freedoms and ensure that improvements remain free software. This license extends the traditional GPL freedoms to network applications, ensuring that users interacting with the application over a network also receive these freedoms.

### License Requirements

To protect these freedoms for everyone, the license includes these key requirements:

- Share the complete source code when you distribute the software
- Maintain the same AGPL-3.0 license for modified versions
- Document significant changes made to the code
- Make source code available to users when running the application as a service

For complete license details, see the [LICENSE](LICENSE.txt) file.

We believe in the power of free software to foster innovation and community collaboration. By using AGPL-3.0, we ensure that this WebXR application remains free and open for everyone to use, study, and improve.

## Credits

Built using React Components and examples from [react-xr](https://github.com/pmndrs/react-xr)

## Copyright

Copyright © 2025, Pushakar Gaikwad and contributors.

## Repository

Project Link: [https://github.com/pushakargaikwad/web-xr](https://github.com/pushakargaikwad/web-xr)

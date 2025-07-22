# Capzio - Image Caption Generator

Capzio is a web application that leverages AI to generate descriptive captions for uploaded images.  Simply upload an image, and receive a caption within seconds!

## Key Features

* **AI-Powered Caption Generation:** Uses a trained TensorFlow model to generate captions.
* **User-Friendly Interface:**  Intuitive web application built with React.
* **Image Upload:** Easily upload images for caption generation.
* **Fast Captioning:**  Provides quick caption results.

## Technologies Used

* **Frontend:** React, Vite, Tailwind CSS, @mui/material, @mui/icons-material
* **Backend:** Flask, TensorFlow, Pillow, NumPy, Flask-CORS
* **Model:** Keras (TensorFlow backend)
* **Other:**  `repopack-py` (used for codebase packaging - not directly part of the application runtime)


## Prerequisites

Before running Capzio, ensure you have the following installed:

* **Python 3.7+:**  Including `pip` for package management.
* **Node.js 16+:** Including `npm` for package management.


## Installation

### Recommended Method: Windows Batch Script

The easiest way to install and run Capzio on Windows is by using the provided `run_all.bat` script.  Simply double-click it. This script will:

1. **Verify Python and Node.js installations:** Checks if Python and Node.js are correctly installed and accessible in your system's PATH environment variable.  Error messages will be displayed if either is missing.
2. **Install Python Dependencies:** Navigates to the `backend` directory and installs the required Python packages using `pip`.  This includes `flask`, `pillow`, `tensorflow`, `flask-cors`, and `numpy`.
3. **Install Node.js Dependencies:** Installs the frontend dependencies specified in `package.json` using `npm install`.
4. **Start Backend Server:** Launches the Flask backend server in a separate command prompt window.
5. **Start Frontend Server:** Launches the Vite development server (for the React frontend) in another separate command prompt window.
6. **Open Browser:** Automatically opens your default web browser to `http://localhost:5173`, the address of the running application.

### Manual Setup

For manual setup, follow these steps:

1. **Install Python Dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
   This installs all the necessary Python packages listed in `requirements.txt`.  If you encounter errors, ensure your Python installation and `pip` are correctly configured.

2. **Install Frontend Dependencies:**
   ```bash
   cd ..
   npm install
   ```
   This installs all frontend dependencies as defined in `package.json`.

3. **Start Backend Server:**
   ```bash
   cd backend
   python main.py
   ```
   This starts the Flask server on `http://localhost:5000`.

4. **Start Frontend Server:** In a separate terminal window:
   ```bash
   cd ..
   npm run dev
   ```
   This starts the Vite development server for the React application on `http://localhost:5173`.  Note that the `vite.config.js` file sets up a proxy to forward requests from `/api` to the backend server running on port 5000.


## Usage

1. Wait for both the backend and frontend servers to start completely.  This may take a few seconds.
2. Open your web browser at `http://localhost:5173`.
3. Click "Choose File" to select an image from your computer.
4. Click "Upload" to send the image to the server for processing.
5. View the AI-generated caption displayed on the right side of the application.


## Configuration

* **Backend (main.py):**  The backend server currently runs on port 5000 by default.  This can be changed by modifying the `port` parameter in the `app.run()` call within `backend/main.py`. The server uses Flask-CORS to handle Cross-Origin Resource Sharing.
* **Frontend (vite.config.js):** The `vite.config.js` file configures the development server and sets up a proxy to `http://127.0.0.1:5000` for API calls.  If you change the backend port, update the `target` in the `vite.config.js` file accordingly.

## Project Structure

```
Capzio/
├── backend/             # Flask backend
│   ├── Imageprocess.py  # Image processing and caption generation logic
│   ├── best.keras       # Trained TensorFlow model
│   ├── main.py          # Flask server API endpoints
│   ├── requirements.txt # Python dependencies
│   └── tokenizer.pkl    # Tokenizer for caption generation
├── public/              # Static files (Vite)
│   └── vite.svg        # Vite logo
├── src/                 # React frontend
│   ├── App.jsx          # Main React component
│   ├── assets/          # React components
│   │   ├── Components/  # Reusable UI components
│   │   └── ...          # other assets
│   ├── index.css        # Styles
│   └── main.jsx         # Entry point
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point for Vite
├── package.json         # Node.js dependencies
├── README.md            # This file
└── run_all.bat          # Windows batch script for easy setup and run
```

## Contributing

No explicit CONTRIBUTING guidelines were found in the provided codebase.  If you wish to contribute, please contact the project maintainer.


## License

No license information was explicitly found in the provided files.  Please clarify the license terms with the project owner.


## Error Handling and Troubleshooting

* **Python Errors:**  If you encounter errors during the Python dependency installation, check your Python installation, ensure `pip` is working correctly, and verify that the necessary dependencies (specified in `requirements.txt`) are available.  The `run_all.bat` script provides basic error checking and messaging for Python and Node.js.

* **TensorFlow Errors:** Ensure you have a compatible TensorFlow installation.  Check TensorFlow's documentation for troubleshooting if you encounter issues with model loading or prediction.

* **Frontend Errors:** Errors during frontend setup typically originate from `npm` or build process issues.  Refer to the Vite and React documentation for troubleshooting.

* **API Errors:**  The backend Flask API (`/predict-caption`) includes basic error handling, returning JSON responses with error messages.  Check your browser's developer console for detailed error messages from the server.

* **Network Errors:** If you encounter network-related errors (e.g., CORS issues), verify that your backend and frontend are running on the specified ports and that CORS is properly configured in both `vite.config.js` and `backend/main.py`.  The `run_all.bat` script waits for a short period (5 seconds) for server initialization to allow time for the servers to begin running correctly before attempting to open the application in a browser.


# Capzio - Image Caption Generator

Capzio is a web application that generates captions for images using AI. Upload an image, and get a descriptive caption in seconds!

## Prerequisites

- Python 3.7+ 
- Node.js 16+
- npm

## How to Run

### Windows (Recommended)

Simply double-click the `run_all.bat` file in the root directory. This will:

1. Check if Python and Node.js are installed
2. Install all required Python and npm dependencies
3. Start the backend server (Flask)
4. Start the frontend development server (Vite/React)
5. Open your browser to the application

### Manual Setup

If you prefer to set things up manually:

1. Install backend dependencies:
   ```
   cd backend
   pip install flask pillow tensorflow flask-cors numpy
   ```

2. Install frontend dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   cd backend
   python main.py
   ```

4. Start the frontend server (in a separate terminal):
   ```
   npm run dev
   ```

5. Open your browser to http://localhost:5173

## Usage

1. Wait for both servers to start
2. The application will open in your browser
3. Click "Choose File" to select an image
4. Click "Upload" to process the image
5. View the AI-generated caption that appears on the right

## Project Structure

- `/backend`: Flask server with the image processing and captioning logic
  - `main.py`: API endpoints
  - `Imageprocess.py`: Image processing and caption generation with TensorFlow
- `/src`: React frontend
  - Components in `/assets/Components/`

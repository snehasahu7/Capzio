from flask import Flask, jsonify, request
from PIL import Image
import Imageprocess
import os
from flask_cors import CORS
import io

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Image Caption API. Use /predict-caption to get predictions."}), 200

@app.route('/predict-caption', methods=['POST'])
def predict_caption():
    print("Received request to /predict-caption")
    
    if not request.files:
        print("No files in request")
        return jsonify({"error": "No files found in request"}), 400
    
    file = request.files.get('image')
    if file is None:
        print("No 'image' file found in request")
        return jsonify({"error": "No image file provided with key 'image'"}), 400

    try:
        print(f"Processing file: {file.filename}")
        
        # Read the file into memory
        file_data = file.read()
        
        # Process the received image file
        image = Image.open(io.BytesIO(file_data)).convert("RGB")
        target_size = (224, 224)
        image = image.resize(target_size)

        print("Generating caption...")
        # Generate caption using the Imageprocess module
        caption = Imageprocess.CaptionGenerator(image)
        print(f"Caption generated: {caption}")

        return jsonify({"prediction": caption}), 200

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("Starting server on port 5000...")
    app.run(debug=True, host='0.0.0.0', port=5000)

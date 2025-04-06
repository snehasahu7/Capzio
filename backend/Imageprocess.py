import os
import pickle
import numpy as np
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Model, load_model
import logging

# Set up logging
logger = logging.getLogger(__name__)

# Get the directory of the current file
current_dir = os.path.dirname(os.path.abspath(__file__))

# Load model with proper path
model_path = os.path.join(current_dir, 'best.keras')
logger.info(f"Loading model from {model_path}")
try:
    model = load_model(model_path)
    logger.info("Model loaded successfully")
except Exception as e:
    logger.error(f"Error loading model: {str(e)}")
    raise

# Load tokenizer with proper path
tokenizer_path = os.path.join(current_dir, 'tokenizer.pkl')
logger.info(f"Loading tokenizer from {tokenizer_path}")
try:
    with open(tokenizer_path, "rb") as f:
        tokenizer = pickle.load(f)
    logger.info("Tokenizer loaded successfully")
except Exception as e:
    logger.error(f"Error loading tokenizer: {str(e)}")
    raise

max_length = 35

# Load VGG16 model for feature extraction
logger.info("Loading VGG16 feature extractor")
try:
    feature_extractor = VGG16()
    feature_extractor = Model(inputs=feature_extractor.inputs, outputs=feature_extractor.layers[-2].output)
    logger.info("Feature extractor loaded successfully")
except Exception as e:
    logger.error(f"Error loading feature extractor: {str(e)}")
    raise

def extract_features(image):
    """Extract features from an image using VGG16."""
    try:
        logger.info(f"Processing image of type {type(image)}")
        image = img_to_array(image)
        image = np.expand_dims(image, axis=0)
        image = preprocess_input(image)
        logger.info("Extracting features with VGG16")
        feature = feature_extractor.predict(image, verbose=0)
        logger.info(f"Features extracted, shape: {feature.shape}")
        return feature
    except Exception as e:
        logger.error(f"Error extracting features: {str(e)}")
        raise

def generate_caption(model, tokenizer, photo, max_length):
    """Generate a caption for an image using the trained model."""
    try:
        in_text = 'startseq'
        for _ in range(max_length):
            sequence = tokenizer.texts_to_sequences([in_text])[0]
            sequence = pad_sequences([sequence], maxlen=max_length)
            yhat = model.predict([photo, sequence], verbose=0)
            yhat = np.argmax(yhat)
            word = None
            for w, index in tokenizer.word_index.items():
                if index == yhat:
                    word = w
                    break
            if word is None:
                break
            in_text += ' ' + word
            if word == 'endseq':
                break
        caption = in_text.replace('startseq', '').replace('endseq', '').strip()
        logger.info(f"Generated caption: {caption}")
        return caption
    except Exception as e:
        logger.error(f"Error generating caption: {str(e)}")
        raise

def CaptionGenerator(image):
    try:
        logger.info("Starting caption generation process")
        photo = extract_features(image)
        caption = generate_caption(model, tokenizer, photo, max_length)
        return caption
    except Exception as e:
        logger.error(f"Error in CaptionGenerator: {str(e)}")
        raise

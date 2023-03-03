from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/pois")
def pois():
    """
    Load the "pois.json" file. It contains a list of dicts with the following fields:
        - name
        - location
        - phone
        - rating
        - website
    For each restaurant change rating element:
        - If rating is above 4.5 rating should be "Excelente"
        - In any other case, rating should be "Muy bueno"
    Then return the transformed data
    """
    return {}

if __name__ == "__main__":
    # Executing will make the API available in 
    # localhost:5000
    app.run()

from flask import Flask
from flask_cors import CORS

app =  Flask(__name__)
CORS(app)

@app.route("/", methods=["GET", "POST"])
def home():
    return "Hi Porsche!"


app.run(debug=True)

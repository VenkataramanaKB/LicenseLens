from flask import Flask
from routes import routes
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})
app.register_blueprint(routes)

@app.route("/")
def home():
    return "Flask app is running!", 200

if __name__ == "__main__":
    app.run()

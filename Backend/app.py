from flask import Flask
from routes import routes

app = Flask(__name__)
app.register_blueprint(routes)

@app.route("/")
def home():
    return "Flask app is running!", 200

if __name__ == "__main__":
    app.run()

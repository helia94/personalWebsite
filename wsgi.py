from client_app import client
from backend.app import app

# sets up the app

app.register_blueprint(client, url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True)
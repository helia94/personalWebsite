from os import path

from flask import Blueprint, send_from_directory

client = Blueprint("client", __name__, static_folder=path.join("frontend", "build"))


@client.route("/", defaults={"file_path": ""})
@client.route("/<path:file_path>")
def serve(file_path):
    if file_path and path.exists(path.join(client.static_folder, file_path)):
        return send_from_directory(client.static_folder, file_path)
    return send_from_directory(client.static_folder, "index.html")


@client.route("/static/<path:path_to_file>/<string:file_name>")
def serve_static(path_to_file, file_name):
    print(path_to_file, file_name)

    return send_from_directory(
        path.join(client.static_folder, "static", path_to_file), file_name
    )

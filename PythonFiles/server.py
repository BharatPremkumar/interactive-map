from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return 'Flask server is running'


@app.route('/submit', methods=['GET'])
def handle_form_submission():
    try:
        # Get the data from the query parameters in the URL
        location_name = request.args.get('locationName')

        # Fetch data from the database based on the location_name
        connection = sqlite3.connect('oslo_locations.db')
        cursor = connection.cursor()
        cursor.execute(
            "SELECT id FROM locationOslo WHERE location = ?",
            (location_name,)
        )
        data = cursor.fetchone()
        connection.close()

        if data:
            # If data is found, send the ID value as a JSON response
            result = {'id': data[0]}
            return jsonify(result), 200
        else:
            # If data is not found, send a 404 response
            response = {'message': 'Data not found'}
            return jsonify(response), 404
    except Exception as e:
        # Send an error response back to the JavaScript code
        response = {'error': str(e)}
        return jsonify(response), 500


if __name__ == '__main__':
    app.run()

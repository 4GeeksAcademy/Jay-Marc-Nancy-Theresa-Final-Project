"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from simyan.comicvine import Comicvine
from simyan.sqlite_cache import SQLiteCache

import requests

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/api/comics/publishers", methods=["GET"])
def get_publishers():
    """
    GET: <url>/api/comics/publishers?limit=<int>&offset=<int>
    """
    query = request.args
    session = Comicvine(api_key="95a8680d433d9ff13c2e5dd7eb480ff23089772d", cache=SQLiteCache())
    results = session.list_publishers(
        max_results=int(query.get("limit", 25)),
        params={
        "offset": int(query.get("offset", 0)),
        }
    )
    print(results)
    publishers = []
    for pub in results:
        #  https://simyan.readthedocs.io/en/latest/simyan/schemas/publisher/
        publishers.append({
            "name": pub.name,
            "site_url": pub.site_url
        })
    return jsonify(results=publishers)
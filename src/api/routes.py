"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_mail import Mail, Message
import secrets
import app
# from dotenv import load_dotenv

api = Blueprint('api', __name__)   



# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        raise APIException('User not found', status_code=404)
    access_token = create_access_token(identity=email)
    user_id = user.id
    return jsonify(access_token=access_token, user_id=user_id) 


@api.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify(all_users), 200      

@api.route('/user/<int:id>', methods=['GET'])   
def get_user(id):   
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    return jsonify(user.serialize()), 200

@api.route('/signup', methods=['POST'])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    phone = request.json.get("phone", None)    
    user.is_active = True
    
    user = User.query.filter_by(email=email).first()
    if user is None:
         new_user_data = User(email= email, password=password, first_name=first_name, last_name=last_name, phone=phone,)
         db.session.add(new_user_data)
         db.session.commit()
         return jsonify({"msg": "Account created successfully!"}), 201
    return jsonify({"error": "Email already registered, please login."}), 401  


@api.route('/user/<int:id>', methods=['PUT'])
def update_user(id):
    body = request.get_json()
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    if "email" in body:
        user.email = body["email"]
    if "password" in body:
        user.password = body["password"]
    if "is_active" in body:
        user.is_active = body["is_active"]
    db.session.commit()
    return jsonify(user.serialize()), 200   

@api.route('/user/<int:id>', methods=['DELETE'])    
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    db.session.delete(user)
    db.session.commit()
    return jsonify(user.serialize()), 200       

@api.route('/private', methods=['GET'])
@jwt_required()
def get_private():
    return jsonify({"msg": "This is a private endpoint, you need to be logged in to see it"}), 200


@api.route('/forgot-password', methods=['POST'])
def forgot_password():
    email = request.json.get("email", None)
    token = secrets.token_urlsafe(16)
    user = User.query.filter_by(email=email).first()
    if user is None:
        raise APIException('User not found', status_code=404)    
    
    reset_user = User(email=email, token=token)
    db.session.add(reset_user)
    db.session.commit()
    
    app.send_reset_email(email, token)
    return jsonify({'msg': 'Please check your email for password reset instructions.'}), 200


@api.route('/reset-password', methods=['GET','POST'])
def reset_password():
    new_password = request.json.get("newPassword", None)
    token = request.json.get("token", None)
    email = request.json.get("email", None)
    user = User.query.filter_by(email=email, token=token).first()
    if user is None:
        raise APIException('User not found', status_code=404)
    user.password = new_password
    db.session.commit()
    return jsonify({'msg': 'your password changes successfully, please return to login'}), 200
   


@api.route('/change-password', methods=['POST'])
def change_password():
    email = request.json.get("email", None)
    oldPassword = request.json.get("oldPassword", None)
    newPassword = request.json.get("newPassword", None)

    if email is None:
        raise APIException('Email is required.', status_code=404)    
    if oldPassword is None:
        raise APIException('Old password is required.', status_code=404)
    if newPassword is None:
        raise APIException('New password is required.', status_code=404)
    
    user = User.query.filter_by(email=email, password=oldPassword).first()
    if user is None:
        raise APIException('User not found', status_code=404)
    user.password = newPassword
    db.session.commit()
    return jsonify(user.serialize()), 200
    # return jsonify({'msg': 'your password changes successfully, please return to login'}), 200

    # Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
# @api.route("/hello", methods=["GET"])
# @jwt_required()
# def get_hello():
#     msg = {"message": "Hello from the backend!"}
#     # return jsonify(msg)
#     # Access the identity of the current user with get_jwt_identity
#     current_user = get_jwt_identity()
#     return jsonify(logged_in_as=current_user), 200
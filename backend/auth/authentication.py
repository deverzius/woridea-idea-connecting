from utils.utils import connect_db
from bson.objectid import ObjectId
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import authentication
from account.models import Account


class CustomAuthentication(authentication.BaseAuthentication):
    db = connect_db()
    collection = db.get_collection("innovator_profile")

    def authenticate(self, request, username=None, password=None):
        jwt_authenticator = JWTAuthentication()
        header = jwt_authenticator.get_header(request)
        if header is None:
            return None

        raw_token = jwt_authenticator.get_raw_token(header)
        if raw_token is None:
            return None
        validated_token = jwt_authenticator.get_validated_token(raw_token)

        # print(validated_token.__dict__)
        return self.get_user(validated_token), validated_token

    def get_user(self, validated_token):
        res = self.collection.find_one({"_id": ObjectId(validated_token["user_id"])})
        user = Account(res["_id"], res["name"], res["email"], res["role"])
        return user

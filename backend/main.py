from flask import Flask, Response, g
from flask_cors import CORS 
import pymysql
import logging

app = Flask(__name__)
CORS(app)

db = pymysql.connect(host="localhost", user="root", password="12340987", db="portfolio_website", autocommit=True)
# db.commit() # By setting autocommit as True we can ignore this

# @app.route("/api/recommendations", methods=["GET"])
# def get_recommendation():
#     try:
#         db = pymysql.connect(
#             host="localhost", user="root", password="12340987", db="portfolio_website", autocommit=True
#         )
#         cursor = db.cursor()
#         query = "select * from recommendations where onShowcase=True;"
#         cursor.execute(query)
        
#         recommendations = cursor.fetchall()
        
#         results = []
#         for recommendation in recommendations:
#             recom_object = {
#                 "id" : recommendation[0],
#                 "name" : recommendation[1],
#                 "company" : recommendation[3],
#                 "designation" : recommendation[4],
#                 "recommendation" : recommendation[5],
#             }
#             results.append(recom_object)
#         # print(results)
        
#         cursor.close()
#         db.close()
#         return {"isSuccessful": True, "results": results}
#     except Exception as e:
#         logging.error(e)
#         return {"isSuccessful": False, "results": []}
    
# @app.route("/api/skills", methods=["GET", "POST"])
# def get_skills():
#     try:
#         db = pymysql.connect(
#             host="localhost", user="root", password="12340987", db="portfolio_website", autocommit=True
#         )
#         cursor.execute(query)
        
#         skills = cursor.fetchall()
        
#         results = []
#         for skill in skills:
#             skills_obj = {
#                 "id" : skills[0],
#                 "name" : skills[1],
#                 "imageUrl" : skills[2],
#                 "starTotal" : skills[3],
#                 "starActive" : skills[4],
#             }
#             results.append(skills_obj)
        
#         cursor.close()
#         db.close()
#         return {"isSuccessful": True, "results": results}
#     except Exception as e:
#         logging.error(e)
#         return {"isSuccessful": False, "results": []}

# Dummy

@app.route("/", methods=["GET"])
def home():
    cursor = db.cursor()
    cmd = "show tables;"
    cursor.execute(cmd)
    tables = cursor.fetchall()   # fetch all the data and store it in variable
    print(tables)
    
    return "Hello Sameera!"
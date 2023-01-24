from fastapi import FastAPI
from "../MLS_analysi.ipynb" import plot

app = FastAPI()

@app.get("/")
def hello():
  return plot

@app.get("/test")
def hello():
  return {"Hello test! 2"}
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def hello():
  return {"Hello world! 2"}

@app.get("/test")
def hello():
  return {"Hello test! 2"}
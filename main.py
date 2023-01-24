from fastapi import FastAPI
from fastapi import Response

from ipynb.fs.full.MLS_analysi import ontario_avg_comp
from ipynb.fs.full.MLS_analysi import rolling_ontario_avg_comp

app = FastAPI()

@app.get("/ontario_avg_comp")
def ontario_avg_comp_api():
  return Response(content=ontario_avg_comp(), media_type="application/json")


@app.get("/rolling_ontario_avg_comp")
def rolling_ontario_avg_comp_api():
  return Response(content=rolling_ontario_avg_comp().to_json(), media_type="application/json")


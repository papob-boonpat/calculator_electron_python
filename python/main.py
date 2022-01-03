import calculation.calcbrain as calc
import calculation.history as his
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/calculation", methods=['POST'])
def calculation():
  val = request.form.get('value')
  return calc.calcbrain(val)

@app.route("/history", methods=['POST'])
def history():
  val = request.form.get('value')
  return his.generateHistory(val)

if __name__ == "__main__":
  app.run(debug=True, port=5000)
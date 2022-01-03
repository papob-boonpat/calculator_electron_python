import json

history = []

def generateHistory(result):
    if (result == "clear") :
      del(history[:])
      return "null"
    elif (result == ""):
      convert = json.dumps(history)
      return(convert)
    else: 
      if len(history) <= 10:
        history.append(result)
        return(history)
      else:
        del history[0]
        return(history)
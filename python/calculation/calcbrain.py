import re
import calculation.history as his

def calcbrain(getval): 
  val = getval.replace(" ", "")
  if "+" in val:
    res = val.split("+")
    val_a = float(res[0])
    val_b = float(res[1])
    result = val_a + val_b
    forHis = str(getval) + " = " + str(result)
    his.generateHistory(forHis)
    return(str(result))
  if "x" in val:
    res = val.split("x")
    val_a = float(res[0])
    val_b = float(res[1])
    result = val_a * val_b
    forHis = str(getval) + " = " + str(result)
    his.generateHistory(forHis)
    return(str(result))
  if "-" in val:
    res = val.split("-")
    val_a = float(res[0])
    val_b = float(res[1])
    result = val_a - val_b
    resultStr = str(result)
    removeMin = resultStr.replace("-", "")
    forHis = str(getval) + " = " + str(result)
    his.generateHistory(forHis)
    return(removeMin)
  if "/" in val:
    res = val.split("/")
    val_a = float(res[0])
    val_b = float(res[1])
    result = val_a / val_b
    forHis = str(getval) + " = " + str(result)
    his.generateHistory(forHis)
    return(str(result))
  else:
    return (getval)
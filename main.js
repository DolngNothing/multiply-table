function createMultiplyTable(start, end) {
  if (isInRange(start, end) && isStartStEnd(start, end)) {
    return generateAllLines(start,end);
  } else {
    return null;
  }

}
function generateAllLines(start, end) {
  var multiplyTable = "";
  for (var i = start; i <= end; i++) {
    var line=generateLine(start,i,end);
    multiplyTable=multiplyTable+line;
  }
  return multiplyTable;
}

function generateLine(lineStart,lineEnd,end){
  var line="";
  for (var j = lineStart; j <= lineEnd; j++) {
    var expre=generateExpression(j,lineEnd,end);
    line = line +expre;
  }
  return line;
}

function generateExpression(multiplicand,multiplier,end){
  var mulit = multiplicand + "*" + multiplier + "=" + multiplicand * multiplier;
    if (multiplicand == multiplier) {
      if (multiplicand !== end)
        mulit = mulit + "\n";
      else {
      }
    }
    else {
      mulit = mulit + "\t";
    }
  return mulit;
}

function isStartStEnd(start, end) {
  if (start >= end) {
    return false;
  }
  return true;
}

function isInRange(start, end) {
  if (start >= 1 && end <= 1000) {
    return true;
  }
  return false;
}

module.exports = {
  createMultiplyTable,
};

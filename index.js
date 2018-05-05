var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

currentLine(katzDeliLine);
katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)
}
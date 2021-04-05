let shipmentAmount;


let howManyHundreds = function(amount) {
  shipmentAmount = amount / 100
  shipmentAmount = Math.floor(shipmentAmount)
  return shipmentAmount
}



console.log(` ${howManyHundreds(1803)}, =?, ${shipmentAmount}`);

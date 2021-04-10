const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations (stations) {
  const acceptableOption = []
  const unacceptableOption = []

  for (const station of stations) {
    let capacity = station[1]
    let buildingName = station[0]
    let buildingType = station[2]
    
    if (capacity >= 20) {
      if (buildingType === 'community centre' || buildingType === 'school') {
        acceptableOption.push(buildingName)
      }
    } else {
      unacceptableOption.push(buildingName)
    }

  }

  return acceptableOption
}

console.log(chooseStations(stations));
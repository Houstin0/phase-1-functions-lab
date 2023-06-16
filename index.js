// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hq = 42
    const distance=Math.abs(blocks - hq)

     return distance
  }
  distanceFromHqInBlocks()

  function distanceFromHqInFeet(blocks) {
    const blockLengthInFeet = 264

    return distanceFromHqInBlocks(blocks) * blockLengthInFeet
  }
  distanceFromHqInFeet()

  function distanceTravelledInFeet(start, destination) {
    const blockLengthInFeet = 264

    const distanceInBlocks = Math.abs(destination - start) 
    const distanceInFeet = distanceInBlocks * blockLengthInFeet

    return distanceInFeet
  }
  distanceTravelledInFeet()

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination)
    let farePrice
  
    if (distanceInFeet <=400) {
      return farePrice = 0
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return farePrice = (distanceInFeet - 400) * 0.02
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return farePrice = 25
    } else if(distanceInFeet>2500) {
      return farePrice = 'cannot travel that far'
    }
  }
  calculatesFarePrice()
// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;      
  } else {
    return 42 - blockNumber;
  }
}



//       // 1) returns a distance in blocks
//       // 2) returns a distance in blocks
//       // 3) calculates distances below 42nd street
function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber) * 264;
}
//       // 4) returns a distance in feet
//       // 5) returns a distance in feet
//       // 6) calculates distances below 42nd street
function distanceTravelledInFeet(start, end){
  if (start > end){
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}
//       // 7) returns the distance travelled in feet
//       // 8) returns a distance in feet
//       // 9) returns distance when destination is below distance
function calculatesFarePrice(start, end){
  const distance = distanceTravelledInFeet(start, end);
  if (distance > 2500) {
    return 'cannot travel that far';
  } 
  else if (distance <= 400){
    return 0;
  }
  else if (distance > 2000) {
    return 25;
  } else {
    return (0.02 * (distance - 400));
  }
}
//       // 10) gives customers a free sample
//       // 11) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//       // 12) charges 25 dollars for a distance over 2000 feet
//       // 13) does not allow rides over 2500 feet
// 'cannot travel that far'
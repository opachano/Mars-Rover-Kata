// Rover Object Goes Here

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]],
};

// ======================

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case "N": rover.direction = "W";
              break;
    case "W": rover.direction = "S";
              break;
    case "S": rover.direction = "E";
              break;
    case "E": rover.direction = "N";
              break;                              
  }
    
};

function turnRight(rover){
  switch (rover.direction) {
    case "N": rover.direction = "E";
              break;
    case "E": rover.direction = "S";
              break;
    case "S": rover.direction = "W";
              break;
    case "W": rover.direction = "N";
              break;                              
  }
};

function moveForward(rover){
  if (rover.direction === "N") {
    rover.y--;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "S") {
    rover.y++;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "E") {
    rover.x++;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "W") {
    rover.x--;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  }   
};

function commands(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "f") {
      moveForward(rover);
    } else if (str[i] === "r") {
      turnRight(rover);
    } else if (str[i] === "l") {
      turnLeft(rover);
    }
  } console.log(rover.travelLog);
}
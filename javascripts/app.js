// Rover Object Goes Here

let rover = {
  direction: "N",
  x: 0,
  y: 0
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
  } else if (rover.direction === "S") {
    rover.y++;
  } else if (rover.direction === "E") {
    rover.x++;
  } else if (rover.direction === "W") {
    rover.x--;
  }   
};


//Grid Goes Here

let grid = [
  ["clear", "stone", "stone", "clear", "stone", "clear", "clear", "clear", "clear", "clear"],
  ["clear", "clear", "clear", "clear", "stone", "stone", "clear", "clear", "clear", "clear"],
  ["clear", "clear", "clear", "clear", "clear", "clear", "clear", "clear", "stone", "clear"],
  ["clear", "clear", "stone", "clear", "clear", "clear", "clear", "clear", "stone", "clear"],
  ["clear", "clear", "stone", "clear", "clear", "clear", "clear", "clear", "clear", "clear"],
  ["clear", "clear", "stone", "clear", "clear", "stone", "clear", "clear", "clear", "clear"],
  ["clear", "clear", "clear", "clear", "clear", "clear", "clear", "clear", "clear", "clear"],
  ["stone", "clear", "clear", "clear", "stone", "clear", "clear", "clear", "clear", "clear"],
  ["stone", "clear", "clear", "clear", "clear", "clear", "clear", "clear", "stone", "stone"],
  ["clear", "clear", "clear", "clear", "clear", "clear", "clear", "clear", "clear", "clear"]
];

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

function moveForward(rover) {
  if (rover.direction === "N" && rover.y !== 0) {
    if (grid[rover.y - 1][rover.x] !== "clear") {
      return console.log("ERROR: " + grid[rover.y - 1][rover.x] + " found, can't proceed!");
    };
    rover.y--;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "S" && rover.y !== 9) {
    if (grid[rover.y + 1][rover.x] !== "clear") {
      return console.log("ERROR: " + grid[rover.y + 1][rover.x] + " found, can't proceed!");
    };
    rover.y++;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "E" && rover.x !== 9) {
    if (grid[rover.y][rover.x + 1] !== "clear") {
      return console.log("ERROR: " + grid[rover.y][rover.x + 1] + " found, can't proceed!");
    };
    rover.x++;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "W" && rover.x !== 0) {
    if (grid[rover.y][rover.x - 1] !== "clear") {
      return console.log("ERROR: " + grid[rover.y][rover.x - 1] + " found, can't proceed!");
    };
    rover.x--;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  }   else return console.log("ERROR: ROVER CAN'T MOVE OUT OFF GRID!");
};

function moveBackward(rover){
  if (rover.direction === "N" && rover.y !== 9) {
    if (grid[rover.y + 1][rover.x] !== "clear") {
      return console.log("ERROR: " + grid[rover.y + 1][rover.x] + " found, can't proceed!");
    };
    rover.y++;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "S" && rover.y !== 0) {
    if (grid[rover.y - 1][rover.x] !== "clear") {
      return console.log("ERROR: " + grid[rover.y - 1][rover.x] + " found, can't proceed!");
    };
    rover.y--;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "E" && rover.x !== 0) {
    if (grid[rover.y][rover.x - 1] !== "clear") {
      return console.log("ERROR: " + grid[rover.y][rover.x - 1] + " found, can't proceed!");
    };
    rover.x--;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  } else if (rover.direction === "W" && rover.x !== 9) {
    if (grid[rover.y][rover.x + 1] !== "clear") {
      return console.log("ERROR: " + grid[rover.y][rover.x + 1] + " found, can't proceed!");
    };
    rover.x++;
    rover.travelLog.push([rover.x, rover.y]);
    console.log("Rover located at: " + rover.x + "," + rover.y);
  }   else return console.log("ERROR: ROVER CAN'T MOVE OUT OFF GRID!");
};

function commands(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "f" && str[i] !== "b" && str[i] !== "r" && str[i] !== "l") {
      console.log("ERROR: " + str[i] + " IS NOT A VALID COMMAND!");
      continue;
    }
    if (str[i] === "f") {
      moveForward(rover);
    } else if (str[i] === "b") {
      moveBackward(rover);
    } else if (str[i] === "r") {
      turnRight(rover);
    } else if (str[i] === "l") {
      turnLeft(rover);
    }
  } console.log(rover.travelLog);
}
import ToyRobotSimulator from './src/ToyRobotSimulator.js';

const result = ToyRobotSimulator.run(`PLACE 0,0,NORTH\nMOVE\nREPORT`);

console.log(result);
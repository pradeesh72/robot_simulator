import ToyRobotSimulator from "../ToyRobotSimulator";

describe('ToyRobotSimulator', () => {
  describe('.run', () => {
    describe('before placing', () => {
      const commands = `MOVE\nMOVE\nMOVE\nLEFT\nREPORT\n`

      let result;

      beforeEach(() => {
        result = ToyRobotSimulator.run(commands);
      });

      it('Trying to move before placing', () => {
        expect(result).toEqual('Output: Not on table yet')
      });
    });
    describe('correct move', () => {
      const commands = `PLACE 0,0,NORTH-WEST\nREPORT\n`

      let result;

      beforeEach(() => {
        result = ToyRobotSimulator.run(commands);
      });

      it('logs that the simulator is running', () => {
        expect(result).toEqual('Output: 0,0,NORTH-WEST')
      });
    });


    describe('correct move', () => {
      const commands = `RIGHT\nRIGHT\nMOVE\nREPORT\n`

      let result;

      beforeEach(() => {
        result = ToyRobotSimulator.run(commands);
      });

      it('logs that the simulator is running', () => {
        expect(result).toEqual('Output: 1,1,NORTH-EAST')
      });
    });
    
  });
});

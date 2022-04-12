export default class ToyRobotSimulator {
  static length_of_table = 5;
  static width_of_table = 5;
  static current_x = -1;
  static current_y = -1;
  static current_dir = 0;
  static directions = [
    [1,0, 'North'], //North
    [1,1, 'North-East'], //North East
    [0,1, 'East'], //East
    [-1,1, 'South-East'], //South East
    [-1,0, 'South'], //South
    [-1, -1, 'South-West'], //South West
    [0, -1, 'West'], // West
    [1, -1, 'North-West'] //North West
  ];
  static north_south = 1;
  static east_west = 0;
  static run(input) {
    const commands = input.split("\n");
    let output = '', result = '';

    for (let command of commands) {
      command = command.split(" ");
      let args = [];
      if (command.length >  1) {
        args = command[1];
        args = args.split(',');
      }
      command = command[0].toLowerCase();
      if(command != 'run' && this[command] && typeof(this[command]) == 'function') {
        output = this[command].apply(this, args);
        if(output) result += output;
      }
    }
    return 'Output: ' + result;
  }
  static place(x, y, direction) {
    x = parseInt(x);
    y = parseInt(y);
    if(x < 0 || x >= this.length_of_table || y < 0 || y >= this.width_of_table) {
        return false;
    }
    this.current_x = x;
    this.current_y = y;
    direction = direction.toUpperCase();
    switch(direction) {
      case "NORTH":
        this.north_south = 1;
        this.east_west = 0;
        this.current_dir = 0;
        break;
      case "SOUTH":
        this.north_south = -1;
        this.east_west = 0;
        this.current_dir = 4;
        break;
      case "EAST":
        this.north_south = 0;
        this.east_west = 1;
        this.current_dir = 2;
        break;
      case "WEST":
        this.north_south = 0;
        this.east_west = -1;
        this.current_dir = 6;
        break;
      case "NORTH-WEST":
        this.north_south = 1;
        this.east_west = -1;
        this.current_dir = 7;
        break;
      case "NORTH-EAST":
        this.north_south = 1;
        this.east_west = 1;
        this.current_dir = 1;
        break;
      case "SOUTH-WEST":
        this.north_south = -1;
        this.east_west = -1;
        this.current_dir = 5;
        break;
      case "SOUTH-EAST":
        this.north_south = -1;
        this.east_west = 1;
        this.current_dir = 3;
        break;
    }
  }

  static move() {
    let temp_x = this.current_x + this.directions[this.current_dir][1];
    let temp_y = this.current_y + this.directions[this.current_dir][0];
    if (temp_x < 0 || temp_y < 0 || temp_x >= this.length_of_table || temp_y >= this.width_of_table) return;
    this.current_x = temp_x;
    this.current_y = temp_y;
  }
  static left() {
    this.current_dir = !this.current_dir ? 7: (this.current_dir - 1);
  }

  static right() {
    this.current_dir = (this.current_dir + 1) % 8;
  }
  static report() {
    if(this.current_x < 0 || this.current_y < 0) {
        return "Not on table yet";
    }

      let direction = this.directions[this.current_dir][2].toUpperCase();

    return [this.current_x, this.current_y, direction].join(',');
  }

}

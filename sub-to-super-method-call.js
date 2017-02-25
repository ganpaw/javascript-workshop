function Entity(x, y) {

  this.x = x;
  this.y = y;

  this.tick = function() {
    console.log("Entity.tick");
  }
}

function Player(x, y) {

  this.parent.constructor.call(this, x, y);

  var oldtick = this.tick;
  this.tick = function() {
    console.log("Player.tick");
    console.log(this);
    oldtick.call(this);
    //oldtick.bind(this)();
  }
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;
Player.prototype.parent = Entity.prototype;

var player = new Player(2, 5);
player.tick();

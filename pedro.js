var Pedro = function (x, y) {
  this._x = x;
  this._y = y;
  this._draw();
}

Pedro.prototype._draw = function () {
  Game.display.draw(this._x, this._y, "P", "red");
}

export default Pedro
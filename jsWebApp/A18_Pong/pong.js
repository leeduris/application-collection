'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vec = function () {
    function Vec() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Vec);

        this.x = x;
        this.y = y;
    }

    _createClass(Vec, [{
        key: 'len',
        get: function get() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        set: function set(value) {
            var f = value / this.len;
            this.x *= f;
            this.y *= f;
        }
    }]);

    return Vec;
}();

var Rect = function () {
    function Rect() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Rect);

        this.pos = new Vec(0, 0);
        this.size = new Vec(x, y);
    }

    _createClass(Rect, [{
        key: 'left',
        get: function get() {
            return this.pos.x - this.size.x / 2;
        }
    }, {
        key: 'right',
        get: function get() {
            return this.pos.x + this.size.x / 2;
        }
    }, {
        key: 'top',
        get: function get() {
            return this.pos.y - this.size.y / 2;
        }
    }, {
        key: 'bottom',
        get: function get() {
            return this.pos.y + this.size.y / 2;
        }
    }]);

    return Rect;
}();

var Ball = function (_Rect) {
    _inherits(Ball, _Rect);

    function Ball() {
        _classCallCheck(this, Ball);

        var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, 10, 10));

        _this.vel = new Vec();
        return _this;
    }

    return Ball;
}(Rect);

var Player = function (_Rect2) {
    _inherits(Player, _Rect2);

    function Player() {
        _classCallCheck(this, Player);

        var _this2 = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, 20, 100));

        _this2.vel = new Vec();
        _this2.score = 0;

        _this2._lastPos = new Vec();
        return _this2;
    }

    _createClass(Player, [{
        key: 'update',
        value: function update(dt) {
            this.vel.y = (this.pos.y - this._lastPos.y) / dt;
            this._lastPos.y = this.pos.y;
        }
    }]);

    return Player;
}(Rect);

var Pong = function () {
    function Pong(canvas) {
        var _this3 = this;

        _classCallCheck(this, Pong);

        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.initialSpeed = 250;

        this.ball = new Ball();

        this.players = [new Player(), new Player()];

        this.players[0].pos.x = 40;
        this.players[1].pos.x = this._canvas.width - 40;
        this.players.forEach(function (p) {
            return p.pos.y = _this3._canvas.height / 2;
        });

        var lastTime = null;
        this._frameCallback = function (millis) {
            if (lastTime !== null) {
                var diff = millis - lastTime;
                _this3.update(diff / 1000);
            }
            lastTime = millis;
            requestAnimationFrame(_this3._frameCallback);
        };

        this.CHAR_PIXEL = 10;
        this.CHARS = ['111101101101111', '010010010010010', '111001111100111', '111001111001111', '101101111001001', '111100111001111', '111100111101111', '111001001001001', '111101111101111', '111101111001111'].map(function (str) {
            var canvas = document.createElement('canvas');
            var s = _this3.CHAR_PIXEL;
            canvas.height = s * 5;
            canvas.width = s * 3;
            var context = canvas.getContext('2d');
            context.fillStyle = '#fff';
            str.split('').forEach(function (fill, i) {
                if (fill === '1') {
                    context.fillRect(i % 3 * s, (i / 3 | 0) * s, s, s);
                }
            });
            return canvas;
        });

        this.reset();
    }

    _createClass(Pong, [{
        key: 'clear',
        value: function clear() {
            this._context.fillStyle = '#000';
            this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
        }
    }, {
        key: 'collide',
        value: function collide(player, ball) {
            if (player.left < ball.right && player.right > ball.left && player.top < ball.bottom && player.bottom > ball.top) {
                ball.vel.x = -ball.vel.x * 1.05;
                var len = ball.vel.len;
                ball.vel.y += player.vel.y * .2;
                ball.vel.len = len;
            }
        }
    }, {
        key: 'draw',
        value: function draw() {
            var _this4 = this;

            this.clear();

            this.drawRect(this.ball);
            this.players.forEach(function (player) {
                return _this4.drawRect(player);
            });

            this.drawScore();
        }
    }, {
        key: 'drawRect',
        value: function drawRect(rect) {
            this._context.fillStyle = '#fff';
            this._context.fillRect(rect.left, rect.top, rect.size.x, rect.size.y);
        }
    }, {
        key: 'drawScore',
        value: function drawScore() {
            var _this5 = this;

            var align = this._canvas.width / 3;
            var cw = this.CHAR_PIXEL * 4;
            this.players.forEach(function (player, index) {
                var chars = player.score.toString().split('');
                var offset = align * (index + 1) - cw * chars.length / 2 + _this5.CHAR_PIXEL / 2;
                chars.forEach(function (char, pos) {
                    _this5._context.drawImage(_this5.CHARS[char | 0], offset + pos * cw, 20);
                });
            });
        }
    }, {
        key: 'play',
        value: function play() {
            var b = this.ball;
            if (b.vel.x === 0 && b.vel.y === 0) {
                b.vel.x = 200 * (Math.random() > .5 ? 1 : -1);
                b.vel.y = 200 * (Math.random() * 2 - 1);
                b.vel.len = this.initialSpeed;
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            var b = this.ball;
            b.vel.x = 0;
            b.vel.y = 0;
            b.pos.x = this._canvas.width / 2;
            b.pos.y = this._canvas.height / 2;
        }
    }, {
        key: 'start',
        value: function start() {
            requestAnimationFrame(this._frameCallback);
        }
    }, {
        key: 'update',
        value: function update(dt) {
            var _this6 = this;

            var cvs = this._canvas;
            var ball = this.ball;
            ball.pos.x += ball.vel.x * dt;
            ball.pos.y += ball.vel.y * dt;

            if (ball.right < 0 || ball.left > cvs.width) {
                ++this.players[ball.vel.x < 0 | 0].score;
                this.reset();
            }

            if (ball.vel.y < 0 && ball.top < 0 || ball.vel.y > 0 && ball.bottom > cvs.height) {
                ball.vel.y = -ball.vel.y;
            }

            this.players[1].pos.y = ball.pos.y;

            this.players.forEach(function (player) {
                player.update(dt);
                _this6.collide(player, ball);
            });

            this.draw();
        }
    }]);

    return Pong;
}();

var canvas = document.querySelector('#pong');
var pong = new Pong(canvas);

canvas.addEventListener('click', function () {
    return pong.play();
});

canvas.addEventListener('mousemove', function (event) {
    var scale = event.offsetY / event.target.getBoundingClientRect().height;
    pong.players[0].pos.y = canvas.height * scale;
});

pong.start();
var map = document.getElementById('map');

// Snake 1
function Snake_1() {
	this.width = 10;
	this.height = 10;
	this.direction = 'left';

	// Start 6 points
	this.body_1 = [
		{
			x: 74,
			y: 0
		},
		{
			x: 75,
			y: 0
		},
		{
			x: 76,
			y: 0
		},
		{
			x: 77,
			y: 0
		},
		{
			x: 78,
			y: 0
		},
		{
			x: 79,
			y: 0
		}
	];

	// Display snake
	this.display = function () {
		// Create Snake
		for (var i = 0; i < this.body_1.length; i++) {
			if (this.body_1[i].x != null) {
				var s = document.createElement('div');
				// make a div for delete later
				this.body_1[i].flag = s;

				s.style.width = this.width + 'px';
				s.style.height = this.height + 'px';
				s.style.borderRadius = "50%";
				this.body_1[0].flag.style.background = "black";
				s.style.background = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
				s.style.position = 'absolute';
				s.style.left = this.body_1[i].x * this.width + 'px';
				s.style.top = this.body_1[i].y * this.height + 'px';

				map.appendChild(s);
			}
		}
	};

	// Run
	this.run = function () {

		for (var i = this.body_1.length - 1; i > 0; i--) {
			this.body_1[i].x = this.body_1[i - 1].x;
			this.body_1[i].y = this.body_1[i - 1].y;
		}

		switch (this.direction) {
			case "left":
				this.body_1[0].x -= 1;
				break;
			case "right":
				this.body_1[0].x += 1;
				break;
			case "up":
				this.body_1[0].y -= 1;
				break;
			case "down":
				this.body_1[0].y += 1;
				break;
		}

		// check whether snake is in border or not
		if (this.body_1[0].x < 0 || this.body_1[0].x > 79 || this.body_1[0].y < 0 || this.body_1[0].y > 39) {
			clearInterval(timer_1);
			alert("Snake No.1 is lose. Please start again");

			for (var i = 0; i < this.body_1.length; i++) {
				if (this.body_1[i].flag != null) { // if it 
					map.removeChild(this.body_1[i].flag);
				}
			}
			this.body_1 = [ // reverse to initial status
				{
					x: 74,
					y: 0
				},
				{
					x: 75,
					y: 0
				},
				{
					x: 76,
					y: 0
				},
				{
					x: 77,
					y: 0
				},
				{
					x: 78,
					y: 0
				},
				{
					x: 79,
					y: 0
				}
			];
			this.direction = 'left';
			this.display(); // show initial status
			return false; // finish
		}

		// Two Snake header hit

		if (snake_1.body_1[0].x == snake_2.body_2[0].x && snake_1.body_1[0].y == snake_2.body_2[0].y) {
			clearInterval(timer_1);
			clearInterval(timer_2);
			alert("it is a tie game");
			// remove snake 1
			for (var i = 0; i < snake_1.body_1.length; i++) {
				if (snake_1.body_1[i].flag != null) {
					map.removeChild(snake_1.body_1[i].flag);
				}
			}
			// remove snake 2
			for (var i = 0; i < snake_2.body_2.length; i++) {
				if (snake_2.body_2[i].flag != null) {
					map.removeChild(snake_2.body_2[i].flag);
				}
			}

			// Snake one back to inital status
			snake_1.body_1 = [
				{
					x: 74,
					y: 0
				},
				{
					x: 75,
					y: 0
				},
				{
					x: 76,
					y: 0
				},
				{
					x: 77,
					y: 0
				},
				{
					x: 78,
					y: 0
				},
				{
					x: 79,
					y: 0
				}
			];
			snake_1.direction = 'left';
			snake_1.display(); // Show snake 1 initial place

			// Snake 2 reverse to initial place
			snake_2.body_2 = [
				{
					x: 5,
					y: 0
				},
				{
					x: 4,
					y: 0
				},
				{
					x: 3,
					y: 0
				},
				{
					x: 2,
					y: 0
				},
				{
					x: 1,
					y: 0
				},
				{
					x: 0,
					y: 0
				}
			];
			snake_2.direction = 'right';
			snake_2.display(); // show initial status

			return false;
		}

		// Snake 1 hit snake 2, snake 1 lose
		for (var i = 0; i < snake_2.body_2.length; i++) {
			if (this.body_1[0].x == snake_2.body_2[i].x && this.body_1[0].y == snake_2.body_2[i].y) {
				clearInterval(timer_1);
				alert("Snake No.1 lose. Please try again. ");

				for (var i = 0; i < this.body_1.length; i++) {
					if (this.body_1[i].flag != null) {
						map.removeChild(this.body_1[i].flag);
					}
				}
				this.body_1 = [
					{
						x: 74,
						y: 0
					},
					{
						x: 75,
						y: 0
					},
					{
						x: 76,
						y: 0
					},
					{
						x: 77,
						y: 0
					},
					{
						x: 78,
						y: 0
					},
					{
						x: 79,
						y: 0
					}
				];
				this.direction = 'left';
				this.display(); // Show initial place
				return false; // finish
			}
		}

		// Snake 1 eat food
		if (this.body_1[0].x == food_1.x && this.body_1[0].y == food_1.y) {
			this.body_1.push({
				x: null,
				y: null,
				flag: null
			});

			// Make a new food
			map.removeChild(food_1.flag);
			food_1.display();
			return false; // finish
		}

		// Snake 2 eat food
		if (this.body_1[0].x == food_2.x && this.body_1[0].y == food_2.y) {
			this.body_1.push({
				x: null,
				y: null,
				flag: null
			});

			// make a new food
			map.removeChild(food_2.flag);
			food_2.display();
			return false; // finish
		}

		// eat itself
		for (var i = 4; i < this.body_1.length; i++) {
			if (this.body_1[0].x == this.body_1[i].x && this.body_1[0].y == this.body_1[i].y) {
				clearInterval(timer_1);
				alert("Snake No.1 lose. please start agin");
				// delete old one
				for (var i = 0; i < this.body_1.length; i++) {
					if (this.body_1[i].flag != null) {
						map.removeChild(this.body_1[i].flag);
					}
				}
				this.body_1 = [ // initial status
					{
						x: 74,
						y: 0
					},
					{
						x: 75,
						y: 0
					},
					{
						x: 76,
						y: 0
					},
					{
						x: 77,
						y: 0
					},
					{
						x: 78,
						y: 0
					},
					{
						x: 79,
						y: 0
					}
				];
				this.direction = 'left';
				this.display(); // Show initial Status
				return false; // finish
			}
		}

		// show a new snake
		for (var i = 0; i < this.body_1.length; i++) {
			if (this.body_1[i].flag != null) {
				map.removeChild(this.body_1[i].flag);
			}
		}

		// show again
		this.display();

	}
}
// snake 2
function Snake_2() {

	this.width = 10;
	this.height = 10;
	this.direction = 'right';


	this.body_2 = [{
		x: 5,
		y: 0
	},
	{
		x: 4,
		y: 0
	},
	{
		x: 3,
		y: 0
	},
	{
		x: 2,
		y: 0
	},
	{
		x: 1,
		y: 0
	},
	{
		x: 0,
		y: 0
	}
	];

	// display snake 2
	this.display = function () {

		for (var i = 0; i < this.body_2.length; i++) {
			if (this.body_2[i].x != null) {
				var s = document.createElement('div');
				this.body_2[i].flag = s;

				s.style.width = this.width + 'px';
				s.style.height = this.height + 'px';
				s.style.borderRadius = "50%";

				this.body_2[0].flag.style.background = "black";

				s.style.background = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

				s.style.position = 'absolute';
				s.style.left = this.body_2[i].x * this.width + 'px';
				s.style.top = this.body_2[i].y * this.height + 'px';

				map.appendChild(s);
			}
		}
	};

	// run it
	this.run = function () {

		for (var i = this.body_2.length - 1; i > 0; i--) {
			this.body_2[i].x = this.body_2[i - 1].x;
			this.body_2[i].y = this.body_2[i - 1].y;
		}

		switch (this.direction) {
			case "left":
				this.body_2[0].x -= 1;
				break;
			case "right":
				this.body_2[0].x += 1;
				break;
			case "up":
				this.body_2[0].y -= 1;
				break;
			case "down":
				this.body_2[0].y += 1;
				break;
		}

		// check whether it is out of border
		if (this.body_2[0].x < 0 || this.body_2[0].x > 79 || this.body_2[0].y < 0 || this.body_2[0].y > 39) {
			clearInterval(timer_2);
			alert("Snake No.2 lose. Please try again. ");

			for (var i = 0; i < this.body_2.length; i++) {
				if (this.body_2[i].flag != null) {
					map.removeChild(this.body_2[i].flag);
				}
			}
			this.body_2 = [ // reverse initial status
				{
					x: 5,
					y: 0
				},
				{
					x: 4,
					y: 0
				},
				{
					x: 3,
					y: 0
				},
				{
					x: 2,
					y: 0
				},
				{
					x: 1,
					y: 0
				},
				{
					x: 0,
					y: 0
				}
			];
			this.direction = 'right';
			this.display();
			return false;
		}

		// Check Snake 2 whether it is hit the snake 1
		for (var i = 0; i < snake_1.body_1.length; i++) {
			if (this.body_2[0].x == snake_1.body_1[i].x && this.body_2[0].y == snake_1.body_1[i].y) {
				clearInterval(timer_2);
				alert("Snake No.2 lose. Please try again. ");

				for (var i = 0; i < this.body_2.length; i++) {
					if (this.body_2[i].flag != null) {
						map.removeChild(this.body_2[i].flag);
					}
				}
				this.body_2 = [ // Reverse to initial status
					{
						x: 5,
						y: 0
					},
					{
						x: 4,
						y: 0
					},
					{
						x: 3,
						y: 0
					},
					{
						x: 2,
						y: 0
					},
					{
						x: 1,
						y: 0
					},
					{
						x: 0,
						y: 0
					}
				];
				this.direction = 'right';
				this.display();
				return false;
			}
		}

		// eat food
		if (this.body_2[0].x == food_1.x && this.body_2[0].y == food_1.y) {

			this.body_2.push({
				x: null,
				y: null,
				flag: null
			});

			// clear food and regenerate food
			map.removeChild(food_1.flag);
			food_1.display();
		}

		if (this.body_2[0].x == food_2.x && this.body_2[0].y == food_2.y) {

			this.body_2.push({
				x: null,
				y: null,
				flag: null
			});

			// clear food and regenerate food
			map.removeChild(food_2.flag);
			food_2.display();
		}

		// eat itself
		for (var i = 4; i < this.body_2.length; i++) {
			if (this.body_2[0].x == this.body_2[i].x && this.body_2[0].y == this.body_2[i].y) {
				clearInterval(timer_2);
				alert("Snake No.2 lose. Please try again. ")

				for (var i = 0; i < this.body_2.length; i++) {
					if (this.body_2[i].flag != null) {
						map.removeChild(this.body_2[i].flag);
					}
				}
				this.body_2 = [ // reverse to initial status
					{
						x: 5,
						y: 0
					},
					{
						x: 4,
						y: 0
					},
					{
						x: 3,
						y: 0
					},
					{
						x: 2,
						y: 0
					},
					{
						x: 1,
						y: 0
					},
					{
						x: 0,
						y: 0
					}
				];
				this.direction = 'right';
				this.display();
				return false;
			}
		}

		// show a new snake
		for (var i = 0; i < this.body_2.length; i++) {
			if (this.body_2[i].flag != null) {
				map.removeChild(this.body_2[i].flag);
			}
		}

		this.display();

	}
}

// make food
function Food_1() {
	this.width = 10;
	this.height = 10;

	this.display = function () {
		var f = document.createElement('div');
		this.flag = f;
		f.style.width = this.width + 'px';
		f.style.height = this.height + 'px';
		f.style.background = 'red';
		f.style.borderRadius = '50%';
		f.style.position = 'absolute';
		this.x = Math.floor(Math.random() * 80);
		this.y = Math.floor(Math.random() * 40);
		f.style.left = this.x * this.width + 'px';
		f.style.top = this.y * this.height + 'px';
		map.appendChild(f);
	}
}

function Food_2() {
	this.width = 10;
	this.height = 10;

	this.display = function () {
		var f = document.createElement('div');
		this.flag = f;
		f.style.width = this.width + 'px';
		f.style.height = this.height + 'px';
		f.style.background = 'blue';
		f.style.borderRadius = '50%';
		f.style.position = 'absolute';
		this.x = Math.floor(Math.random() * 80);
		this.y = Math.floor(Math.random() * 40);
		f.style.left = this.x * this.width + 'px';
		f.style.top = this.y * this.height + 'px';
		map.appendChild(f);
	}
}

var snake_1 = new Snake_1();
var snake_2 = new Snake_2();
var food_1 = new Food_1();
var food_2 = new Food_2();
snake_1.display(); // initial snake 1
snake_2.display(); // initial snake 2
food_1.display(); // initial food 1
food_2.display(); // initial food 2

// keyboard controller

document.body.onkeydown = function (e) {

	var ev = e || window.event;

	switch (ev.keyCode) {
		//snake 1 controller
		case 38:
			if (snake_1.direction != 'down') { // cannot revert
				snake_1.direction = "up";
			}
			break;
		case 40:
			if (snake_1.direction != "up") {
				snake_1.direction = "down";
			}
			break;
		case 37:
			if (snake_1.direction != "right") {
				snake_1.direction = "left";
			}
			break;
		case 39:
			if (snake_1.direction != "left") {
				snake_1.direction = "right";
			}
			break;
		// Snake 2 controller
		case 87:
			if (snake_2.direction != 'down') {
				snake_2.direction = "up";
			}
			break;
		case 83:
			if (snake_2.direction != "up") {
				snake_2.direction = "down";
			}
			break;
		case 65:
			if (snake_2.direction != "right") {
				snake_2.direction = "left";
			}
			break;
		case 68:
			if (snake_2.direction != "left") {
				snake_2.direction = "right";
			}
			break;
	}
};

// Start
var begin = document.getElementById('begin');
var pause = document.getElementById("pause");
var restart = document.getElementById("restart");
var timer_1; //snake 1
var timer_2; //snake 2
begin.onclick = function begin() {
	clearInterval(timer_1);
	clearInterval(timer_2);

	timer_1 = setInterval("snake_1.run()", 200);
	timer_2 = setInterval("snake_2.run()", 200);
};

pause.onclick = function pause() {
	alert("Game is paused")
}

restart.onclick = function restart() {
	location.reload();
}
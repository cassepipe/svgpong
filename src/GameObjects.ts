export class Paddle {
	x : number
	y : number
	w : number
	h : number
	y0 : number
	dy: number
	speed: number
	keys
	score : number

	constructor({ x, y, w, h, keys, speed = 3.5, score = 0 }) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.y0 = y;
		this.dy = 0;
		this.speed = speed;
		this.keys = keys;
		this.score = score;
	}

	update() {
		this.y += this.dy * this.speed;
	}

	reset() {
		this.y = this.y0;
	}
}

export class Ball {
	x: number
	x0 : number
	y : number
	y0: number
	r : number
	dx: number
	dy: number
	speed: number
	initialSpeed: number
	startAngle = 0;
	endAngle = Math.PI * 2;

	constructor({ x, y, r, speed = 3 }) {
		this.x = x;
		this.x0 = x;
		this.y = y;
		this.y0 = y;
		this.r = r;
		this.dx = 0;
		this.dy = 0;
		this.initialSpeed = speed;
		this.speed = speed;
	}

	start() {
		const maxAngle = 90;
		const angles = 5;
		const angle = Math.floor(Math.random() * (angles + 1));

		const theta = ((angle * (maxAngle / angles) - 45) / 180) * Math.PI;

		const dx = Math.cos(theta) * this.speed;
		const dy = Math.sin(theta) * this.speed;

		this.dx = Math.random() > 0.5 ? dx : dx * -1;
		this.dy = dy;
	}

	update() {
		this.x += this.dx;
		this.y += this.dy;
	}

	reset() {
		this.x = this.x0;
		this.y = this.y0;
		this.dx = 0;
		this.dy = 0;
		this.speed = this.initialSpeed;
	}

	collides(paddle: Paddle) {
		const { x, y, r } = this;
		if (
			x + r < paddle.x ||
			x - r > paddle.x + paddle.w ||
		y + r < paddle.y ||
	y - r > paddle.y + paddle.h
		) {
			return false;
		}
		return true;
	}
}

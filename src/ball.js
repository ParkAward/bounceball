export class Ball {
  constructor(stageWidth, stageHeight, radius, speed, num) {
    this.num = num;
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = this.radius + Math.random() * (stageWidth - diameter);
    this.y = this.radius + Math.random() * (stageHeight - diameter);
  }

  draw(ctx, stageWidth, stageHeight, board) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);
    this.bounceAuthorBall(board);

    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  setLocation(board) {
    board[this.num] = [this.x, this.y, this.radius];
  }
  clearLocation(board) {
    board[this.num] = [];
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
  bounceAuthorBall(board) {
    for (let i = 0; i < board.length; i++) {
      if (i === this.num) continue;
      const ball = board[i];
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.radius + ball.radius) {
        this.vx *= -1;
        this.x += this.vx;
      }
    }
  }
}

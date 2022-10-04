import { Ball } from "./ball.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.board = [];

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 5, 0);
    this.ball1 = new Ball(this.stageWidth, this.stageHeight, 30, 5, 1);
    this.ball2 = new Ball(this.stageWidth, this.stageHeight, 30, 5, 2);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    console.log(this.board);
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.ball.setLocation(this.board);
    this.ball1.setLocation(this.board);
    this.ball2.setLocation(this.board);

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.board);
    this.ball1.draw(this.ctx, this.stageWidth, this.stageHeight, this.board);
    this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight, this.board);

    this.ball.clearLocation(this.board);
    this.ball1.clearLocation(this.board);
    this.ball2.clearLocation(this.board);
  }
}

window.onload = () => {
  new App();
};

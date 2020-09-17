class Terminal {
    constructor() {
        this.cli = {
            x: undefined,
            y: undefined,
            w: undefined,
            h: undefined,
            ref: undefined
        };
        this.history = [];
    }
    initialise() {
        this.cli.w = 200;
        this.cli.h = 20;
        this.cli.x = windowWidth / 2 - this.cli.w / 2;
        this.cli.y = windowHeight / 2 - this.cli.h / 2;

        this.cli.ref = createElement('textarea');
        this.cli.ref.position(this.cli.x, this.cli.y)
        this.cli.ref.size(this.cli.w, this.cli.h)
        console.log(this)
    }
}
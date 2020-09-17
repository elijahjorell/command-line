const state = {
    terminal: new Terminal()
};

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('app');
    
    state.terminal.initialise();
}

function draw() {
    background(30, 30, 30);
}
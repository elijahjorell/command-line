class Terminal {
    constructor() {
        this.interface = new Interface(this);
        this.processor = new Processor(this);
        this.history = new History(this);
        this.val = 'lol';
    }
    initialise() {
        this.interface.initialise();
        this.processor.initialise();
        this.history.initialise();
    }
}
class Interface {
    constructor(terminal) {
        this.terminal = terminal;
        this.coordinate = {
            x: undefined,
            y: undefined
        }
        this.dimensions = {
            w: 500,
            h: 15
        }
        this.textArea = undefined;
        this.id = 'terminal-interface';
    }
    initialise() {
        // Set coordinate
        this.coordinate.x = windowWidth / 2 - this.dimensions.w / 2;
        this.coordinate.y = windowHeight / 2 - this.dimensions.h / 2;

        // Create text area
        this.textArea = createElement('textarea');
        this.textArea.id(this.id);

        // Style text area
        this.textArea.position(this.coordinate.x, this.coordinate.y);
        this.textArea.size(this.dimensions.w, this.dimensions.h);
        this.textArea.style('resize', 'none');
        
        // Disable default enter behaviour
        document.getElementById(this.id).addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              this.run();
            }
        });

        this.textArea.elt.focus();
    }
    run() {
        this.terminal.processor.run(this.textArea.value());
        this.textArea.value('');
    }
}
export default class Input { 
    constructor() {

        this.keys = []; 

        document.onkeydown = (evt) => {
            this.keys[evt.code] = true; 
        }

        document.onkeyup = (evt) => {
            this.keys[evt.code] = false; 
        }
    }

    isKeyDown(code) {
        return this.keys[code]; 
    }
}
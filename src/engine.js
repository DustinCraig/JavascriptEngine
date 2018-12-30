import Input from "./input"; 

export default class Engine {
    constructor() {
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";
        this.canvas = document.createElement("canvas"); 
        this.canvas.width = window.innerWidth; 
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d"); 
        document.body.appendChild(this.canvas); 
        window.requestAnimationFrame(this.loop.bind(this)); 


        this.lastTime = new Date().getTime();
        this.objects = []; 
        this.input = new Input(); 
        
    }

    addObject(obj) {
        this.objects.push(obj); 
    }

    loop() {
        let time = new Date().getTime(); 
        let dt = (time - this.lastTime) / 1000;
        
        //Update
        if(this.update) {
            this.update(dt); 
        }
        this.context.fillStyle = "#303030";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        //Draw 
        this.objects.forEach(obj => {
            obj.draw(this.context); 
        })

        this.lastTime = time; 
        window.requestAnimationFrame(this.loop.bind(this)); 
        
    }
}
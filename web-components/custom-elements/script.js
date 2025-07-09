class MyElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
                <style>
                .box { 
                    padding: 20px; 
                    background: #103440; 
                    border: 1px solid #ccc;
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
                    border-radius: 5px;
                }
                </style>
                <div id="box" class="box">Hello Shadow DOM</div>
                `;

        const randomMessages = [
            "Enjoying the course?",
            "Frontend architects!",
            "Keep up the good work!",
            "JoshDeveloper would be proud!",
            "You're a star!",
            "You're amazing!",
        ];

        const box = shadow.querySelector("#box");
        
        box.addEventListener("click", () => {
            box.innerHTML = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        });

    }
}
customElements.define("my-element", MyElement);
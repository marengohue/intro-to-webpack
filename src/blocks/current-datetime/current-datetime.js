import css from "./style.css";

export class CurrentDateTime {

    constructor(parentElement) {
        this.timeSpan = document.createElement('span');
        this.timeSpan.classList.add('current-time');
        parentElement.append(this.timeSpan);
        this.updateTime();
        setInterval(this.updateTime.bind(this), 1000);
    }

    updateTime() {
        this.timeSpan.innerText = new Date().toLocaleTimeString();
    }

}
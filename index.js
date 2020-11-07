'use strict';
const domObj = document.getElementById('target');

class Info {
    constructor(text, color, img, vertical, holizontal, domObj) {
        this.text = text;
        this.color = color;
        this.img = img;
        this.vertical = vertical;
        this.holizontal = holizontal;
        this.domObj = domObj;
    }

    motivationalSpeechWallpaper() {
        // parent
        const div = document.createElement("div");
        // div.classList.add('container');
        div.style.position = "relative";

        // bg
        const bgImg = document.createElement("img");
        bgImg.src = this.img;
        bgImg.classList.add('col')

        // text content color
        const h3 = document.createElement("h3");
        h3.innerHTML = this.text;
        h3.style.color = this.color;
        h3.style.position = "absolute";
        h3.classList.add('col-6')

        // text position
        if (this.vertical === "top") h3.style.top = "0%";
        if (this.vertical === "center") h3.style.top = "30%";
        if (this.vertical === "bottom") h3.style.bottom = "0%";
        if (this.holizontal === "left") h3.style.left = "0%";
        if (this.holizontal === "center") h3.style.left = "30%";
        if (this.holizontal === "right") h3.style.right = "0%";

        // gattyannko
        div.append(bgImg);
        div.append(h3);

        return domObj.append(div);
    }
}

const ex1 = new Info("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center", domObj);

const ex2 = new Info("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "right", domObj);

const ex3 = new Info("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);

console.log(ex1.motivationalSpeechWallpaper());
console.log(ex2.motivationalSpeechWallpaper());
console.log(ex3.motivationalSpeechWallpaper());

'use strict';
const domObj = document.getElementById('target');

class Info {
    constructor(text, color, img, vertical, horizontal, domObj) {
        this.text = text;
        this.color = color;
        this.img = img;
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.domObj = domObj;
    }

    motivationalSpeechWallpaper() {
        // parent
        const div = document.createElement("div");
        div.style.position = "relative";

        // bg
        const bgImg = document.createElement("img");
        bgImg.src = this.img;
        bgImg.classList.add('img-fluid')

        // text content color
        const h3 = document.createElement("h3");
        h3.innerHTML = this.text;
        h3.style.color = this.color;
        h3.style.position = "absolute";
        h3.classList.add('col-6')

        // text position
        switch (this.vertical) {
            case "top":
                h3.style.top = "10%";
                break;
            case "center":
                h3.style.top = "30%";
                break;
            default:
                h3.style.bottom = "10%";
                break;
        }

        switch (this.horizontal) {
            case "left":
                h3.style.left = "10%";
                break;
            case "center":
                h3.style.left = "30%";
                break;
            default:
                h3.style.right = "10%";
                break;
        }

        // append data to parent div
        div.append(bgImg);
        div.append(h3);

        return domObj.append(div);
    }
}

const ex1 = new Info("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center", domObj);

const ex2 = new Info("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "#fff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "right", domObj);

const ex3 = new Info("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "#fff", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);
class View {
    constructor() {
        ex1.motivationalSpeechWallpaper();
        ex2.motivationalSpeechWallpaper();
        ex3.motivationalSpeechWallpaper();
    }
}

new View()

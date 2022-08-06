const cube = document.getElementById("cube");
let kx = 1
let ky = 1

cube.onmousedown = (e) => {
    const startY = e.clientY
    const startX = e.clientX

    document.onmousemove = (e) => {
        let moveY = -(e.clientY - startY)
        let moveX = e.clientX - startX
        cube.style.transform = `rotateX(${-30+moveY*ky}deg) rotateY(${60+moveX*kx}deg)`;
    }
    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
    }
}
ball.ondragstart = function() {
    return false;
};


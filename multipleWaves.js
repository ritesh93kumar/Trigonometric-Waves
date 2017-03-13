var canvas = document.getElementById("canvas2");
var ctx = canvas.getContext("2d");
var waveList = [];

var draw = function () {
    window.requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var w of waveList)
        w.redraw();

};

var init = function () {

    waveList.push(new drawWave({
        canvas: canvas,
        waveName: "cos",
        waveProperties: {
            color: "rgba(0,0,255,0.5)"
        }
    }));
    waveList.push(new drawWave({
        canvas: canvas,
        waveName: "tan",
        waveProperties: {
            color: "rgba(0,255,0,0.5)"
        }
    }));
    waveList.push(new drawWave({
        canvas: canvas,
        waveName: "sine",
        waveProperties: {
            color: "rgba(255,0,0,0.5)"
        }
    }));
    draw();
};

init();
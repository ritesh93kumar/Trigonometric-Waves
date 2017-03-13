window.onload = function () {
    var canvas = document.getElementById("canvas");

    var init = function () {


        var properties = {
            canvas: canvas,
            lineWidth: 2,
            waveName: "sine",
            waveProperties: {
                color: "rgba(255,0,0,0.5)"
            }
        };

        var wave = new drawWave(properties);

        wave.draw();

    };
    init();
}
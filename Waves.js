var drawWave = function (properties) {

    try {

        if (typeof properties != "object" && typeof properties.canvas == "undefined")
            throw "Provide a valid canvas element for the application.";

        var canvas = properties.canvas;

        var ctx = canvas.getContext("2d");

        var lineWidth = properties.lineWidth || 4;

        var origin = properties.origin || {
            x: 0,
            y: canvas.height / 2
        };

        var waveName = properties.waveName || 'none';

        var waveProperties = {
            amplitude: properties.waveProperties.amplitude || canvas.height / 4,
            frequency: properties.waveProperties.frequency || 0.05,
            phase: properties.waveProperties.phase || 0,
            shift: properties.waveProperties.shift || Math.PI / 40,
            wavelength: properties.waveProperties.wavelength || canvas.width / 1.1,
            color: properties.waveProperties.color || "rgba(255,255,255,0.5)"
        };

        // Plot single point on canvas
        var plotPoint = function (x, y, color) {

            var radius = lineWidth;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill();

        };

        // Draw sine wave    
        var sine = function (sineWave) {

            if (waveName == "none")
                sineWave.color = "rgba(255,0,0,0.5)";

            for (var i = origin.x; i < (origin.x + sineWave.wavelength); i++) {

                var y = sineWave.amplitude * Math.sin(sineWave.frequency * i + sineWave.phase);
                plotPoint(i, origin.y - y, sineWave.color);

            }
        };


        // Draw cos wave
        var cos = function (cosWave) {

            if (waveName == "none")
                cosWave.color = "rgba(0,255,0,0.5)";

            for (var i = origin.x; i < (origin.x + cosWave.wavelength); i++) {

                var y = cosWave.amplitude * Math.cos(cosWave.frequency * i + cosWave.phase);
                plotPoint(i, origin.y - y, cosWave.color);

            }
        };

        // Draw tan wave    
        var tan = function (tanWave) {

            if (waveName == "none")
                tanWave.color = "rgba(0,102,255,0.7)";

            for (var i = origin.x; i < (origin.x + tanWave.wavelength); i++) {

                var y = tanWave.amplitude * Math.tan(tanWave.frequency * i + tanWave.phase);
                plotPoint(i, origin.y - y, tanWave.color);

            }
        };

        // Animate the waves  
        var animate = function () {

            requestAnimationFrame(animate);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            waveProperties.phase += waveProperties.shift;

            if (waveName == "sine") {

                sine(waveProperties);

            } else if (waveName == "cos") {

                cos(waveProperties);

            } else if (waveName == "tan") {

                tan(waveProperties);

            } else if (waveName == "" || "none") {

                sine(waveProperties);
                cos(waveProperties);
                tan(waveProperties);

            } else {

                throw "Invalid waveName";

            }
        };

        // Draw motion less waves 
        var noanimate = function () {

            waveProperties.phase += waveProperties.shift;

            if (waveName == "sine") {

                sine(waveProperties);

            } else if (waveName == "cos") {

                cos(waveProperties);

            } else if (waveName == "tan") {

                tan(waveProperties);

            } else if (waveName == "" || waveName == "none") {

                sine(waveProperties);
                cos(waveProperties);
                tan(waveProperties);

            } else {

                throw "Invalid waveName";

            }
        };

        this.draw = function () {
            animate();
        };

        this.redraw = function () {
            noanimate();
        };

    } catch (err) {

        return "Error: " + err;

    }
};
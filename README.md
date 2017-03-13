# Trigonometric  Waves
Simple javascript plugin to draw basic trigonometric (sine, cos and tan) waves by setting up basic properties of the waves like frequency, amplitude, phase etc.

## How to use
Copy the Waves.min.js inside your working directory and insert the script tag inside your HTML page.

    ```<script type="txt/javascript" src="Wave.min.js" />
    ```

## Setting up the waves 

### Draw single wave

Set up the properties of the wave.

#### canvas (required)
Hold the canvas element on which wave is to be drawn. This is required property of every wave.

#### linewidth 
Width of the wave line, default value is 4;

#### origin
Object contains starting point of the wave on canvas. Default value is **_x:0_ ** and **_y:canvas.height/2_ **.

#### waveName
Name of the wave which is to be drawn on canvas i.e. any of  sine / cos / tan. ** If this property is not set or "none" than all the three waves will be drawn on canvas. **   

#### waveProperties
This object holds the configuration of the wave.
 - **color** : color of the wave, default is  rgba(255,255,255,0.5).
 - **amplitude** : Height of the wave in canvas, default is canvas.height / 4.
 - **frequency** : speed of the wave, default is 0.05.
 - **phase** : phase shift of the the wave, default is 0.
 
 ***Example***
 
     ```javascript
     var properties = {
        canvas:canvas,
        lineWidth: 2,
        waveName: "sine",
        waveProperties:{
            color : "rgba(255,0,0,0.5)"    
        }     
     };
     ```
    
    
Declare the new wave class and pass the properties to it.
    
    ```javascript
    var wave  = new drawWave(properties);
    ```
    
Draw the wave on canvas    
    
#### .draw()
This method draw a single wave on canvas.

    ```javascript
    wave.draw();
    ```

Instead you can also do
    
    ```javascript
    new drawWave({
        canvas:canvas,
        lineWidth: 2,
        waveName: "sine",
        waveProperties:{
            color : "rgba(255,0,0,0.5)"    
        }     
     }).draw();
    

### Draw multiple waves.
For this user must write his own animation method to draw each keyframes of waves after an interval and call **redraw** method in it.

Use array list to store the waves.
    
    ```
    var waveList = [];
    ```

Set up the properties of the wave.

This is same as the setting up properties of single wave.

Push the wave to the array list.

    ```javascript
    waveList.push(new drawWave({
            canvas:canvas,
            waveName:"sine",
            waveProperties:{
                color: "rgba(255,0,0,0.5)"
            }    
        }));
        
    waveList.push(new drawWave({ 
            canvas:canvas,
            waveName:"cos",
            waveProperties:{  
                color: "rgba(0,0,255,0.5)"
            }    
        }));
    ```
    
Create a method to call **redraw()** method after an interval.

    ```javascript
    var draw = function(){
        window.requestAnimationFrame(draw);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for( var w of waveList)
            w.redraw();
        
    };
    ```


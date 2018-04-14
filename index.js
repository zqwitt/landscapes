var img;

function preload() {
    img = loadImage('canvas.jpg');
}

function setup() {
    var cv = createCanvas(370, 520);
    background(255);
    colorMode(HSB, 360, 100, 100, 100);
    const rc = rough.canvas(cv.canvas);


    var stripes = 8;
    var widths = [];
    var wLeft = width;
    for (var i = 0; i < stripes; i++) {
        var c = color(random(0, 30), random(10, 70), random(95, 100), random(40, 50))
        if (i == 0) {
            var w = Math.floor(random() * (width / 4) + 20);
            wLeft -= w;
            widths.push(w);
            var s = color(0, 0, 0, random(50, 60));
            rc.rectangle(15, 15, w - 15, height - 30, {
                strokeWidth: 3,
                stroke: s,
                roughness: 0.4,
                fill: c,
                fillStyle: 'solid'
            });
        } else if (i == stripes - 1) {
            var x = width - wLeft - 15;
            var w = wLeft;
            widths.push(w);
            var s = color(0, 0, 0, random(50, 60));
            rc.rectangle(x + 15, 15, w - 15, height - 30, {
                strokeWidth: 3,
                stroke: s,
                roughness: 0.4,
                fill: c,
                fillStyle: 'solid'
            });
        } else {
            var x = width - wLeft;
            var w = Math.floor(random(10, wLeft / 2));
            wLeft -= w;
            widths.push(w);
            var s = color(0, 0, 0, random(50, 60));
            rc.rectangle(x, 15, w, height - 30, {
                strokeWidth: 3,
                stroke: s,
                roughness: 0.4,
                fill: c,
                fillStyle: 'solid'
            });
        }
    }


    stroke(color(0, 0, 0, random(60, 80)));
    beginShape();
    var currentHeight = random(height - height / 2, height - height / 3);
    var lastHeight = currentHeight;
    var seg = 20;
    strokeWeight(3);
    fill(random(70, 80), 20, 70);
    vertex(15, height - 15);
    vertex(15, currentHeight);
    for (var i = 1; i < seg; i++) {
        currentHeight = constrain(lastHeight + random(-5, 5), 0, height - 15);
        vertex(i * width / seg, currentHeight);
        lastHeight = currentHeight
    }
    vertex(width - 15, currentHeight);
    vertex(width - 15, height - 15);
    vertex(15, height - 15);

    endShape();

    beginShape();
    var currentHeight = random(height - height / 3, height - height / 5);
    var lastHeight = currentHeight;
    var seg = 20;
    strokeWeight(3);
    fill(random(80, 90), 20, 60);
    vertex(15, height - 15);
    vertex(15, currentHeight);
    for (var i = 1; i < seg; i++) {
        currentHeight = constrain(lastHeight + random(-5, 5), 0, height - 15);
        vertex(i * width / seg, currentHeight);
        lastHeight = currentHeight
    }
    vertex(width - 15, currentHeight);
    vertex(width - 15, height - 51);
    vertex(15, height - 15);

    endShape();

    beginShape();
    var currentHeight = random(height - height / 6, height - height / 8);
    var lastHeight = currentHeight;
    var seg = 20;
    strokeWeight(3);
    fill(random(90, 100), 20, 30);
    vertex(15, height - 15);
    vertex(15, currentHeight);
    for (var i = 1; i < seg; i++) {
        currentHeight = constrain(lastHeight + random(-5, 5), 0, height - 15);
        vertex(i * width / seg, currentHeight);
        lastHeight = currentHeight
    }
    vertex(width - 15, currentHeight);
    vertex(width - 15, height - 15);
    vertex(15, height - 15);

    endShape();

    var s = color(0, 0, 0, random(50, 75));
    rc.rectangle(15, 15, width - 30, height - 30, {
        strokeWidth: 3,
        stroke: s,
        roughness: 0.5,
        fill: 'rgba(0,0,0,0)',
        fillStyle: 'solid'
    });


    colorMode(RGB, 255, 255, 255, 255);
    loadPixels();
    var increment = 0.4;
    var yoff = 0;
    for (var y = 15; y < height - 15; y++) {
        var xoff = 0;
        for (var x = 15; x < width - 15; x++) {
            var index = (x + y * width) * 4;
            var n = noise(xoff, yoff) * 50;
            var c = color(pixels[index] - n, pixels[index + 1] - n, pixels[index + 2] - n, pixels[index + 3]);

            set(x, y, c);

            var index = ((x + 2) + y * width) * 4;
            var c = color(pixels[index] + n, pixels[index + 1] + n, pixels[index + 2] + n, pixels[index + 3]);
            set(x + 2, y, c);
            xoff += increment;
        }
        yoff += increment;
    }

    updatePixels();
    //save('myCanvas.jpg');
}
var img;

function preload() {
    img = loadImage('canvas.jpg');
}

function setup() {
    var cv = createCanvas(300, 500);
    colorMode(HSB, 360, 100, 100, 100);
    const rc = rough.canvas(cv.canvas);


    image(img, 0, 0, width, height);

    var stripes = 8;
    var widths = [];
    var wLeft = width;
    for (var i = 0; i < stripes; i++) {
        var c = color(random(0, 40), random(10, 70), random(95, 100), random(40, 50))
        if (i == 0) {
            var w = Math.floor(random() * (width / 4) + 20);
            wLeft -= w;
            widths.push(w);
            rc.rectangle(5, 5, w - 5, height - 10, {
                strokeWidth: 2,
                roughness: 0.3,
                fill: c,
                fillStyle: 'solid'
            });
        } else if (i == stripes - 1) {
            var x = width - wLeft - 5;
            var w = wLeft;
            widths.push(w);
            rc.rectangle(x + 5, 5, w - 5, height - 10, {
                strokeWidth: 2,
                roughness: 0.3,
                fill: c,
                fillStyle: 'solid'
            });
        } else {
            var x = width - wLeft;
            var w = Math.floor(random(10, wLeft / 2));
            wLeft -= w;
            widths.push(w);
            rc.rectangle(x, 5, w, height - 10, {
                strokeWidth: 2,
                roughness: 0.3,
                fill: c,
                fillStyle: 'solid'
            });
        }
    }
    console.log(widths[0], widths[1], widths[2], widths[3]);
    rc.rectangle(5, 5, width - 10, height - 10, {
        strokeWidth: 3,
        roughness: 0.5,
        fill: 'rgba(0,0,0,0)',
        fillStyle: 'solid'
    });
}
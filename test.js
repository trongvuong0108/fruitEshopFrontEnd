function giai(x, y, z) {
    var x1, x2, delta;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    delta = (y * y - 4 * x * z);
    if (delta == 0) {
        alert("phuong trinh co nghiem kep");
        x1 = -y / (2 * x);
        x2 = -y / (2 * x);
        console.log("x1 =" + x1);
        console.log("x2 =" + x2);
    }
    else if (delta < 0) {
        alert("phuong trinh vo nghiem");
    }
    else {
        alert("phuong trinh co hai nghiem");
        x1 = (-y - Math.sqrt(delta)) / (2 * x);
        x2 = (-y + Math.sqrt(delta)) / (2 * x);
        console.log("x1 =" + x1);
        console.log("x2 =" + x2);
    }
}

var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");

var res = document.querySelector(".res");
res.addEventListener("click", () =>
    giai(a.value, b.value, c.value)
);
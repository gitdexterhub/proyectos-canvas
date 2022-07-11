var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var colorcito = document.getElementById("roper");
var boton = document.getElementById("btn");
boton.addEventListener("click", borrarCanvas);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea(color, xinicial, yincial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoPorClick()
{
     lienzo.clearRect(0, 0, d.width, d.height);
var x = parseInt(texto.value);
var lineas = x;
var l = 0;
var yi, xf;
var cop = colorcito.value;
for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf =  10 * (l + 1);
    dibujarLinea (cop, 0, yi, xf, 300);
    dibujarLinea (cop, yi, 0, 300, xf);
    xi = 300 - (10 * l);
    yf = 10 * (l + 1);
    dibujarLinea(cop, xi, 0, 0, xf);
    xi = 10 * l;
    yf = 300 - (10 * l);
    dibujarLinea(cop, xi, 300, 300, yf)
    xi = 10 * l;
    yf = 300 - (10 * l);
    dibujarLinea(cop, xi, 150, 150, yf)
    xi = 300 - (10 * l);
    yf = 10 * (l + 1);
    dibujarLinea(cop, 150, xi, xf, 150);
    xi = 150 - (l * 10);
    xf = 150 - (l * 10);
    dibujarLinea(cop, xi, 0, 150, xf);
    yi = 150 - (l * 10);
    xf = 150 - (l * 10);
    dibujarLinea(cop, 0, yi, xf, 150);
    yi = 150 + (l * 10);
    xf = 150 + (l * 10);
    dibujarLinea(cop, 150, yi, xf, 300);
    dibujarLinea(cop, yi, 150, 300, xf);
}
dibujarLinea(cop, 1, 1, 1, 300);
dibujarLinea(cop, 1, 300, 300, 300);
dibujarLinea(cop, 300, 1, 1, 1);
dibujarLinea(cop, 1, 299, 299, 299);
}
function borrarCanvas()
{
    lienzo.clearRect(0, 0, d.width, d.height);
}
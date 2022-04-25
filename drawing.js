//Создаем canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Определяем задний фон
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 700, 500);

//Линии по умолчанию
lines();

var removeRectangleInLine = 0;

function lines() {
	if (removeRectangleInLine == 1) {
		canvas.removeEventListener('mousedown', rectMouseDown);
		canvas.removeEventListener('mouseup', rectMouseUp);
		canvas.removeEventListener('mousemove', rectMouseMove);
		canvas.removeEventListener('mouseout', rectMouseout);
	};

	//Координаты мышки
	var mouse = { x: 0, y: 0};

	//Рисование включает ширину линии, окончание линии и цвет
	paint = function() {
		ctx.lineTo(mouse.x, mouse.y);
		ctx.lineWidth = lineWidthRange();
		ctx.lineJoin = 'round';
		ctx.lineCap = brushstyle;
		ctx.strokeStyle = colors;
		ctx.stroke();
	};

	//Нахождение координат мыши относительно холста
	linesMousemove = function(e){
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
	};

	//Вызвов рисования при нажатии на мышку
	linesMousedown = function(){
		ctx.beginPath();
		ctx.moveTo(mouse.x, mouse.y);
		canvas.addEventListener('mousemove', paint, false);
	};

	//При отпускании мышки прекращение рисования
	linesMouseup = function(){
		canvas.removeEventListener('mousemove', paint, false);
	};

	//Когда мышь покидает холст, линия перестает рисоваться
	linesMouseout = function() {
		canvas.removeEventListener('mousemove', paint, false);
	};

	//Рисование при движении мышки вверх, вниз, лево, право
	canvas.addEventListener('mousedown', linesMousedown, false);
	canvas.addEventListener('mousemove', linesMousemove, false);
	canvas.addEventListener('mouseup', linesMouseup, false);
	canvas.addEventListener('mouseout', linesMouseout, false);

};

//Выбор цветов
var colors;
function changeColors(palette) {
	switch(palette.id) {
		case "red":
			colors = "red";
			break;
		case "red1":
			colors = "#F16161";
			break;
		case "red2":
			colors = "#F69FA0";
			break;
		case "orange":
			colors = "orange";
			break;
		case "orange1":
			colors = "#F99F62";
			break;
		case "orange2":
			colors = "#FBB57B";
			break;
		case "blue":
			colors = "#09C2DB";
			break;
		case "blue1":
			colors = "#8BD3DC";
			break;
		case "blue2":
			colors = "#B9E3E8";
			break;
		case "indigo":
			colors = "#0E38AD";
			break;
		case "indigo1":
			colors = "#546AB2";
			break;
		case "indigo2":
			colors = "#9C96C9";
			break;
		case "green":
			colors = "green";
			break;
		case "green1":
			colors = "#97CD7E";
			break;
		case "green2":
			colors = "#C6E2BB";
			break;
		case "black":
			colors = "black";
			break;
		case "black1":
			colors = "#545454";
			break;
		case "black2":
			colors = "#B2B2B2";
			break;
		case "yellow":
			colors = "yellow";
			break;
		case "yellow1":
			colors = "#F7F754";
			break;
		case "yellow2":
			colors ="#F7F4B1";
			break;
		case "purple":
			colors = "#B9509E";
			break;
		case "purple1":
			colors = "#D178B1";
			break;
		case "purple2":
			colors = "#E3ABCE";
			break;
		case "erase":
			colors = "white";
			break;
	}
};

//Стиль кисти (круг)
var brushstyle = "round";


//Изменение толщины
function lineWidthRange() {
    var widthLine = document.getElementById("myRange").value;
    return widthLine;
};

//Очистка области
function erase() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

//Сохранение картинки
var button = document.getElementById('dwnld');
button.addEventListener('click', function (e) {
var dataURL = canvas.toDataURL('image/png');
button.href = dataURL;
});


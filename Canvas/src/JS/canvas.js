const canvas = document.getElementById("jsCanvas"); // canvas 변수 선언
const ctx = canvas.getContext("2d"); // 2d canvas 설정
const colors = document.getElementsByClassName("jsColor"); // 색 변경 변수 선언

// canvas 크기 설정
canvas.width = 600;
canvas.height = 600;

// canvas 기본 설정 색/붓 크기
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false; // 처음은 그리지 않기에 false로 둔다.

// stop은 그림을 안그릴때를 생각해 false start는 그림을 그릴때를 생각하여 true
function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

// 마우스 좌표 값 설정과 그림을 시작할 곳 끝나는 곳 
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath(); // path 만들기
        ctx.moveTo(x, y); // x -> y로 선 만들기
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// 마우스 클릭시 그리기 시작
function onMouseDown(event) {
    painting = true;
}

// 브러쉬 색 설정
function changeColor(event){
    const color = event.target.style.backgroundColor; // target으로 color 받아오기
    ctx.strokeStyle = color;
}

// canvas 위 마우스 설정과 그리기 전/후 이벤트
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// Array를 만들고 color을 돌려서 이벤트 호출 
Array.from(colors).forEach(color => 
    color.addEventListener("click", changeColor)
);
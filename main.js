canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="red";
var lineWidth=2;
var radius=40;
mouseEvent="empty";

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e) {
    color=document.getElementById("color").value;
    lineWidth=document.getElementById("line_width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e) {
    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e) {
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e) {
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown") {
        console.log("Current Position Of X And Y Coordinates Are - ");
        console.log("X - "+current_position_of_mouse_x+" Y - "+current_position_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
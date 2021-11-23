canvas = document.getElementById("myCanvas");
radius=50;
pen = canvas.getContext("2d");
pen_color = "green";
width=2;
mouse_event="";
canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
    mouse_event="mousedown";
    console.log(mouse_event);
    pen_color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
}
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
    mouse_event="mouseleave";
    console.log(mouse_event);
}
canvas.addEventListener("mouseup",mouse_up)
function mouse_up(e){
mouse_event="mouseup";
console.log(mouse_event);
}
canvas.addEventListener("mousemove",mouse_move)
function mouse_move(e){
    current_mouse_x=e.clientX-canvas.offsetLeft;
    current_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        pen.beginPath();
        pen.strokeStyle=pen_color;
        pen.lineWidth=width;
        pen.arc(current_mouse_x,current_mouse_y,radius,0,2*Math.PI);
        pen.stroke();
    }
}

function clearcanvas(){
    pen.clearRect(0,0,800,600);
}















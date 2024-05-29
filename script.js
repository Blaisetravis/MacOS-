

var currentPanel = null;
var zIndexCounter = 1;

document.getElementById("folder").addEventListener("dblclick", function(){
    var div = document.getElementById("window");
    div.classList.toggle("hidden"); 
});

document.getElementById("window-close").addEventListener("click", function(){
    var div = document.getElementById("window");
    div.classList.add("hidden"); 
});

document.getElementById("calc-close").addEventListener("click", function(){
    var div = document.getElementById("Calculator");
    div.classList.add("hidden"); 
});


document.getElementById("SB1").addEventListener("click", function(){
    if (currentPanel !== null) {
        currentPanel.classList.add("hidden");
    }
    currentPanel = document.getElementById("middlepanel1");
    currentPanel.classList.remove("hidden");
    currentPanel.style.zIndex = zIndexCounter++; 
}); 

document.getElementById("SB2").addEventListener("click", function(){
    if (currentPanel !== null) {
        currentPanel.classList.add("hidden");
    }
    currentPanel = document.getElementById("middlepanelPP");
    currentPanel.classList.remove("hidden");
    currentPanel.style.zIndex = zIndexCounter++; 
}); 

document.getElementById("middlepanelH-W").addEventListener("click", function(){

    if (currentPanel !== null) {
        currentPanel.classList.add("hidden");
    }

    var div = document.getElementById("rightpanel-content-HW");
    div.classList.remove("hidden");
    currentPanel = div;
});

document.getElementById("middlepanelF-S").addEventListener("click", function(){

    if (currentPanel !== null) {
        currentPanel.classList.add("hidden");
    }

    var div = document.getElementById("rightpanel-content-FS");
    div.classList.remove("hidden");
    currentPanel = div;
});

document.getElementById("middlepanelO-H").addEventListener("click", function(){
    if (currentPanel !== null) {
        currentPanel.classList.add("hidden");
    }

    var div = document.getElementById("rightpanel-content-OH");
    div.classList.remove("hidden");
    currentPanel = div;

});

document.getElementById("middlepanelPP").addEventListener("click", function(){

    if (currentPanel !== null) {
        currentPanel.classList.add("hidden");
    }
    var div = document.getElementById("rightpanel-content-PP");
    div.classList.remove("hidden");
    currentPanel = div;

});


//THIS IS FOR CALCULATOR TO FUNCTION// 

document.getElementById("calc").addEventListener("dblclick", function(){
    var div = document.getElementById("Calculator");
    div.classList.toggle("hidden");
});







const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""; 
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error"; 
    }
}
function toggleCalculator() {
    var calculator = document.getElementById("Calculator");
    if (calculator.style.display === "none") {
        calculator.style.display = "block";
    } else {
        calculator.style.display = "none";
    }
}






// Get the draggable button element
const draggableButton = document.getElementById('draggable-button');
let offsetX, offsetY, isDragging = false;

const handleMouseDown = (e) => {
    // Check if the left mouse button is pressed
    if (e.button !== 0) return;

    isDragging = true;

    // Calculate the offset between mouse position and element position within the document
    const rect = draggableButton.getBoundingClientRect();
    const absoluteLeft = rect.left + window.scrollX;
    const absoluteTop = rect.top + window.scrollY;

    offsetX = e.clientX - absoluteLeft;
    offsetY = e.clientY - absoluteTop;

    // Add transition for smooth movement
    draggableButton.style.transition = 'none';
};

const handleMouseMove = (e) => {
    if (isDragging) {
        // Adjust mouse position based on initial offset to prevent jumping
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        draggableButton.style.transform = `translate(${x}px, ${y}px)`;
    }
};

const handleMouseUp = () => {
    if (isDragging) {
        // Restore transition for smooth transition when releasing
        draggableButton.style.transition = '';
    }
    isDragging = false;
};

draggableButton.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

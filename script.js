

var currentPanel = null;
var zIndexCounter = 1;

document.getElementById("folder").addEventListener("dblclick", function(){
    var div = document.getElementById("window");
    div.classList.toggle("hidden"); 
});

document.getElementById("close").addEventListener("click", function(){
    var div = document.getElementById("window");
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





        // Get the draggable button element
        const draggableButton = document.getElementById('draggable-button');

        // Initialize variables for tracking mouse position and button position
        let offsetX, offsetY, isDragging = false;

        // Function to handle mouse down event
        const handleMouseDown = (e) => {
            isDragging = true;
            offsetX = e.clientX - draggableButton.getBoundingClientRect().left;
            offsetY = e.clientY - draggableButton.getBoundingClientRect().top;
        };

        // Function to handle mouse move event
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            draggableButton.style.left = x + 'px';
            draggableButton.style.top = y + 'px';
        };

        // Function to handle mouse up event
        const handleMouseUp = () => {
            isDragging = false;
        };

        // Add event listeners
        draggableButton.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
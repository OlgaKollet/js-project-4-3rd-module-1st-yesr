document.addEventListener("DOMContentLoaded", function() {
    const chtot = document.getElementById("chto");

    // document.addEventListener("mousemove", function(event) {
    //     chtot.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    // });
    document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    chtot.textContent = `x: ${event.clientX}; y: ${event.clientY}`;
    if (x > 500 || y > 500) {
        chtot.style.color = "green";
    } else {
        chtot.style.color = "orange";
    }
    });
});

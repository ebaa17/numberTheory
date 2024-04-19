document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".books"); // Using querySelector for class

    if (container) {
        container.addEventListener("click", function (event) {
            // Check if the clicked element is an anchor tag
            if (event.target.tagName.toLowerCase() === "a") {
                const clickedId = event.target.id;
                localStorage.setItem("clickedAnchorId", clickedId);
                console.log("Clicked anchor ID:", clickedId); // You can replace this with updating another element
            }
        });
    } else {
        console.warn("Element with class 'books' not found!");
    }
});

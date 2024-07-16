document.addEventListener("DOMContentLoaded", function () {
    // Target all h3 elements with the specified class
    const h3Elements = document.querySelectorAll("h3.feature-section-excerpt");

    // Loop through all but the last element
    h3Elements.forEach((h3, index) => {
        if (index === h3Elements.length - 1) return;

        // Get the content of the h3 element and split it by ". "
        const contentParts = h3.innerHTML
            .split(". ")
            .filter((part) => part.trim() !== "");

        // Create a ul element
        const ul = document.createElement("ul");
        ul.classList.add("feature-section-excerpt-list-container");

        // For each part of the split content, create an li element and append it to the ul
        contentParts.forEach((part) => {
            const li = document.createElement("li");
            li.textContent = part;
            li.classList.add("feature-section-excerpt-list-element");
            ul.appendChild(li);
        });

        // Replace the h3 element with the new ul element
        h3.parentNode.replaceChild(ul, h3);
    });
});

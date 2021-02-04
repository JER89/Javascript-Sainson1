// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {
    // Get attribute "data-image" to element ID 'source'
    let value = document.getElementById('source').getAttribute("data-image");
    // Create a new image element
    let img = document.createElement("img");
    // Image reffered to by the attribute value.
    img.src = value;
    //Remove the original element
    document.getElementById('target').appendChild(img);
})();
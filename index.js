function addingEventListener() { 
    const Element = document.getElementById('button');
    if (Element) { 
        Element.addEventListener('click', function() {
            alert('button element was clicked!'); 
        });
    } else {
        console.error('button element not found');
    }
}

// Call the function without any arguments
module.exports = addingEventListener;
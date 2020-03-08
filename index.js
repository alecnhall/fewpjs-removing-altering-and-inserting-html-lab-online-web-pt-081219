// Write your code here!
document.getElementById('main').remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = 'Alec is the champion';
document.body.appendChild(newHeader);
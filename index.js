// for first card
document.getElementById('first-card').addEventListener('click', function(){
    // console.log('e.target')
    
    // get the data from html using id 
    const triangleName = document.getElementById('triangle-name').innerText;
    const givenAmount = document.getElementById('given-amount').value;
    const triangleHeight = document.getElementById('triangle-height').value;
    const triangleBase = document.getElementById('triangle-base').value;
   

    const totalTriangleArea = parseInt(givenAmount) * parseInt(triangleHeight) * parseInt(triangleBase);
    

    const container = document.getElementById('table-container');


    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${triangleName}</td>
    <td>${triangleHeight}</td>
    <td>${triangleBase}</td>
    
    ` 
    ;
    container.appendChild(tr);
})

// for second card
// document
// .getElementById('rectangle-btn')
// .addEventListener('click', function(){
// const rectangleWidth = document.getElementById('width').value;
// const rectangleLength = document.getElementById('length').value;
// const rectangleArea = width * 8;
// console.log('rectangleArea');
// })
function computeAreaOfRectangle (){
    let l =parseFloat (document.getElementById('length').value);
    let w = document.(getElementById('width').value);

    let area = l * w;
}

    
    
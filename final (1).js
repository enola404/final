var nodes = document.getElementsByClassName('btn');

for (var i = 0; i < nodes.length; i++) {
  var button = nodes[i];
  button.addEventListener("click",total1)
}

document.getElementById("total").style.display = "none";
document.getElementById("index").style.display = "none";
var nodes = document.getElementsByClassName('btn');

for (var i = 0; i < nodes.length; i++) {
    var button = nodes[i];
    button.addEventListener("click", total1)

}

function quantity() {
    var nodes = document.getElementsByClassName('btn');

    for (var i = 0; i < nodes.length; i++) {
        var button = nodes[i];
        button.addEventListener("click", total1)

    }



    let quant = prompt("how many do you want ", "0");

    document.getElementById("index").innerHTML = Number(quant)
    document.getElementById("add").innerHTML = Number(document.getElementById("add").innerHTML) + Number(quant);
    total1();


    //tot = Number(document.getElementsByClassName("price")[Number(document.getElementById("index"))].innerText) * Number(quant);

    //document.getElementById("total").innerHTML =  + Number(document.getElementById("total").innerHTML) + tot;

}

function total1(event) {
    var button = event.target;
    var item = button.parentElement;
    var price = item.getElementsByClassName("price")[0].innerText;
    tot = document.getElementById("index").innerHTML * price
    document.getElementById("total").innerHTML = +Number(document.getElementById("total").innerHTML) + tot
    console.log(price);

    //alert("total is " + document.getElementById("index").innerHTML);
    //alert("total is " + document.getElementById("total").innerHTML)
}

function total_aff() {
    alert("total is " + document.getElementById("total").innerHTML)
}

const ratings = document.querySelectorAll('.rating');
const selectedRatingElements = document.querySelectorAll('[id^="item"]');

ratings.forEach((rating, index) => {
    const stars = rating.querySelectorAll('input');
    const selectedRatingElement = selectedRatingElements[index];

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const selectedRating = Array.from(stars).findIndex(star => star.checked) + 1;
            selectedRatingElement.textContent = `Selected Rating: ${selectedRating} stars`;
        });
    });
});
document.getElementsByClassName('btn').addEventListener('click', function() {
const dataToSend = document.getElementById("total").innerHTML;
localStorage.setItem('myData', dataToSend);
window.location.href = 'card.html';
});
function Fruit(name, image, price, season) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = 0;
    this.cost = 0;
    this.sellingPrice = 0;
    this.season = season;
    this.sellChance = 0.5; //every item starts with a 50% chance that it will sell
}
var fruits; // will be the array of fruits passed from the buy page

var j = 'a';

function print(i) {
    var stock = document.getElementById('stock');
    stock.innerHTML += "<div class='ui-block-" + j + " border'><h4>" +
            fruits[i].name + ' x' + fruits[i].quantity +
            '</h4><p>Purchased at $' + (fruits[i].price).toFixed(2) + '</p><img style="padding-left:10%" src="' + fruits[i].image + '" alt="apple" height="50px"/><br>' + '$' +
            '<input type="number" name="' + fruits[i].name + '" min=".25" max="6" step=".25" onchange="(function(el){el.value=parseFloat(el.value).toFixed(2);})(this)" required><br><div id="error'+ fruits[i].name+'" style="display:none; color:red;" >Must enter valid price from .25 to 6.00</div><div>';
    j = (j === 'a' ? 'b' : (j === 'b' ? 'c' : 'a'));
}
function init() {
    //MONEY
    document.getElementById("money").innerHTML += localStorage.getItem('moneyValue');
    //DATE
    if (localStorage.getItem('date') != null) {
        var date = localStorage.getItem('date');
        document.getElementById('date').innerHTML = "Date: " + date;
    }
    //WEATHER
    var weatherStr = localStorage.getItem('weather');
    var array = weatherStr.split(',');
    document.getElementById("weather").innerHTML = "Weather: " + array[0] + "&deg; F " + array[1];
    //FRUITS
    var fruitStr = localStorage.getItem('fruits');
    fruits = JSON.parse(fruitStr);
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].quantity > 0) {
            print(i);
        }
    }
}
function complete() {
    if(doCustomValidation()){
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].quantity > 0) {
            fruits[i].sellingPrice = (document.getElementsByName(fruits[i].name))[0].value;
        }
    }
    var fruitStr = JSON.stringify(fruits);
    localStorage.setItem('fruits', fruitStr);
    window.location = 'Sell.html';
    }
}

function doCustomValidation(){
    var valid = true;
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].quantity > 0) {
            var x = Number((document.getElementsByName(fruits[i].name))[0].value);
            if (isNaN(x)) {
                document.getElementById('error'+fruits[i].name).style.display="inline";
                valid = false;
            }
            else if(x<0.25 ||x>6){
                document.getElementById('error'+fruits[i].name).style.display="inline";
                valid = false;
            }
            else{
                document.getElementById('error'+fruits[i].name).style.display="none";
            }
        }
    }
    return valid;
}
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
var fruits;
var moneyValue;
var originalMoneyValue;
var moneySpent;
var numSold;
var counter = 1;
var countMax = 120;
var timer;
var timerId;
var weatherArray;
var date;
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var audio = new Audio('sounds/moneyShort.mp3');
function Holiday(name, month, popularFruits) {
    this.name = name;
    this.month = month;
    this.popularFruits = popularFruits;
}
var December = new Holiday("Christmas, Hanukkah, and New Year", monthNames[11], [0, 14, 9]); //["Apple", "Yam", "Potato"]
var November = new Holiday("Thanksgiving", monthNames[10], [0, 14, 10]); //["Apple", "Yam", "Pumpkin"]
var September = new Holiday("Jewish New Year Rosh Hashannah", monthNames[8], [0]);
var April = new Holiday("Easter", monthNames[3], [11]); //Strawberries"
var holidays = [December, November, September, April];

var h = 9;
var m = 0;
var end = "AM";

function displayTime() {
    m++;
    if (m == 60) {
        h++;
        m = 0;
        if (h == 12) {
            end = "PM"
        }
    }
    if (h > 12) {
        h = 1;
    }
    var count = document.getElementById('timer');
    if (m < 10) {
        count.innerHTML = h + ":0" + m + ' ' + end;
    } else {
        count.innerHTML = h + ':' + m + ' ' + end;
    }
}
function displayQuantities() {
    var table = document.getElementById('table1');
    table.innerHTML = "";
    table.innerHTML += "<thead><tr><th>Quantity Left</th><th>Quantity Sold</th><th>Selling Price</th></tr></thead><tbody>";
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].quantity > 0) {
            table.innerHTML += "<tr><td><span style='border:2px solid black; padding:8px; line-height:30px; color:red;'>" + (fruits[i].quantity - numSold[i]) +
                    "</span> " + fruits[i].name + " left </td>" +
                    "<td>" + numSold[i] + " sold </td>" +
                    "<td>$" + fruits[i].sellingPrice + "</td>" +
                    "</tr>";
        }
    }
    table.innerHTML += "</tbody>";
}
function update() {
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].quantity - numSold[i] > 0) {
            console.log("There are " + (fruits[i].quantity - numSold[i]) + " " + fruits[i].name + "s and there chance for selling is " + ((fruits[i].sellChance) / countMax) + "because the sellchance is " + (fruits[i].sellChance) + " and countMax is " + countMax);
            for (var j = 0; j < (fruits[i].quantity - numSold[i]); j++) {
                if (Math.random() < (fruits[i].sellChance) / countMax) {
                    console.log("********The " + j + "th " + fruits[i].name + " sold.");
                    numSold[i]++;
                    moneyValue = parseFloat(moneyValue) + parseFloat(fruits[i].sellingPrice);
                    document.getElementById("money").innerHTML = "You have $" + moneyValue.toFixed(2);
                    audio.currentTime = 0;
                    audio.play();
                }
            }
        }
    }
    displayQuantities();
    counter++;
    console.log(counter);
    if (counter > countMax) {
        clearInterval(timer);
        clearTimeout(timerId);
        var count = document.getElementById('timer');
        count.innerHTML = "Closing Time!";
        displayResults();
    }
}
function closeEarly(){
    if(confirm("Are you sure you want to stop now?")){
        counter=countMax+1;
    }
}
function init() {
    //FRUITS
    if (localStorage.getItem('fruits') != null) {
        //MONEY
        moneyValue = localStorage.getItem('moneyValue');
        document.getElementById("money").innerHTML += localStorage.getItem('moneyValue');
        originalMoneyValue = localStorage.getItem('originalMoneyValue');
        moneySpent = originalMoneyValue - moneyValue;
        //DATE
        date = localStorage.getItem('date');
        document.getElementById('date').innerHTML = "Date: " + date;
        //WEATHER
        var weatherStr = localStorage.getItem('weather');
        weatherArray = weatherStr.split(',');
        document.getElementById("weather").innerHTML = "Weather: " + weatherArray[0] + "&deg; F " + weatherArray[1];

        var fruitStr = localStorage.getItem('fruits');
        fruits = JSON.parse(fruitStr);
        numSold = Array.apply(null, Array(fruits.length)).map(Number.prototype.valueOf, 0);
        displayQuantities();
        getPercentSell();
        timerId = setInterval(displayTime, 50);
        timer = setInterval(update, 250);
    } else {
        moneyValue = localStorage.getItem('moneyValue');
        document.getElementById("money").innerHTML += localStorage.getItem('moneyValue');

        var count = document.getElementById('timer');
        count.className = "";
        count.style.padding = '5%';
        count.innerHTML = "<p>This page no longer exists. This can occur if you refresh the page after your fruits were sold. Please return to home.</p><a href='index.html' data-ajax='false' class='ui-btn'>Home</a>";
    }

}
//calculates the percent chance that each item will sell based on their decisions
function getPercentSell() {
    var e = document.getElementById('evaluation');
    //if its too cold or too hot ot thunder or snow storm, the chance of any item selling goes down
    var weatherContribution = 0; 
    if (parseInt(weatherArray[0]) < 20) {
        weatherContribution -= 0.2;
       e.innerHTML+="Weather: Your chances of selling any item went down because it is really cold outside.<br>"; 
    }
    if(parseInt(weatherArray[0]) > 85){ 
        weatherContribution -= 0.2;
        e.innerHTML+="Weather: Your chances of selling any item went down because it is really hot outside.<br>"; 
    }
    if(weatherArray[1] === "Thunderstorm" || weatherArray[1] === "Snowstorm") {
        weatherContribution -= 0.2;
        e.innerHTML+="Weather: Your chances of selling any item went down because of the " + weatherArray[1] +"<br>"; 
    }
    if (weatherArray[1] === "Light Rain" || weatherArray[1] === "Light Snow") {
        weatherContribution -= (0.05);
        e.innerHTML+="Weather: Your chances of selling any item went slightly down because of the " + weatherArray[1] +"<br>"; 
    }
    if (weatherArray[1] === "Clear Skies" || weatherArray[1] === "Sunny") {
        weatherContribution += .025;
        e.innerHTML+="Weather: Your chances of selling any item went slightly up because the weather shows '" + weatherArray[1] +"' <br>"; 
    }    
    e.innerHTML+="<br>";
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].quantity > 0) {
            e.innerHTML += fruits[i].name + ": <br>";
            fruits[i].sellChance += weatherContribution;
            //if fruit is in season
            var currentSeason = getCurrentSeason();
            if (currentSeason === fruits[i].season) {
                fruits[i].sellChance += .1;
                e.innerHTML+="In season! Higher chance of selling.<br>"
            }
//            //on average, selling for double the buy price is normal. if its less, chances of selling increase, if its more but the fruits are harder to come by, its okay
            var priceIncrease = parseFloat(fruits[i].price) / fruits[i].sellingPrice;

            if (currentSeason === "winter") {
                if (fruits[i].season === "summer") {
                    //in the winter, summer fruits are acceptable at higher prices
                    if (priceIncrease > 2.5){
                        fruits[i].sellChance -= .15;
                        e.innerHTML += "Your price increase on this item was too high ("+ priceIncrease +"). For a summer fruit in the winter, you can raise prices, but try to keep it at a max of 2.5 times the purchase price. <br>";
                    }
                    else if (priceIncrease < 2){
                        fruits[i].sellChance += .1;
                        e.innerHTML += "Your price increase on this item was low ("+ priceIncrease +")! Higher chance of selling.<br>";
                    }
                }
                if (fruits[i].season === "winter") {
                    if (priceIncrease < 1.25){
                        fruits[i].sellChance += .15;
                        e.innerHTML += "Your price increase on this item was low ("+ priceIncrease +")! Higher chance of selling.<br>";
                    }
                    else if (priceIncrease > 2){
                        fruits[i].sellChance -= .2;
                        e.innerHTML += "Your price increase on this item was high ("+ priceIncrease +").Lower chance of selling.<br>";
                    }
                }
            }
            if (currentSeason === "summer") {
                if (priceIncrease < 1.75){
                    fruits[i].sellChance += .1;
                    e.innerHTML += "Your price increase on this item was low (x "+ priceIncrease.toFixed(2) +")! Higher chance of selling.<br>";
                }
                else if (priceIncrease > 2){
                    fruits[i].sellChance -= .1;
                    e.innerHTML += "Your price increase on this item was high (x "+ priceIncrease.toFixed(2) +").Lower chance of selling.<br>";
                }
            }
            e.innerHTML+= "Overall chance of selling was: " + fruits[i].sellChance + "<br><br>";
        }
    }
    //HOLIDAYS
    for (var j = 0; j < holidays.length; j++) {
        if (holidays[j].month === (date.split(" "))[0]) {
            e.innerHTML+="HOLIDAY: " + holidays[j].name + '<br>The following fruits would have had a higher chance of selling: <br>';
            for (var k = 0; k < holidays[j].popularFruits.length; k++){
                fruits[parseInt(holidays[j].popularFruits[k])].sellChance += .15;
                e.innerHTML+= fruits[parseInt(holidays[j].popularFruits[k])].name + " ";
            }
        }
    }
}
function getCurrentSeason() {
    var month = (date.split(" "))[0];
    var currentSeason = "";
    for (var i = 0; i < 12; i++) {
        if (monthNames[i] === month) {
            if (i < 3 || i > 8) {
                currentSeason = "winter";
            } else {
                currentSeason = "summer";
            }
        }
    }
    return currentSeason;
}
function displayResults() {
    var e = document.getElementById('btnEval');
    e.style.display = "inline";
    var p = document.getElementById('play');
    p.style.display = "inline";
    var c = document.getElementById('close');
    c.style.display = "none";
    var results = document.getElementById('results');
//    results.style.borderTop = '2px solid black';
    results.innerHTML = "<h3>Results</h3>\n\
    <table>\n\
        <tr>\n\
            <td>Started with:</td><td>$</td>\n\
            <td id='start' style='text-align:right;'>" + originalMoneyValue + "</td>\n\
        </tr>\n\
        <tr>\n\
            <td>Spent on inventory: </td><td>$</td>\n\
            <td style='text-align:right;'>" + moneySpent.toFixed(2) + "</td>\n\
        </tr>\n\
        <tr>\n\
            <td>Left-over BEFORE Selling:</td><td>$</td>\n\
            <td style='text-align:right;'>" + (originalMoneyValue - moneySpent).toFixed(2) + "</td>\n\
        </tr>\n\
        <tr>\n\
            <td>Left-over AFTER Selling:</td><td>$</td>\n\
            <td id='end' style='text-align:right;'>" + parseFloat(moneyValue).toFixed(2) + "</td>\n\
        </tr>\n\
        </table><br>";
    if (parseFloat(originalMoneyValue) > parseFloat(moneyValue)) { //loss
        document.getElementById('start').style.color = 'red';
        document.getElementById('end').style.color = 'red';
        results.innerHTML += "<table><tr><td><h4 style='color:red;'>Loss: </h4></td><td>$" + (originalMoneyValue - moneyValue).toFixed(2) + "</td></tr></table>";
    } else {
        document.getElementById('start').style.color = 'green';
        document.getElementById('end').style.color = 'green';
        results.innerHTML += "<table><tr><td><h4 style='color:green;'>Gain: </h4></td><td>$" + (moneyValue - originalMoneyValue).toFixed(2) + "</td></tr></table>";
    }
    localStorage.setItem('moneyValue', parseFloat(moneyValue).toFixed(2));
    localStorage.removeItem('fruits');
    localStorage.removeItem('weather');
    localStorage.removeItem('date');
    localStorage.removeItem('originalMoneyValue');
}
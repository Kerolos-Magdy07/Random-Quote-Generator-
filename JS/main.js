let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =[
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty." , 
    "Don't Let Yesterday Take Up Too Much of Today." ,
    "You Learn More From Failure Than From Success. Don't Let It Stop You. Failure Builds character.",
    "It's Not Whether You Get Knocked Down, It's whether You Get Up.",
    "If You Are Working on something That You Really Care About, You Don't Have To Be Pushed. The Vision Pulls You." ,
    "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do." ,
    "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough." ,
    "Entrepreneurs Are Great At Dealing with Uncertainty And Also Very Good At Minimizing Risk. That's The Classic Entrepreneur.", 
    "We May Encounter Many Defeats But We Must Not Be Defeated." ,
    "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",

];

btn.addEventListener('click', function(){
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
output.innerHTML = randomQuote;
})

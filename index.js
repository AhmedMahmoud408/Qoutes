var qoutes= document.getElementById('data')
var qoute=[`<p>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</p>
 <h3>― Albert Einstein</h3>` , 
`<p>A room without books is like a body without a soul</p> 
<h3>― Marcus Tullius Cicero</h3>`
, `<p>If you tell the truth, you don't have to remember anything.</p> 
<h3>― Mark Twain</h3>`
, `<p>Always forgive your enemies; nothing annoys them so much.</p>
 <h3>― Oscar Wilde</h3>`
 , `<p>So many books, so little time.</p>
 <h3>― Frank Zappa</h3>`
 , `<p>Be yourself; everyone else is already taken.</p>
 <h3>― Oscar Wilde</h3>`
 , `<p>You know you're in love when you can't fall asleep because reality is finally better than your dreams</p>
 <h3>― Dr. Seuss</h3>`
 , `<p>Be the change that you wish to see in the world.</p>
 <h3>― Mahatma Gandhi</h3>`
]

function randomqoute() {
    var x= Math.floor(Math.random() * qoute.length);
    return qoute[x];
     
  }

function NewQoute(){
    
    qoutes.innerHTML= randomqoute();
}

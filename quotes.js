var periodQuotes=["&quot;Women complain about premenstrual syndrome, but I think of it as the only time of the month that I can be myself.&quot; <br> Roseanne Barr", 
"&quot;I mean if there was any justice in the world you wouldn&#146;t even have to go to school during your period. You&#146;d just stay home for five days and eat chocolate and cry.&quot; <br> Andrea Portes, Anatomy of a Misfit",
"&quot;In man, the shedding of blood is always associated with injury, disease, or death. Only the female half of humanity was seen to have the magical ability to bleed profusely and still rise phoenix like each month from the gore.&quot; <br>Estelle R. Ramey",
"&quot;Jokes about menstrual cycles are not funny.<br> Period.&quot;"];
var pRand=Math.floor(Math.random()*4);
var pQuote="<p>"+periodQuotes[pRand]+"</p>";
document.getElementById("periodQuotes").innerHTML=pQuote;

var nutritionQuotes=["&quot;The greatest wealth is Health.&quot;", 
"&quot;Take care of your body. It&#146;s the only place you have to live.&quot;<br>Jim Rohn", 
"&quot;Your body is a temple, but only if you treat it as one.&quot;<br>Astrid Alauda", 
"&quot;The part can never be well unless the whole is well.&quot;<br>Plato"];
var nRand=Math.floor(Math.random()*4);
var nQuote="<p>"+nutritionQuotes[nRand]+"</p>";
document.getElementById("nutritionQuotes").innerHTML=nQuote;

var sexQuotes=["&quot;Sex is a part of nature. I go along with nature.&quot;<br>Marylin Monroe",
"&quot;Sex is emotion in motion.&quot;<br> Mae West",
"&quot;Sex&#58; the thing that takes up the least amount of time and causes the most amount of trouble.&quot;<br>John Barrymore",
"&quot;Love is the answer, but while you&#146re waiting for the answer, sex raises some pretty good questions.&quot;<br> Woddy Allen"];
var sRand=Math.floor(Math.random()*4);
var sQuote="<p>"+sexQuotes[sRand]+"</p>";
document.getElementById("sexQuotes").innerHTML=sQuote;

var mentalQuotes=["&quot;Mental health problems do not affect three or four out of every five persons but one out of one.&quot;<br>Dr. William Menninger",
"&quot;Your present circumstances don&#146t determine where you can go; they merely determine where you start.&quot;<br>Nido Qubein",
"&quot;You, yourself, as much as anybody in the entire universe, deserve your love and affection.&quot;<br>The Buddha",
"&quot;Not until we are lost do we begin to understand ourselves.&quot;<br>Henry David Thoreau "];
var mRand=Math.floor(Math.random()*4);
var mQuote="<p>"+mentalQuotes[mRand]+"</p>";
document.getElementById("mentalQuotes").innerHTML=mQuote;

var relationsQuotes=["&quot;The purpose of a relationship is not to have another who might complete you, but to have another with whom you might share your completeness.&quot;<br>Neale Donald Walsch",
"&quot;Ultimately the bond of all companionship, whether in marriage or in friendship, is conversation.&quot;<br>Oscar Wilde",
"&quot;You know you&#146re in love when you can&#146t fall asleep because reality is finally better than your dreams.&quot;<br>Dr. Seuss",
"&quot;A friend is someone who knows all about you and still loves you.&quot;<br>Elbert Hubbard"];
var rRand=Math.floor(Math.random()*4);
var rQuote="<p>"+relationsQuotes[rRand]+"</p>";
document.getElementById("relationsQuotes").innerHTML=rQuote;
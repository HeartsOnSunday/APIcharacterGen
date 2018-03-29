/*global $*/
var generateCharacter;
var generateCharacterR;
var characterObject = {
	charName: ["Vrays", "Jon", "Sansa", "Cersei", "Samwell", "Bran", "Daenarys", "Bronn", "hound", "LittleFinger", "Olenna", "Jamie Lannister", "Davos", "Tyrion"],
	charAllignment: ["Chaotic Neutral", "Lawful Neutral", "Neutral Good", "Lawful Evil", "Chaotic Good", "True Neutral", "Chaotic Neutral", "Chaotic Neutral", "Chaotic Neutral", "Lawful Evil", "Lawful Neutral", "True Neutral", "Neutral Good", "True Neutral"],
	charTitle: ["Lannister/Targaryen", "Night's Watch", "Lannister/Bolton", "Baratheon", "Night's Watch", "The Three Eyed Raven", "Mother of Dragons", "Sellsword", "Lannister/Brotherhood with out Banners", "Independent", "Lady of Highgarden", "Lord Commander of the Kingsguard", "Baratheon/Stark", "Hand of the Queen"],
	charStatus: ["Alive", "Undead", "Alive", "Alive", "Alive", "Alive", "Alive", "Alive", "Undead", "Dead", "Dead", "Alive", "Alive", "Alive"],
	charPsd: ["Vrays.psd", "Jon.psd", "Sansa.psd", "Cersei.jpg", "samwel.psd", "Branden.psd", "Dae.psd", "Bronn.psd", "Hound.psd", "LittleFinger.psd", "Olenna.psd", "Jamie.psd", "Davos.psd", "Tyrion.jpg"],
	cpuChoice: 99,
	genCharacter: function() {
		var that = this;
		var randomize = Math.floor(Math.random() * this.charName.length);
		console.log(randomize);
		var character = this.charName[randomize];
		console.log(character, "Before API Call");
		var title = this.charTitle[randomize];
		var allignment = this.charAllignment[randomize];
		var status = this.charStatus[randomize];
		var pic = this.charPsd[randomize];
		$.ajax({
			method: "GET",
			url: "https://got-quotes.herokuapp.com/quotes?char=" + character,
			dataType: "json",
			success: function(data) {
				console.log(data);
				that.quote = data.quote;
				document.getElementById("quoteHere").innerHTML = "" + that.quote;
				console.log(that.quote);
				that.character = data.character;
				document.getElementById("characterHere").innerHTML = "" + that.character;
				console.log(that.character);
				// var pQuote = document.createElement("p").html(that.quote);
				//  pQuote.appendChild("#quoter");
				console.log(character);
				document.getElementById("character").innerHTML = "" + character;
				console.log(title);
				document.getElementById("title").innerHTML = "" + title;
				console.log(allignment);
				document.getElementById("allignment").innerHTML = "" + allignment;
				console.log(status);
				document.getElementById("status").innerHTML = "" + status;
				console.log(pic);
				//   document.getElementById("portrait").setAttribute("src", "../Battle/image/"+pic);
				//  document.getElementById("thePic").src = "../image/Bronn.psd";
			}
		});
	}
};
document.getElementById("quoter").onclick = function() {
	characterObject.genCharacter();
	console.log("anything");
};

function tweetIt() {
	var gotCharacter = document.getElementById("character").innerText;
	var gotTitle = document.getElementById("title").innerText;
	var gotAllignment = document.getElementById("allignment").innerText;
	var tweetUrl = 'https://twitter.com/share?text=' + "My results from the GOT Character Generator: " + encodeURI(gotAllignment) + ": " + encodeURIComponent(gotCharacter) + ": " + encodeURIComponent(gotTitle);
	'.' + "Get your character here -->";
	window.open(tweetUrl);
}

function shareIt() {
	var gotCharacter = document.getElementById("character").innerText;
	var gotTitle = document.getElementById("title").innerText;
	var gotAllignment = document.getElementById("allignment").innerText;
	var facebookUrl = 'https://www.facebook.com/sharer/sharer.php' + "My results from the GOT Character Generator: " + encodeURI(gotAllignment) + ": " + encodeURIComponent(gotCharacter) + ": " + encodeURIComponent(gotTitle);
	'.' + "Get your character here -->";
	window.open(facebookUrl);
}
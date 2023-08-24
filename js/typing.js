/*타이핑 효과*/

$(function(){

	const content = " HTML / CSS / JQUERY / JAVASCRIPT / OPEN API / JSON / AJAX / TYPESCRIPT / REACT / RESPONSIVE WEB SITE";
	const text = document.querySelector("#intro_info");
	let i = 0;


	function typing(){
		let txt = content[i++];
		text.innerHTML += txt=== "\n" ? "<br/>": txt;
		if (i > content.length) {
			text.textContent = "";
			i = 0;
		}
	}
	setInterval(typing, 80)



});
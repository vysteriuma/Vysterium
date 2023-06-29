function proxy() {
	if ("serviceWorker" in navigator) {
		var i = document.getElementById("ifr");
		let url = atob(decodeURIComponent(window.location.hash.slice(1)));
		console.log(url)
		navigator.serviceWorker.register("/sw.js", {scope: indexing$config.prefix}).then(() => {
			i.src = indexing$config.prefix + indexing$config.encodeUrl(url);
			var m = document.getElementById("m");
			i.onload = function() {
				m.innerText = i.contentDocument.title;
				window.location.hash = btoa(indexing$config.decodeUrl(i.contentWindow.location.href.split("/")[4]))
			}
		});
	}
	else {
		document.getElementById("m").innerHTML = "Fatal Error: Your browser does not support service workers, please join our <a href='https://discord.gg/xi'>Discord</a> for more information.";
	}
}

navigator.serviceWorker.getRegistrations().then(registrations => {
	if(registrations[0] === undefined) {
		document.getElementById("m").innerHTML = "Fatal Service Worker Error: Please join our <a href='https://discord.gg/xi'>Discord</a> to report this issue or try again later"
	}
});
function load() {
	if(!(btoa(window.location.hash.slice(1)))) return true;
	document.getElementById("align").style.display = "flex";
	document.getElementsByClassName("sidebar").display = "none";
	proxy()
}
window.addEventListener("DOMContentLoaded", () => {
        load()
    });

function back() {
	document.getElementById("align").style.display = "none";
	document.getElementsByClassName("sidebar").display = "none";
}
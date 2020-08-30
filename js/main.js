(()=>{
	console.log("fired!");

	let menuBtn = document.querySelector("#menu"),
		navPanel = document.querySelector("#navigation");
	
	function showNav(){
		if (menuBtn.innerHTML === "menu =") {
			menuBtn.innerHTML = "close x";
		} else {
			menuBtn.innerHTML = "menu =";
		}

		navPanel.classList.toggle("show-nav");
	}

	menuBtn.addEventListener("click", showNav);
})();
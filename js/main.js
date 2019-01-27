(() => { 
	var icon = document.querySelector('icon');
	
	var allicons = document.querySelectorAll('.birthday');

	function logMyId(){
		console.log(this.id);
	}
	
	icon.addEventListener("click", logMyId);

	allicons.forEach(currenticon => currenticon.addEventListener('click', logMyId))

})();

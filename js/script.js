let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// ----------------------------------------------------------------------
let modal = document.getElementById('myModal');


// let img = document.getElementById('myImg');

let img = document.querySelectorAll('.photo_gallery img');
img = Array.from(img);

let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

img.forEach(i => i.addEventListener('click', (event)=>{

    modal.style.display = "block";
    modalImg.src = event.target.src;
	console.log(event.target)
    captionText.innerHTML = this.alt;

})) ;

let span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
    modal.style.display = "none";
}

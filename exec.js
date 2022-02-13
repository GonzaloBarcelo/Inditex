
function search_in_page(){
	var input, mod;
	input= document.getElementById('searcher');
	mod=input.value.toLowerCase();
	
	if (mod == ('cotizaciones')) {
		window.location.href="cotizaciones.html";
	}
	else if (mod == ('home') | mod==('inicio')) {
		window.location.href="inicio.html";
	}
	else if (mod == ('historia')){
		window.location.href="historia.html";
	}
	else if (mod == ('noticias')){
		window.location.href="noticias.html";
	}
	else if (mod == ('unete')){
		window.location.href="unete.html";
	}
	else if (mod == ('marcas')){
		window.location.href="marcas.html";
	}
	else if (mod ==('recomendaciones')) {
		document.location.href='cotizaciones.html';
		document.scrollTo(0,1500);
	}
	else if (mod !=''){
		document.getElementById('searcher').value ='';
		alert("Página no encontrada.");
	}

}

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

async function getFromApi(){


	return fetch("https://yfapi.net/v6/finance/quote?region=ES&lang=es&symbols=ITX.MC",{method:'GET',params: {modules: 'defaultKeyStatistics,assetProfile'},
	  headers: {
	  	Accept:'application/json',
	   // 'x-api-key': 'KaQZvRWBaM8b2nTReAEuF2kU4ka9QK1T4Lx8EnB8';
	   'x-api-key':'2hs7zfIo7haWNgjmXj6X25U7BYXVOrkja7iOWkyp'
	  }})
	.then(response => response.json())
	.then(data => {
		
		console.log(data);
		/*
		console.log(data.quoteResponse.result[0]);
		console.log(data.quoteResponse.result[0].regularMarketPrice);
		*/
		return 	data.quoteResponse.result[0];
	})
	
	.catch(function (error) {
		console.log("Se ha producido un error")
		console.error(error);
	});


}

function readFileAndUpdate(){

}
function updateData(){
	var result=getFromApi().then(response => { return (response.regularMarketPrice)});
	console.log(result);
	document.write("<p>");
	document.write(result.regularMarketPrice);
	document.writeln("</p>");
}
function updateCotizaciones(){
	try{
		getFromApi()
		.then(response => {

			document.getElementById("card-actual").innerHTML=response.regularMarketPrice;
			let text= response.regularMarketChangePercent;
			let result = String(text).substr(0, 5);
			document.getElementById("card-var").innerHTML=result;
			document.getElementById("card-apert").innerHTML=response.regularMarketOpen;
			
			document.getElementById("btn-actualizar").disabled = "true";

			var table = document.getElementById('table-values-cotizaciones');
			var row = table.insertRow(1);
 			var cell1 = row.insertCell(0);
 			var cell2 = row.insertCell(1);
 			var cell3 = row.insertCell(2);
 			var cell4 = row.insertCell(3);
 			var cell5 = row.insertCell(4);
 			var cell6 = row.insertCell(5);
 			var cell7 = row.insertCell(6);
 			var cell8 = row.insertCell(7);
 			var cell9 = row.insertCell(8);
 			
 			
 			cell1.innerHTML = "19/02/2022";
 			cell2.innerHTML =response.regularMarketPrice;
 			cell3.innerHTML =result;
 			cell4.innerHTML = response.regularMarketDayHigh;
 			cell5.innerHTML = response.regularMarketDayLow;
 			cell6.innerHTML = response.regularMarketVolume;
 			cell7.innerHTML = response.regularMarketPreviousClose;
 			cell8.innerHTML = response.regularMarketOpen;
 			cell9.innerHTML = response.marketCap;

    		setTimeout(function() {document.getElementById("btn-actualizar").disabled = false;}, 30000);

		})
	}
	catch{

	}
}
var main = function(){

	var matrizBasesNitrogenadas = ['A','G','T','C'];
	for(i = 0; i < matrizBasesNitrogenadas.length; i++){
		$(".basesNitrogenadas").append("<option value="+matrizBasesNitrogenadas[i]+">"+matrizBasesNitrogenadas[i]+"</option>");
	}

	function ligacoesDNA(base5, base3){
		var result = false;
		if((base5 == 'A' && base3 == 'T') || (base5 == 'T' && base3 == 'A'))
		{
			result = true;
		}else if((base5 == 'C' && base3 == 'G') || (base5 == 'G' && base3 == 'C'))
		{
			result = true;
		}
		return result;
	}

	$("#btnAvaliaBases").click(function(){
		var base5 = $(".baseNitrogenada5 > .basesNitrogenadas option:selected").text();
		var base3 = $(".baseNitrogenada3 > .basesNitrogenadas option:selected").text();

		if(ligacoesDNA(base5,base3) == true){

			$(".dna5").append("<p class='acertoDeBases'>"+base5+"</p>");
			$(".dna3").append("<p class='acertoDeBases'>"+base3+"</p>");
			
		}else{
			
			$(".dna5").append("<p class='erroDeBases'>"+base5+"</p>");
			$(".dna3").append("<p class='erroDeBases'>"+base3+"</p>");
			
			alert("Erro de Bases!");
		}
	});
	

	

}
$(document).ready(main);
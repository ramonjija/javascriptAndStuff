var main = function(){

	var matrizBasesNitrogenadas = ['a','g','c','t'];
	for(i = 0; i < matrizBasesNitrogenadas.length; i++){
		$(".basesNitrogenadas").append("<option value="+matrizBasesNitrogenadas[i]+">"+matrizBasesNitrogenadas[i]+"</option>");
	}

	//var base3 = document.getElementById('');
	//var base5;
/*
	var ligacoesDNA = function(base5, base3){
		var result = false;
		if((base5 == 'a' && base3 == 't') || (base5 == 't' && base3 == 'a'))
		{
			result = true;
		}else if((base5 == 'c' && base3 == 'g')) || (base5 == 'g' && base3 == 'c'))
		{
			result = true;
		}
		return result;
	}
*/
}
$(document).ready(main);
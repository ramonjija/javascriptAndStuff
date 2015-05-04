var mainOligo = function(){
		
	function PCR(dna5, dna3, oligo){
			for(var i = 0; i < dna5.length; i++)
				$(".dna5").append("<p>"+dna5[i]+" - " +"</p>");

			for(var i = 0; i < dna3.length; i++)
				$(".dna3").append("<p>"+" - " +dna3[i]+"</p>");
		}	

		var key = "";
		var keyCombo = "";
		var key5 = "";
		var keyCombo5 = "";
		var key3 = "";
		var keyCombo3 = "";
		$("#txtOligo").keyup(function(event){

			if(keyCombo.length < 6){
				key = event.which;
				if(key === 65){
					keyCombo += "A";
					$(this).val(keyCombo);
				}else if(key === 84){
					keyCombo += "T";
					$(this).val(keyCombo);
				}else if(key === 67){
					keyCombo += "C";
					$(this).val(keyCombo);
				}else if(key === 71){
					keyCombo += "G";
					$(this).val(keyCombo);
				}else{
					$(this).val(keyCombo);
				}
			}else{
					
					$(this).val(keyCombo);
				}
		});

		$("#txtDNA5").keyup(function(event){
			if(keyCombo5.length < 6){
				key5 = event.which;
				if(key5 === 65){
					keyCombo5 += "A";
					$(this).val(keyCombo5);
				}else if(key5 === 84){
					keyCombo5 += "T";
					$(this).val(keyCombo5);
				}else if(key5 === 67){
					keyCombo5 += "C";
					$(this).val(keyCombo5);
				}else if(key5 === 71){
					keyCombo5 += "G";
					$(this).val(keyCombo5);
				}else{
					$(this).val(keyCombo5);
				}
			}else{
					
					$(this).val(keyCombo5);
				}
		});

		$("#txtDNA3").keyup(function(event){
			if(keyCombo3.length < 6){
				key3 = event.which;
				if(key3 === 65){
					keyCombo3 += "A";
					$(this).val(keyCombo3);
				}else if(key3 === 84){
					keyCombo3 += "T";
					$(this).val(keyCombo3);
				}else if(key3 === 67){
					keyCombo3 += "C";
					$(this).val(keyCombo3);
				}else if(key3 === 71){
					keyCombo3 += "G";
					$(this).val(keyCombo3);
				}else{
					$(this).val(keyCombo3);
				}
			}else{
					
					$(this).val(keyCombo3);
				}
		});

		$("#btnOligo").click(function(){
			var oligo = keyCombo;
			var dna5 = keyCombo5;
			var dna3 = keyCombo3;
			if(oligo.length == 6 && dna5.length != 0 && dna3.length != 0){
				PCR(dna5,dna3,oligo);

			//alert(oligo +" "+dna5+" "+dna3);
				/*for(var i = 0; i < dna5.length; i++)
					$(".dna5").append("<p>"+dna5[i]+" - " +"</p>");
				for(var i = 0; i < dna3.length; i++)
					$(".dna3").append("<p>"+" - " +dna3[i]+"</p>");*/
			}
			//
				//PCR(dna5, dna3, oligo);
			/*for(var i = 0; i < dna5.length; i++)
				$(".dna5").append("<p>"+dna5[i]+" - " +"</p>");
			for(var i = 0; i < dna3.length; i++)
				$(".dna3").append("<p>"+dna3[i]+" - " +"</p>");

				//alert(oligo);
			/*}else{
				$("#oligoSizeError").toggleClass("acertoDeOligo");
			}*/
		});

		
	
}


$(document).ready(mainOligo);
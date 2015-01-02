function calculus(){
	var bruto = document.getElementById("inputBruto").value;
	var BrDjece = document.getElementById("djeca").value;
	var prirez = document.getElementById("prebivaliste").value;
	var doprinosi = bruto * 20/100;
	var dohodak = bruto - doprinosi;

alert(dohodak);
//	alert(doprinosi);

	if (BrDjece == 1){

		var osnovica_poreza0 = dohodak - 2200;
		

		if (osnovica_poreza0 < 2200){
			var porez_a = 2200 * 12/100;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;	 
			alert(neto);


		} else if (((osnovica_poreza0 - 2200)>0)&&(osnovica_poreza0 < 8800)){
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;
			
		} else if (osnovica_poreza0 > 8800){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;		
		}
	

	
	}else if (BrDjece == 2){
		var osnovica_poreza0 = dohodak - 1100 - 2200;
		

		if (osnovica_poreza0 < 2200){
			var porez_a = 2200 * 12/100;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;	 
			alert(neto);


		} else if (((osnovica_poreza0 - 2200)>0)&&(osnovica_poreza0 < 8800)){
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;
			
		}else if (osnovica_poreza0 > 8800){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;		
		}
	}else if (BrDjece == 3){
		var osnovica_poreza0 = dohodak - (1540 + 2200) ;
		

		if (osnovica_poreza0 < 2200){
			var porez_a = 2200 * 12/100;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;	 
			alert(neto);


		} else if ((osnovica_poreza0 >2200)&&(osnovica_poreza0 < 8800)){     //else if (((osnovica_poreza0 - 2200)>0)&&(osnovica_poreza0 < 8800))
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
	
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;
			
		}else if (osnovica_poreza0 > 8800){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto = dohodak - porez_i_prirez;
			var result = document.getElementById("result");
			result.innerHTML = neto;		
		}
	}


	
	
};
 		


function calculus(){
	var bruto = document.getElementById("inputBruto").value;
	var BrDjece = document.getElementById("djeca").value;
	var prirez = document.getElementById("prebivaliste").value;
	var doprinosi = bruto * 20/100; // provjeriti za doprinose
	var dohodak = bruto - doprinosi;
	var doprinosiP = document.getElementById("doprinosi");
			doprinosiP.innerHTML = doprinosi + " kn";
	var dohodakP = document.getElementById("dohodak");
			dohodakP.innerHTML = dohodak + " kn";	

			


//	alert(doprinosi);


	if (bruto < 3030){
			var neto = dohodak;
			var result = document.getElementById("result");
			result.innerHTML = neto;

	} else if (BrDjece == 1){

		var osnovica_poreza0 = dohodak - 2600;
		var osnovica_poreza0_P = document.getElementById("osnovica_poreza");
			osnovica_poreza0_P.innerHTML = osnovica_poreza0 + " kn";

		if (osnovica_poreza0 <= 2200){
			var porez_a = 2200 * 12/100;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_a + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;	 
			

		} else if (((osnovica_poreza0 - 2200)>0)&&(osnovica_poreza0 <= 13200)){
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = "  							" + porez_b + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML =  porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;
			
		} else if (osnovica_poreza0 > 13200){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_c + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;		

		} 
	

	
	}else if (BrDjece == 2){
		var osnovica_poreza0 = dohodak - 1100 - 2600;
		var osnovica_poreza0_P = document.getElementById("osnovica_poreza");
			osnovica_poreza0_P.innerHTML = osnovica_poreza0 + " kn";
		

		if (osnovica_poreza0 < 2200){
			var porez_a = 2200 * 12/100;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_a + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;	 
			


		} else if (((osnovica_poreza0 - 2200)>0)&&(osnovica_poreza0 < 8800)){
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_b + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;
			
		}else if (osnovica_poreza0 > 8800){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_c + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;	

		}

	}else if (BrDjece == 3){
		var osnovica_poreza0 = dohodak - (1540 + 1100 + 2600) ; // olakšice za br djece se zbrajaju, ako je dohodak - olakšice 0, onda se ne oporezuje
		var osnovica_poreza0_P = document.getElementById("osnovica_poreza");
			osnovica_poreza0_P.innerHTML = osnovica_poreza0 + " kn";

		if (osnovica_poreza0 < 2200){
			var porez_a = 2200 * 12/100;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_a + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;	 
			


		} else if ((osnovica_poreza0 >2200)&&(osnovica_poreza0 < 8800)){     //else if (((osnovica_poreza0 - 2200)>0)&&(osnovica_poreza0 < 8800))
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_b + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;
			
		}else if (osnovica_poreza0 > 8800){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto = dohodak - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_c + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez + " kn";

			var result = document.getElementById("result");
			result.innerHTML = neto;

		} 
	}


	
	
};
 		


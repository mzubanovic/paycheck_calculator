function calculus(){
	var bruto = document.getElementById("inputBruto").value;
	var brutoBonus = document.getElementById("inputBrutoBonus").value;
	var BrDjece = document.getElementById("djeca").value;
	var prirez = document.getElementById("inputPrirez").value/100; 
	var doprinosi = bruto * 20/100; 
	var dohodak = bruto - doprinosi;
	var doprinosiP = document.getElementById("doprinosi");
			doprinosiP.innerHTML = doprinosi.toFixed(2) + " kn";
	var dohodakP = document.getElementById("dohodak");
			dohodakP.innerHTML = dohodak.toFixed(2) + " kn";	
		


	if (bruto < 3030){
			var neto = dohodak;
			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Minimalni bruto iznosi 3.029,55 kn!!";
			
	} else if (BrDjece == 1){

		var odbitak = 2600
		var odbitak_P = document.getElementById("odbitak");
			odbitak_P.innerHTML = odbitak.toFixed(2) + " kn";
		var osnovica_poreza0 = dohodak - odbitak;
		var osnovica_poreza0_P = document.getElementById("osnovica_poreza");
			osnovica_poreza0_P.innerHTML = osnovica_poreza0.toFixed(2) + " kn";

		if (osnovica_poreza0 <= 2200){
			var porez_a = 2200 * 12/100;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto = dohodak - porez_i_prirez;
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_a.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto.toFixed(2) + " kn";	 
			
			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 

		} else if (((osnovica_poreza0 - 2200)>0)&&(osnovica_poreza0 <= 13200)){
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
			var neto = dohodak - porez_i_prirez;
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_b.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML =  porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto.toFixed(2) + " kn";

			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 

			
		} else if (osnovica_poreza0 > 13200){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto = dohodak - porez_i_prirez;
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_c.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto.toFixed(2) + " kn";

			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 


		} 
	

	
	}else if (BrDjece == 2){
		var odbitak = 2600 *1.5;
		var odbitak_P = document.getElementById("odbitak");
			odbitak_P.innerHTML = odbitak.toFixed(2) + " kn";
		var osnovica_poreza0 = dohodak - odbitak;
		var osnovica_poreza0_P = document.getElementById("osnovica_poreza");
			osnovica_poreza0_P.innerHTML = osnovica_poreza0.toFixed(2) + " kn";
			
		
		if (osnovica_poreza0 <= 2200){
			var porez_a = osnovica_poreza0 * 12/100;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto_1dA = dohodak - porez_i_prirez; 
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_a.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto_1dA.toFixed(2) + " kn";		

			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 



		} else if (((osnovica_poreza0 - 2200)>0)&&(osnovica_poreza0 <= 13200)){
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
			var neto_1dB = dohodak - porez_i_prirez;
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_b.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto_1dB.toFixed(2) + " kn";

			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 


			
		}else if (osnovica_poreza0 > 13200){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto_1dC = dohodak - porez_i_prirez;
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_c.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto_1dC.toFixed(2) + " kn";	

			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 

		}

	}else if (BrDjece == 3){
		var odbitak = 2600 *2.2;
		var odbitak_P = document.getElementById("odbitak");
			odbitak_P.innerHTML = odbitak.toFixed(2) + " kn";
		var osnovica_poreza0 = dohodak - odbitak ; // olakšice za br djece se zbrajaju, ako je dohodak - olakšice 0, onda se ne oporezuje
		var osnovica_poreza0_P = document.getElementById("osnovica_poreza");
			osnovica_poreza0_P.innerHTML = osnovica_poreza0.toFixed(2) + " kn";

		if (osnovica_poreza0 < 2200){
			var porez_a = 0;
			var porez_i_prirez = porez_a + (porez_a* prirez);
			var neto_2dA = dohodak - porez_i_prirez;
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_a.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto_2dA.toFixed(2) + " kn";	 

			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 

			

		} else if ((osnovica_poreza0 >2200)&&(osnovica_poreza0 <= 13200)){     
			var  porez_b = (2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100);
			var porez_i_prirez = porez_b + (porez_b* prirez);
			var neto_2dB = dohodak - porez_i_prirez;
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_b.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto_2dB.toFixed(2) + " kn";

			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 

			
		}else if (osnovica_poreza0 > 13200){
			var porez_c = ((2200 * 12/100)+((osnovica_poreza0 - 2200) * 25/100)) + ((osnovica_poreza0 - 8800)*40/100);
			var porez_i_prirez = porez_c + (porez_c* prirez);
			var neto_2dC = dohodak - porez_i_prirez;
			var netoBonus = brutoBonus - porez_i_prirez;

			var porez_P = document.getElementById("porez");
			porez_P.innerHTML = porez_c.toFixed(2) + " kn";

			var porez_i_prirez_P = document.getElementById("porez_i_prirez");
			porez_i_prirez_P.innerHTML = porez_i_prirez.toFixed(2) + " kn";

			var resultPlaca = document.getElementById("resultPlaca");
			resultPlaca.innerHTML = "Plaća: " + neto_2dC.toFixed(2) + " kn";

			var resultBonus = document.getElementById("resultBonus");
			resultBonus.innerHTML = "Bonus: " + netoBonus.toFixed(2) + " kn";	 


		} 
	}
};

function calculus2(){
	var osnovica = document.getElementById("inputOsnovica").value;
	var fond = document.getElementById("inputFond").value;
	var koef = document.getElementById("inputKoef").value;
	var brojPrek = document.getElementById("inputBrPrekovremenih").value;

	if (neto < 2424){
		// minimalna neto plaća - 2423,64kn
	}else{
		var jedanP = (osnovica/fond) * koef;
		var ukupnoP = jedanP * brojPrek; 

		var result1Prekovremeni = document.getElementById("result1Prekovremeni");
		result1Prekovremeni.innerHTML = "Prekovremeni sat: " + jedanP.toFixed(2) + " kn";	 
			
		var result1Prekovremeni = document.getElementById("resultUkupnoPrekovremenih");
		resultUkupnoPrekovremenih.innerHTML = "Ukupno prekovremenih: " + ukupnoP.toFixed(2) + " kn";	 
			
	}
};



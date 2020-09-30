function calculator(){
	
	var sabet = 4312224 ;
	var nazari = [] , amali = [] , karamoozi = [] , vahedNazari = [] , vahedAmali = [] , i 
	, feeNazari = [] , feeAmali = [] , fee = [] , check = [] , karamooz ;
	
	/*Shahrie har vahed be ezaye har term az 1 ta 10*/
	nazari[0] = 287481 ;
	nazari[1] = 287481 ;
	nazari[2] = 316229 ;
	nazari[3] = 316229 ;
	nazari[4] = 363664 ;
	nazari[5] = 363664 ;
	nazari[6] = 429123 ;
	nazari[7] = 418213 ;
	nazari[8] = 501856 ;
	nazari[9] = 501856 ;
	amali[0] = 431222 ;
	amali[1] = 431222 ;
	amali[2] = 474344 ;
	amali[3] = 474344 ;
	amali[4] = 545496 ;
	amali[5] = 545496 ;
	amali[6] = 643685 ;
	amali[7] = 627320 ;
	amali[8] = 752784 ;
	amali[9] = 752784 ;
	karamoozi[0] = 143740 ;
	karamoozi[1] = 143740 ;
	karamoozi[2] = 158114 ;
	karamoozi[3] = 158114 ;
	karamoozi[4] = 181832 ;
	karamoozi[5] = 181832 ;
	karamoozi[6] = 214561 ;
	karamoozi[7] = 209106 ;
	karamoozi[8] = 250928 ;
	karamoozi[9] = 250928 ;
	
	/*Zakhire tedad vahedaye nazari*/
	vahedNazari[0] = Number(document.getElementById("n951").value) ;
	vahedNazari[1] = Number(document.getElementById("n952").value) ;
	vahedNazari[2] = Number(document.getElementById("n961").value) ;
	vahedNazari[3] = Number(document.getElementById("n962").value) ;
	vahedNazari[4] = Number(document.getElementById("n971").value) ;
	vahedNazari[5] = Number(document.getElementById("n972").value) ;
	vahedNazari[6] = Number(document.getElementById("n981").value) ;
	vahedNazari[7] = Number(document.getElementById("n982").value) ;
	vahedNazari[8] = Number(document.getElementById("n991").value) ;
	vahedNazari[9] = Number(document.getElementById("n992").value) ;
	
	/*Zakhire tedad vahedaye amali*/
	vahedAmali[0] = Number(document.getElementById("a951").value) ;
	vahedAmali[1] = Number(document.getElementById("a952").value) ;
	vahedAmali[2] = Number(document.getElementById("a961").value) ;
	vahedAmali[3] = Number(document.getElementById("a962").value) ;
	vahedAmali[4] = Number(document.getElementById("a971").value) ;
	vahedAmali[5] = Number(document.getElementById("a972").value) ;
	vahedAmali[6] = Number(document.getElementById("a981").value) ;
	vahedAmali[7] = Number(document.getElementById("a982").value) ;
	vahedAmali[8] = Number(document.getElementById("a991").value) ;
	vahedAmali[9] = Number(document.getElementById("a992").value) ;
	
	/*Karamoozi*/
	check[0] = document.getElementById("karamoozi1").checked;
	check[1] = document.getElementById("karamoozi2").checked;
	check[2] = document.getElementById("karamoozi3").checked;
	check[3] = document.getElementById("karamoozi4").checked;
	check[4] = document.getElementById("karamoozi5").checked;
	check[5] = document.getElementById("karamoozi6").checked;
	check[6] = document.getElementById("karamoozi7").checked;
	check[7] = document.getElementById("karamoozi8").checked;
	check[8] = document.getElementById("karamoozi9").checked;
	check[9] = document.getElementById("karamoozi10").checked;
	
	/*karamoozi*/
	karamooz=0 ;
	for(i=0 ; i<check.length ; i++){
		if(check[i] == true){
			karamooz = karamoozi[i];
			break;
		}
	}
	
	/*Mohasebe nazari va amali har term*/
	for(i=0 ; i<vahedNazari.length ; i++){
		feeNazari[i] = vahedNazari[i] * nazari[i] ;
	}
	for(i=0 ; i<vahedAmali.length ; i++){
		feeAmali[i] = vahedAmali[i] * amali[i] ;
	}
	
	/*Jamee nazari va amali har term*/
	for(i=0 ; i<nazari.length ; i++){
		fee[i] = feeAmali[i] + feeNazari[i] ;
	}

	/*Mohasebe shahrie sabet*/
	if(vahedNazari[9] == 0 && vahedAmali[9] == 0){
		sabet = 9 * sabet ;
	}
	else if(vahedNazari[8] == 0 && vahedAmali[8] == 0 && vahedNazari[9] == 0 && vahedAmali[9] == 0){
		sabet = 8 * sabet ;
	}
	else{
		sabet = 10 * sabet ;
	}

	/*Jamee kol*/
	total=0 ;
	for(i=0 ; i<fee.length ; i++){
		total += fee[i] ;
	}
	total = total + karamooz + sabet ;
	
	window.alert(total);

}

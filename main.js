function calculator(){
	
	const sabet = 4312224 ;
	var nazari = [] , amali = [] , karamoozi = [] , vahedNazari = [] , vahedAmali = [] , i 
	, feeNazari = [] , feeAmali = [] , fee = [] , check = [] , daneshkh = [] , temp , fix , pjt , fs ;
	
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

	/*Danesh khanevade*/
	daneshkh[0] = document.getElementById("danesh1").checked;
	daneshkh[1] = document.getElementById("danesh2").checked;
	daneshkh[2] = document.getElementById("danesh3").checked;
	daneshkh[3] = document.getElementById("danesh4").checked;
	daneshkh[4] = document.getElementById("danesh5").checked;
	daneshkh[5] = document.getElementById("danesh6").checked;
	daneshkh[6] = document.getElementById("danesh7").checked;
	daneshkh[7] = document.getElementById("danesh8").checked;
	daneshkh[8] = document.getElementById("danesh9").checked;
	daneshkh[9] = document.getElementById("danesh10").checked;
	
	/*karamoozi*/
	for(i=0 ; i<check.length ; i++){
		if(check[i] == true){
			temp = i ;
			break;
		}
	}

	/*danesh khanevadeh*/
	for(i=0 ; i<daneshkh.length ; i++){
		if(daneshkh[i] == true){
			fs = i ;
			break;
		}
	}

	/*Tamdide project*/
	pjt = document.getElementById("tamdid").value ;
	pjt-- ;
	
	/*Mohasebe nazari va amali har term*/
	for(i=0 ; i<vahedNazari.length ; i++){
		feeNazari[i] = vahedNazari[i] * nazari[i] ;
	}
	for(i=0 ; i<vahedAmali.length ; i++){
		feeAmali[i] = vahedAmali[i] * amali[i] ;
	}
	
	/*Jamee nazari va amali har term*/
	for(i=0 ; i<nazari.length ; i++){
		if(i == temp){
			fee[i] = feeAmali[i] + feeNazari[i] + karamoozi[i] ;
		}
		else{
			fee[i] = feeAmali[i] + feeNazari[i] ;
		}
		if(i == pjt){
			fee[i] += karamoozi[i] ;
		}
		if(i == fs){
			fee[i] += karamoozi[i] ;
		}
	}
	document.getElementById("mot1").innerHTML = fee[0] ;
	document.getElementById("mot2").innerHTML = fee[1] ;
	document.getElementById("mot3").innerHTML = fee[2] ;
	document.getElementById("mot4").innerHTML = fee[3] ;
	document.getElementById("mot5").innerHTML = fee[4] ;
	document.getElementById("mot6").innerHTML = fee[5] ;
	document.getElementById("mot7").innerHTML = fee[6] ;
	document.getElementById("mot8").innerHTML = fee[7] ;
	document.getElementById("mot9").innerHTML = fee[8] ;
	document.getElementById("mot10").innerHTML = fee[9] ;


	/*Mohasebe shahrie sabet*/
	fix = sabet * 8 ;
	/*Terme 9 nadarim*/
	if((vahedNazari[8] + vahedAmali[8] == 0)){
		if(pjt!=8 && fs!=8 && temp!=8){
			document.getElementById("sab9").innerHTML = 0 ;
			document.getElementById("kol9").innerHTML = 0 ;
		}
	/*Faghat yek darse 0 vahedi darim.*/
		else if(pjt==8 || fs==8 || temp==8){
			fix += (sabet/2) ;
			document.getElementById("sab9").innerHTML = 2156112 ;
			document.getElementById("kol9").innerHTML = fee[8] + 2156112 ;
		}
	}
	/*Terme 9 darse sabte nami darim.*/
	else if(vahedNazari[8] != 0 || vahedAmali[8] != 0){
		/*Yek darse sabte nami 1, 2, 3, ya 4 vahedi darim.*/
		if(vahedAmali[8]+vahedNazari[8]<5 && vahedAmali[8]+vahedNazari[8]>0){
			fix += (sabet/2) ;
			document.getElementById("sab9").innerHTML = 2156112 ;
			document.getElementById("kol9").innerHTML = fee[8] + 2156112 ;
			}
		/*Sabte nami yek terme kamel*/
		else{
			fix += sabet ;
			document.getElementById("sab9").innerHTML = 4312224 ;
			document.getElementById("kol9").innerHTML = fee[8] + 4312224 ;
		}
	}

	/*Terme 10 nadarim.*/
	if((vahedNazari[9] + vahedAmali[9] == 0)){
		if(pjt!=9 && fs!=9 && temp!=9){
			document.getElementById("sab10").innerHTML = 0 ;
			document.getElementById("kol10").innerHTML = 0 ;
		}
	/*Faghat yek darse 0 vahedi darim.*/
		else if(pjt==9 || fs==9 || temp==9){
			fix += (sabet/2) ;
			document.getElementById("sab10").innerHTML = 2156112 ;
			document.getElementById("kol10").innerHTML = fee[9] + 2156112 ;
		}
	}
	/*Terme 10 darse sabte nami darim.*/
	else if(vahedNazari[9] != 0 || vahedAmali[9] != 0){
		/*Yek darse sabte nami 1, 2, 3, ya 4 vahedi darim.*/
		if(vahedAmali[9]+vahedNazari[9]<5 && vahedAmali[9]+vahedNazari[9]>0){
			fix += (sabet/2) ;
			document.getElementById("sab10").innerHTML = 2156112 ;
			document.getElementById("kol10").innerHTML = fee[9] + 2156112 ;
		}
		/*Faghat yek darse 0 vahedi darim.*/
		else if((vahedAmali[9]+vahedNazari[9]==0) && (pjt==9 || fs==9 || temp==9)){
			fix += (sabet/2) ;
			document.getElementById("sab10").innerHTML = 2156112 ;
			document.getElementById("kol10").innerHTML = fee[9] + 2156112 ;
		}
		/*Sabte nami yek terme kamel*/
		else{
			fix += sabet ;
			document.getElementById("sab10").innerHTML = 4312224 ;
			document.getElementById("kol10").innerHTML = fee[9] + 4312224 ;
		}
	}
	document.getElementById("sab1").innerHTML = 4312224 ;
	document.getElementById("sab2").innerHTML = 4312224 ;
	document.getElementById("sab3").innerHTML = 4312224 ;
	document.getElementById("sab4").innerHTML = 4312224 ;
	document.getElementById("sab5").innerHTML = 4312224 ;
	document.getElementById("sab6").innerHTML = 4312224 ;
	document.getElementById("sab7").innerHTML = 4312224 ;
	document.getElementById("sab8").innerHTML = 4312224 ;
	document.getElementById("fixed").innerHTML = fix ;

	/*Jamee amali va nazari har term*/
	document.getElementById("kol1").innerHTML = fee[0] + 4312224 ;
	document.getElementById("kol2").innerHTML = fee[1] + 4312224 ;
	document.getElementById("kol3").innerHTML = fee[2] + 4312224 ;
	document.getElementById("kol4").innerHTML = fee[3] + 4312224 ;
	document.getElementById("kol5").innerHTML = fee[4] + 4312224 ;
	document.getElementById("kol6").innerHTML = fee[5] + 4312224 ;
	document.getElementById("kol7").innerHTML = fee[6] + 4312224 ;
	document.getElementById("kol8").innerHTML = fee[7] + 4312224 ;


	/*Jamee kol*/
	var total=0 ;
	for(i=0 ; i<fee.length ; i++){
		total += fee[i] ;
	}
	document.getElementById("mottot").innerHTML = total ;
	total = total + fix ;
	document.getElementById("tot").innerHTML = total ;
	
}


function resetForm(){
	document.getElementById("first").reset() ;
	document.getElementById("second").reset() ;
	document.getElementById("third").reset() ;
	document.getElementById("fourth").reset() ;
	document.getElementById("fiveth").reset() ;
}
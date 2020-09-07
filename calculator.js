function calculator(){
	
	var sabet = 4312224 ;
	var nazari = [] , amali = [] , karamoozi = [] , vahedNazari = [] , vahedAmali = [] , i , feeNazari = [] , feeAmali = [] , fee = [] , check = [] , karamooz ;
	
	/*0 : sale aval		1 : sale dovom		2 : sale sevom		3 : sale charom paeez		4 : sale charom bahar		5 : sale panjom*/
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
	vahedNazari[0] = document.getElementById("n951").value ;
	vahedNazari[1] = document.getElementById("n9523").value ;
	vahedNazari[2] = document.getElementById("n961").value ;
	vahedNazari[3] = document.getElementById("n9623").value ;
	vahedNazari[4] = document.getElementById("n971").value ;
	vahedNazari[5] = document.getElementById("n9723").value ;
	vahedNazari[6] = document.getElementById("n981").value ;
	vahedNazari[7] = document.getElementById("n9823").value ;
	vahedNazari[8] = document.getElementById("n991").value ;
	vahedNazari[9] = document.getElementById("n9923").value ;
	
	/*Zakhire tedad vahedaye amali*/
	vahedAmali[0] = document.getElementById("a951").value ;
	vahedAmali[1] = document.getElementById("a9523").value ;
	vahedAmali[2] = document.getElementById("a961").value ;
	vahedAmali[3] = document.getElementById("a9623").value ;
	vahedAmali[4] = document.getElementById("a971").value ;
	vahedAmali[5] = document.getElementById("a9723").value ;
	vahedAmali[6] = document.getElementById("a981").value ;
	vahedAmali[7] = document.getElementById("a9823").value ;
	vahedAmali[8] = document.getElementById("a991").value ;
	vahedAmali[9] = document.getElementById("a9923").value ;
	
	/*Karamoozi*/
	check[0] = document.getElementById("karamoozi1");
	check[1] = document.getElementById("karamoozi2");
	check[2] = document.getElementById("karamoozi3");
	check[3] = document.getElementById("karamoozi4");
	check[4] = document.getElementById("karamoozi5");
	check[5] = document.getElementById("karamoozi6");
	check[6] = document.getElementById("karamoozi7");
	check[7] = document.getElementById("karamoozi8");
	check[8] = document.getElementById("karamoozi9");
	check[9] = document.getElementById("karamoozi10");
	
	/*karamoozi*/
	for(i=0 ; i<check.length ; i++){
		if(check[i]==true){
			karamooz = karamoozi[i];
			break;
		}
	}
	
	/*Tabdile string input ha be number*/
	for(i=0 ; i<vahedNazari.length ; i++){
		vahedNazari[i] = number(vahedNazari[i]) ;
	}
	for(i=0 ; i<vahedAmali.length ; i++){
		vahedAmali[i] = number(vahedAmali[i]) ;
	}
	
	/*Mohasebe nazari va amali har term*/
	for(i=0 ; i<nazari.length ; i++){
		feeNazari[i] = vahedNazari[i] * nazari[i] ;
	}
	for(i=0 ; i<amali.length ; i++){
		feeAmali[i] = vahedAmali[i] * amali[i] ;
	}
	
	/*Jamee nazari va amali har term*/
	for(i=0 ; i<nazari.length ; i++){
		fee[i] = feeAmali[i] + feeNazari[i] ;
	}
	
	/*Jamee kol*/
	for(i=0 ; i<fee.length ; i++){
		total += fee[i] ;
	}
	total = total + karamooz ;
	
}

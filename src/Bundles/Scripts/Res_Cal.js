const Calculation = () => {
	let band1 = document.getElementById("band1_a").value;
	let band2 = document.getElementById("band2_a").value;
	let band3 = document.getElementById("band3_a").value;
	let torclr = document.getElementById("band4_a").value;

	let a;
	let b;
	let m;
	let t;

	//Band 1

	if (band1 === "black" || band1 === "Black" || band1 === "BLACK") {
		a = 0;
		a *= 10;
	} else if (band1 === "brown" || band1 === "Brown" || band1 === "BROWN") {
		a = 1;
		a *= 10;
	} else if (band1 === "red" || band1 === "Red" || band1 === "RED") {
		a = 2;
		a *= 10;
	} else if (band1 === "orange" || band1 === "Orange" || band1 === "ORANGE") {
		a = 3;
		a *= 10;
	} else if (band1 === "yellow" || band1 === "Yellow" || band1 === "YELLOW") {
		a = 4;
		a *= 10;
	} else if (band1 === "green" || band1 === "Green" || band1 === "GREEN") {
		a = 5;
		a *= 10;
	} else if (band1 === "blue" || band1 === "Blue" || band1 === "BLUE") {
		a = 6;
		a *= 10;
	} else if (band1 === "violet" || band1 === "Violet" || band1 === "VIOLET") {
		a = 7;
		a *= 10;
	} else if (band1 === "grey" || band1 === "Grey" || band1 === "GREY") {
		a = 8;
		a *= 10;
	} else if (band1 === "gray" || band1 === "Gray" || band1 === "GRAY") {
		a = 8;
		a *= 10;
	} else if (band1 === "white" || band1 === "White" || band1 === "WHITE") {
		a = 9;
		a *= 10;
	} else {
		document.getElementById("res").innerHTML = "Invalid";
	}

	// Band 2

	if (band2 === "black" || band2 === "Black" || band2 === "BLACK") {
		b = 0;
	} else if (band2 === "brown" || band2 === "Brown" || band2 === "BROWN") {
		b = 1;
	} else if (band2 === "red" || band2 === "Red" || band2 === "RED") {
		b = 2;
	} else if (band2 === "orange" || band2 === "Orange" || band2 === "ORANGE") {
		 b = 3;
	} else if (band2 === "yellow" || band2 === "Yellow" || band2 === "YELLOW") {
		 b = 4;
	} else if (band2 === "green" || band2 === "Green" || band2 === "GREEN") {
		 b = 5;
	} else if (band2 === "blue" || band2 === "Blue" || band2 === "BLUE") {
		 b = 6;
	} else if (band2 === "violet" || band2 === "Violet" || band2 === "VIOLET") {
		 b = 7;
	} else if (band2 === "grey" || band2 === "Grey" || band2 === "GREY") {
		b = 8;
	} else if (band2 === "gray" || band2 === "Gray" || band2 === "GRAY") {
		b = 8
	} else if (band2 === "white" || band2 === "White" || band2 === "WHITE") {
		b = 9;
	} else {
		document.getElementById("res").innerHTML = "Invalid";
	}

	//Band 3

	if (band3 === "black" || band3 === "Black" || band3 === "BLACK") {
		m = 1;
	} else if (band3 === "brown" || band3 === "Brown" || band3 === "BROWN") {
		m = 10;
	} else if (band3 === "red" || band3 === "Red" || band3 === "RED") {
		m = 100;
	} else if (band3 === "orange" || band3 === "Orange" || band3 === "ORANGE") {
		m = 1000;
	} else if (band3 === "yellow" || band3 === "Yellow" || band3 === "YELLOW") {
		m = 10000;
	} else if (band3 === "green" || band3 === "Green" || band3 === "GREEN") {
		m = 100000;
	} else if (band3 === "blue" || band3 === "Blue" || band3 === "BLUE") {
		m = 1000000;
	} else if (band3 === "violet" || band3 === "Violet" || band3 === "VIOLET") {
		m = 10000000;
	} else if (band3 === "grey" || band3 === "Grey" || band3 === "GREY" || band3 === "gray" || band3 === "Gray" || band3 === "GRAY") {
		m = 100000000;
	} else if (band3 === "white" || band3 === "White" || band3 === "WHITE") {
		m = 1000000000;
	} else if (band3 === "gold" || band3 === "Gold" || band3 === "GOLD") {
		m = 0.1;
	} else if (band3 === "silver" || band3 === "Silver" || band3 === "SILVER") {
		m = 0.01;
	} else {
		document.getElementById("res").innerHTML = "NaN";
	}

	let res = (a + b) * m;
	document.getElementById("res").innerHTML = res + "&#8486;";

	//Tolerance

    if (torclr === "brown" || torclr === "Brown" || torclr === "BROWN") {
		t = 1;
	} else if (torclr === "red" || torclr === "Red" || torclr === "RED") {
		t = 2;
	} else if (torclr === "green" || torclr === "Green" || torclr === "GREEN") {
		t = 0.5;
	} else if (torclr === "blue" || torclr === "Blue" || torclr === "BLUE") {
		t = 0.25;
	} else if (torclr === "violet" || torclr === "Violet" || torclr === "VIOLET") {
		t = 0.1;
	} else if (torclr === "grey" || torclr === "Grey" || torclr === "GREY" || torclr === "gray" || torclr === "Gray" || torclr === "GRAY") {
		t = 0.05;
	} else if (torclr === "gold" || torclr === "Gold" || torclr === "GOLD") {
		t = 5;
	} else if (torclr === "silver" || torclr === "Silver" || torclr === "SILVER") {
		t = 10;
	} else {
		document.getElementById("restor").innerHTML = "NaN";
	}

	document.getElementById("restor").innerHTML = "&#177; " + t + "%"; 
}

export default Calculation;
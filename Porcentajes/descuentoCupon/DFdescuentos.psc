Proceso main
	Definir v3r4n0,bu3nF1n,n4v1d4d Como Caracter;
	Definir compra,descuento,resultado Como Real;
	Definir cupon Como Caracter;
	Escribir 'Cual es el monto de la compra?';
	Leer compra;
	Escribir 'Elegiste un excelnte producto!';
	Escribir 'Si tienes un cupon escribe el codigo';
	Leer cupon;
	Si cupon='v3r4n0' Entonces
		descuento <- compra*.15;
		resultado <- compra-descuento;
		Escribir 'Tu compra con cupon es $',resultado;
	SiNo
		Si cupon='bu3nF1n' Entonces
			descuento <- compra*.30;
			resultado <- compra-descuento;
			Escribir 'Tu compra con cupon es $',resultado;
		SiNo
			Si cupon='n4v1d4d' Entonces
				descuento <- compra*.25;
				resultado <- compra-descuento;
				Escribir 'Tu compra con cupon es $',resultado;
			SiNo
				Escribir 'Digita un codigo valido';
			FinSi
		FinSi
	FinSi
FinProceso



function sumar(x1, x2){
	return x1 + x2;
}

function restar(x1, x2){
	return x1 - x2;
}

function multiplicar(x1, x2){
	return x1 * x2;
}

function dividir(x1, x2){
	if(x2==0)
	{
		console.log("No se puede dividir entre 0");
	}
	else{
		return x1 / x2;
	}
}

exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
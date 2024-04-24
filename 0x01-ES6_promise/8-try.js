export default function divideFunction(numerator, denominator){
	if (denominator === 0) {
		throw Error('can not divide by 0');

	}else{
	return numerator/denominator
	}
}

let leftOff = 0,
	topOff = 0;

function move(){
	if(leftOff < 200 && topOff <= 0){
		$('#one').offset({
			left: leftOff++
		});
	}else if(leftOff >= 200 && topOff < 200){
		$('#one').offset({
			top: topOff++
		});
	}else if(leftOff > 0 && topOff >= 200){
		$('#one').offset({
			left: leftOff--
		});
	}else if(leftOff <= 0 && topOff > 0){
		$('#one').offset({
			top: topOff--
		});
	}
}

setInterval(move, 10);
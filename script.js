let leftOff = 0,
	topOff = 0,
	amount = 0,
	speed = 200,
	intId;

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

intId = setInterval(move, speed);

$('#one').click(function(event){
	if(amount === 10){
		clearInterval(intId);
		$('#one').text('Вы выиграли');
		return;
	}else{
		speed -= 25;
		amount++;
		clearInterval(intId);
		intId = setInterval(move, speed);
		$('#one').text(amount);
	}
});
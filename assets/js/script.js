var waterAmount = document.querySelector('.water-amount');
var waterPercentage = document.querySelector('.water-percentage');
var waterQuantity = document.querySelector('.water-quantity');
var waterFilled = document.querySelector('.water-filled');
var bottle = document.querySelectorAll('.bottle');

bottle.forEach(function(element) {
	var percent = element.dataset.quantity;
	var number = element.dataset.num;	
	element.addEventListener('click', function() {
		var a = 2;
		waterAmount.innerHTML = a - number;
		waterPercentage.innerHTML = percent + '%';
		waterQuantity.style.height = (100 - percent) + '%';
		waterFilled.style.height = percent + '%';
		element.classList.add('bgColor');
	})
})
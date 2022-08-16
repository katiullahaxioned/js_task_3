window.addEventListener("load", function () {
  var waterAmount = document.querySelector(".water-amount");
  var waterPercentage = document.querySelector(".water-percentage");
  var waterQuantity = document.querySelector(".water-quantity");
  var waterFilled = document.querySelector(".water-filled");
  var bottle = document.querySelectorAll(".bottle");

  bottle.forEach(function (element, index) {
    var percent = element.dataset.quantity;
    var number = element.dataset.num;

    element.addEventListener("click", function () {
      for (var i = 0; i < bottle.length; i++) {
        bottle[i].classList.remove("bgColor");
      }

      var a = 2;
      var arr = [];
      waterAmount.innerHTML = a - number;
      waterPercentage.innerHTML = percent + "%";
      waterQuantity.style.height = 100 - percent + "%";
      waterFilled.style.height = percent + "%";

      if (arr.indexOf(index) === -1) {
        arr.push(index);
      }

      for (var i = 0; i <= arr[0]; i++) {
        bottle[i].classList.add("bgColor");
      }
    });
  });
});
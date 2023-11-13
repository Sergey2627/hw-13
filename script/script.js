var myArray = ["Пункт 1", "Пункт 2", "Пункт 3"];

var myList = document.createElement('ul');

for (var i = 0; i < myArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = myArray[i];
    myList.appendChild(listItem);
}

document.body.appendChild(myList);
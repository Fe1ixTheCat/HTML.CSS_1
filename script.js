//скрипт выводит картинку
var image = "images/container.png";
var source = document.getElementsByClassName("catalog-img");
for (let i = 0; i < source.length; i++) {
  source[i].src = image;
};

//скрипт выводит заголовок
var title = "Как работает и зачем необходим стабилизатор напряжения";
var comment = document.getElementsByTagName('h4');
console.log(comment);
for (let i = 0; i < comment.length; i++) {
  comment[i].innerHTML = title;
};

//скрипт выводит параграф
var text = "Стабилизаторы ЭНЕРГОТЕХ - это устройства, которые разработаны с учетом реальных условий отечественных сетей электропитания, и способны удовлетворить требования самого изысканного потребителя.";
var content = document.getElementsByClassName('text');
console.log(content);
for (let i = 0; i < content.length; i++) {
  content[i].innerHTML = text;
}

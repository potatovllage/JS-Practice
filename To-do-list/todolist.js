let list = [];
let inputButton = document.querySelector(".button");
inputButton.addEventListener("click", addItem);

function addItem() {
    let item = document.querySelector(".Todo").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector(".Todo").value = "";
        document.querySelector(".Todo").focus();
    }

    showList();
}
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

function showList() {
    let list = "<ul>"
    for (let i = 0; i < itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".tolist").innerHTML = list;

    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}
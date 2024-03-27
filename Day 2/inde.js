function addCustomer() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var membership = document.getElementById("membership").value;

    var list = document.getElementById("list");
    var listItem = document.createElement("li");
    listItem.innerHTML = "<strong>Name:</strong> " + name + ", <strong>Contact:</strong> " + contact + ", <strong>Membership:</strong> " + membership;
    list.appendChild(listItem);

    clearForm();
}

function deleteCustomer() {
    var list = document.getElementById("list");
    if (list.childNodes.length > 0) {
        list.removeChild(list.lastChild);
    }
}

function clearForm() {
    document.getElementById("customerForm").reset();
}


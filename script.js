function addToWaitingList() {
    const input = document.getElementById("nameInput");
    const name = input.value.trim();

    if (name === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    const list = JSON.parse(localStorage.getItem("waitingList")) || [];
    list.push(name);
    localStorage.setItem("waitingList", JSON.stringify(list));

    alert("Terima kasih, namamu sudah masuk ke waiting list!");
    input.value = "";
}

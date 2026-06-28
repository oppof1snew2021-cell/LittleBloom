// ===============================
// 📈 Little Bloom - Weight History
// ===============================

function saveWeight() {

    const input = document.getElementById("weight");

    const value = input.value;

    if (value === "") {
        alert("🌷 Hãy nhập cân nặng trước nha!");
        return;
    }

    let history =
        JSON.parse(localStorage.getItem("weightHistory")) || [];

    history.unshift({
        date: new Date().toLocaleDateString("vi-VN"),
        weight: value
    });

    localStorage.setItem(
        "weightHistory",
        JSON.stringify(history)
    );

    localStorage.setItem("weight", value);

    input.value = value;

    loadHistory();

    alert("🌷 Đã lưu cân nặng!");
}

function loadHistory() {

    const box = document.getElementById("history");

    if (!box) return;

    let history =
        JSON.parse(localStorage.getItem("weightHistory")) || [];

    if (history.length === 0) {

        box.innerHTML =
        "<p>Chưa có dữ liệu 🌱</p>";

        return;
    }

    box.innerHTML = "";

    history.forEach(item => {

        box.innerHTML += `
            <p>📅 ${item.date} — <b>${item.weight} kg</b></p>
        `;

    });

}

window.onload = function(){

    loadHistory();

}

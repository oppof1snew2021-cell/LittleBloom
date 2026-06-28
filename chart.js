// =========================
// 📈 Little Bloom Chart v0.3
// =========================

let history =
JSON.parse(localStorage.getItem("weightHistory")) || [];

function saveWeight(){

    const value =
    document.getElementById("weight").value;

    if(value==="") return;

    history.push({

        date:new Date().toLocaleDateString(),

        weight:value

    });

    localStorage.setItem(
        "weightHistory",
        JSON.stringify(history)
    );

    localStorage.setItem(
        "weight",
        value
    );

    alert("🌷 Đã lưu cân nặng!");

}

function showHistory(){

    console.log(history);

}

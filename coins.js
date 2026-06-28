// =========================
// 🌸 Bloom Coins
// =========================

let coins =
Number(localStorage.getItem("coins")) || 0;

function addCoins(num){

    coins += num;

    localStorage.setItem(
        "coins",
        coins
    );

}

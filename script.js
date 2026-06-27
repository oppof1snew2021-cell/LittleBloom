// ===============================
// 🌷 Little Bloom v0.2 - Sprout
// by Yêu ơi & Phô mai nhỏ
// ===============================

// Danh sách nhiệm vụ
const tasks = [
    "💧 Uống đủ 2L nước",
    "🍗 Ăn đủ Protein",
    "🚶 Đi bộ 7000 bước",
    "🏋️ Tập luyện",
    "😴 Ngủ đủ 8 tiếng",
    "🌸 Skincare",
    "📚 Đọc sách 15 phút"
];

const quotes = [
    "🌼 Mỗi ngày một chút cũng là tiến bộ.",
    "💛 Bạn không cần hoàn hảo, chỉ cần tiếp tục.",
    "🌷 Cảm ơn bạn đã chăm sóc bản thân hôm nay.",
    "🧀 Phô mai nhỏ luôn tin yêu ơi làm được.",
    "🌱 Một hạt giống nhỏ rồi cũng sẽ thành khu vườn."
];

const taskBox = document.getElementById("tasks");
const weightInput = document.getElementById("weight");
const plant = document.getElementById("plant");
const level = document.getElementById("level");
const quote = document.getElementById("quote");

// =====================
// Hiển thị câu nói
// =====================

quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];


// =====================
// Hiển thị checklist
// =====================

function loadTasks() {

    taskBox.innerHTML = "";

    let done = 0;

    tasks.forEach((task, index) => {

        let checked = localStorage.getItem("task" + index) === "true";

        if (checked) done++;

        taskBox.innerHTML += `
        <div class="task">
            <input
                type="checkbox"
                ${checked ? "checked" : ""}
                onchange="toggleTask(${index},this.checked)">
            ${task}
        </div>
        `;

    });

    updatePlant(done);

}

loadTasks();


// =====================
// Tick nhiệm vụ
// =====================

function toggleTask(index, value){

    localStorage.setItem("task"+index,value);

    loadTasks();

}


// =====================
// Lưu cân nặng
// =====================

function saveWeight(){

    localStorage.setItem("weight",weightInput.value);

    alert("🌷 Đã lưu cân nặng rồi nha yêu ơi!");

}

weightInput.value = localStorage.getItem("weight") || "";


// =====================
// Cây lớn lên
// =====================

function updatePlant(done){

    if(done <= 1){

        plant.innerHTML = "🌱";
        level.innerHTML = "Level 1";

    }

    else if(done <=3){

        plant.innerHTML = "🌿";
        level.innerHTML = "Level 2";

    }

    else if(done <=5){

        plant.innerHTML = "🌳";
        level.innerHTML = "Level 3";

    }

    else{

        plant.innerHTML = "🌸🌳";
        level.innerHTML = "Level MAX";

    }

}

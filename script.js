document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");

    function styleButton(button) {
        button.style.border = "none";
        button.style.padding = "8px 15px";
        button.style.fontSize = "16px";
        button.style.backgroundColor = "#007BFF";
        button.style.color = "white";
        button.style.cursor = "pointer";
        button.style.borderRadius = "10px";
        button.style.transition = "0.3s ease-in-out";
    }

    styleButton(btn1);
    styleButton(btn2);

    btn1.addEventListener("mouseenter", () => btn1.style.backgroundColor = "#0056b3");
    btn1.addEventListener("mouseleave", () => btn1.style.backgroundColor = "#007BFF");

    btn2.addEventListener("mouseenter", () => btn2.style.backgroundColor = "#d9534f");
    btn2.addEventListener("mouseleave", () => btn2.style.backgroundColor = "#007BFF");

    function changeColor() {
        btn1.style.backgroundColor = "red";
        btn2.style.backgroundColor = "red";
    }

    btn1.addEventListener("click", function (event) {
        event.preventDefault();
        changeColor();
    });

    btn2.addEventListener("click", function (event) {
        event.preventDefault();
        changeColor();
    });

    const landing = () => {
        const element = document.createElement("div");
        element.classList.add("landing");

        element.innerHTML = `
            <div class="inputan">
                <label for="nama">Masukkan Namamu:</label>
                <input type="text" name="nama" id="nama" placeholder="Masukkan Nama">

                <label for="email">Masukkan Emailmu:</label>
                <input type="email" name="email" id="email" placeholder="Tulis email">

                <label for="password">Masukkan Password:</label>
                <input type="password" name="password" id="password" placeholder="Tulis Password">
            </div>

            <div class="tombolan">
                <button class="btn" data-button="register">Register</button>
                <button class="btn" data-button="Login">Login</button>
                <button class="btn" data-button="Forgot">Forgot</button>
            </div>
        `;

        if (container) {
            container.appendChild(element);
        } else {
            console.error("Elemen .container tidak ditemukan di dalam dokumen.");
        }
    };

    landing();

    document.querySelector('[data-button="register"]').addEventListener("click", function (event) {
        event.preventDefault();
        const nama = document.getElementById("nama").value;
        if (nama.trim() === "") {
            alert("Silakan masukkan nama terlebih dahulu.");
        } else {
            alert(`Selamat datang, ${nama}! Pendaftaran berhasil.`);
        }
    });

    document.querySelector('[data-button="Login"]').addEventListener("click", function (event) {
        event.preventDefault();
        alert("Fitur Login belum tersedia.");
    });

    document.querySelector('[data-button="Forgot"]').addEventListener("click", function (event) {
        event.preventDefault();
        let userEmail = prompt("Masukkan email yang terdaftar:");
        if (userEmail) {
            alert(`Link reset password telah dikirim ke ${userEmail}`);
        }
    });
});

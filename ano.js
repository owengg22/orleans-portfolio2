document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen tombol dan input
    const registerBtn = document.querySelector('[data-button="register"]');
    const loginBtn = document.querySelector('[data-button="Login"]');
    const forgotBtn = document.querySelector('[data-button="Forgot"]');
    const facebookBtn = document.getElementById("btn1");
    const namaInput = document.getElementById("nama");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Fungsi Validasi Form
    function validateForm() {
        if (namaInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Semua kolom harus diisi!");
            return false;
        }
        return true;
    }

    // Event Listener untuk tombol Register
    registerBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert(`Selamat datang, ${namaInput.value}! Pendaftaran berhasil.`);
            // Bisa diarahkan ke halaman lain jika perlu
        }
    });

    // Event Listener untuk tombol Login
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Fitur Login belum tersedia.");
    });

    // Event Listener untuk tombol Forgot Password
    forgotBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let userEmail = prompt("Masukkan email yang terdaftar:");
        if (userEmail) {
            alert(`Link reset password telah dikirim ke ${userEmail}`);
        }
    });

    // Event Listener untuk tombol Facebook Login
    facebookBtn.addEventListener("click", function (event) {
        event.preventDefault();
        this.style.backgroundColor = "blue";
        this.style.color = "white";
        alert("Login Facebook tidak tersedia saat ini.");
    });

    // Efek Hover pada Tombol
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.opacity = "0.7";
        });
        button.addEventListener("mouseout", function () {
            this.style.opacity = "1";
        });
    });
});

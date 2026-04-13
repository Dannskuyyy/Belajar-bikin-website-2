document.getElementById("loginbtn").addEventListener("click", function(e) {
    e.preventDefault

    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let notif = document.getElementById("notif");

    if (username === "" || password === "") {
       notif.style.display = "block";
       notif.innerText = "Isi username dan password!!!";
    }
    else {
        notif.style.display = "block";
        notif.style.color = "green";
        notif.innerText = "Login berhasil"
    }
});


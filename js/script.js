function changeLanguage() {
    let language = document.getElementById("language").value;
    if (language === "es") {
        window.location.href = "es/index_es.html";
    } else if (language === "en"){
        window.location.href = "../index.html";
    }
}
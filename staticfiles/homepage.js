function downloadResume() {
    var fileId = "1trHpL0WtJz6fMoFYm8yH2Yx3dhNZ8T2T";
    var downloadLink = "https://drive.google.com/uc?export=download&id=" + fileId;
    var link = document.createElement("a");
    link.href = downloadLink;
    link.click();
}

if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "no";
    }

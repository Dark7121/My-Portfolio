function downloadResume() {
    var fileId = "1l53ytc0GO_7ZK3197i6uoHix2bhvRSsu";
    var downloadLink = "https://drive.google.com/uc?export=download&id=" + fileId;
    var link = document.createElement("a");
    link.href = downloadLink;
    link.click();
}

if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "no";
    }

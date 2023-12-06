$(document).ready(() => { 
    $('.info').on('submit', () => { 
        return false; 
    }); 
}); 
$('.info').keypress((e) => { 
    if (e.which === 13) { 
        $('.info').submit(); 
        console.log('form submitted'); 
    } 
})

if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "no";
    }
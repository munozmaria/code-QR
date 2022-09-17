let container = document.querySelector('.container');
let qrInput = document.querySelector('.form input');
let qrBotonInput = document.querySelector('.form button');
let qrDowloaderInput = document.querySelector('.qr-code button');
let qrImage = document.querySelector('.qr-code img');


qrBotonInput.addEventListener('click', () => { 
    let qrValue = qrInput.value
    if (!qrValue) {
        return
    } else {
        qrBotonInput.innerHTML = "Génération de code QR...!"
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}` //https://goqr.me/api/

        qrImage.addEventListener("load", () => {
					container.classList.add("active")
					qrBotonInput.innerHTML = "Créer un Code QR"
				})
        
        }
})
window.onload = generate_quote()
const quote = document.querySelector(".quote");
const quote_id = document.querySelector(".quote-id");
const generate_btn = document.querySelector(".generate-btn");


function generate_quote() {
    fetch('https://api.adviceslip.com/advice')

        .then(response => {
            return response.json()
        })

        .then(data => {
            let advice_slip = data.slip

            quote_id.innerHTML = advice_slip.id
            quote.innerHTML = advice_slip.advice
        })
}
generate_quote();
generate_btn.addEventListener('click', generate_quote)
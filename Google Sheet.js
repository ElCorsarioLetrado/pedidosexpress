const scriptURL = 'https://script.google.com/macros/s/AKfycbx0f3xIsQzcF42yiIvZsoMmRr44PWBBoAUFTasvjnrOX_zoIl93NK4RgkXXfh5d6Sdrvw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Gracias por depositar tu confianza en nosotros. Tus datos serán estudiados por elcorsarioletrado.com y en breve recibirás la factura de pago correspondiente a tu pedido. Una notificación llegará a tu Email o número de teléfono en los próximos minutos." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
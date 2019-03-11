new Card({
  form: 'form',
  container: '.card',
  formSelectors: {
    numberInput: 'input[name=number]',
    expiryInput: 'input[name=expiry]',
    expiryInput2: 'input[name=expiry2]',	  
    cvcInput: 'input[name=cvv]',
    nameInput: 'input[name=name]'
  },

  width: 390, // optional — default 350px
  formatting: true,

  placeholders: {
    number: '•••• •••• •••• ••••',
    name: 'Nombre Tarjeta',
    expiry: '••',
	expiry2: '••••',  
    cvc: '•••'
  }
})
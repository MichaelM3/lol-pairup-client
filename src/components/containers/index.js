document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

  const form = document.getElementById('new-gift-form')
  console.log(form)
  const giftUl = document.querySelector('.gift-list')

  form.addEventListener("submit", function(e) {
    e.preventDefault()
  })

  gifts.map(function (gift) {
    giftUl.innerHTML += `<li>${gift.name}</li>`
  })

  // const inputTag = form.querySelector("#gift-name-input")
  // const userInput = inputTag.value
  // const li = document.createElement('li')
  // li.innerText = inputTag.value
  // giftUl.appendChild(li)

})

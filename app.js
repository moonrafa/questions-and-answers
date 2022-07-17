/*
const buttons = document.querySelectorAll('.question-btn')

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text')
  })
})
*/

const questions = document.querySelectorAll('.question')
questions.forEach(function (question) {
  //console.log(question)
  const button = question.querySelector('.question-btn')
  //console.log(button)
  button.addEventListener('click', function () {
    questions.forEach(function (item) {
      console.log(item)
      if (item !== question) {
        item.classList.remove('show-text')
      }
    })
    question.classList.toggle('show-text')
  })
})

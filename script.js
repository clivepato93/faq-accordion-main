const buttons = document.querySelectorAll('button');
// const sideBtns = document.querySelectorAll('.shrink-0')
buttons.forEach(button=>{
    button.addEventListener('click',function(e){
        e.preventDefault()
        const sideBtnContainer = button.firstElementChild
        const plus = sideBtnContainer.firstElementChild
        const minus = sideBtnContainer.lastElementChild
        plus.classList.toggle('block')
        plus.classList.toggle('hidden')
        minus.classList.toggle('hidden')
        minus.classList.toggle('block')
       
        button.nextElementSibling.classList.toggle('hidden')
        button.nextElementSibling.classList.toggle('block')

    })
})
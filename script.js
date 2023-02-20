const container = document.querySelector('.container')
const search = document.querySelector('.button .search-btn')
const submit = document.querySelector('.button .submit-btn')
const history = document.querySelector('.history')

const library = []

submit.addEventListener('click',()=>{

    var textBox = document.querySelector('.text-box input')
    var text = textBox.value

    if(text===''){
        return
    }else{
        alert(`"${text}" saved`)
        library.push(text)

        const newQuestion = document.createElement('div')
        newQuestion.classList.add('history-questions')

        const smsIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        smsIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        smsIcon.setAttribute('viewBox', '0 0 512 512')
        smsIcon.innerHTML = '<path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>'

        const question = document.createElement('div')
        question.classList.add('question')
        question.textContent = text

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')

        const deleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        deleteIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        deleteIcon.setAttribute('viewBox', '0 0 448 512')
        deleteIcon.innerHTML = '<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>'

        newQuestion.appendChild(smsIcon)
        newQuestion.appendChild(question)
        newQuestion.appendChild(deleteBtn)

        deleteBtn.appendChild(deleteIcon)

        history.appendChild(newQuestion)

        history.style.flexDirection = 'column-reverse'

    }
    textBox.value = ''
})


// search.addEventListener('click',()=>{

//     if(text===''){
//         return
//     }else if(library.includes(text)){
//         container.style.height = '675px'
//         history.style.display = 'block'
//         history.classList.add('fadeIn')
//     }

//     history.style.display = ''
//     history.classList.remove('fadeIn')
//     container.style.height = '675px'
// })


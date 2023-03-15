const container = document.querySelector('.container')
const historyBtn = document.querySelector('.button .history-btn')
const submitBtn = document.querySelector('.button .submit-btn')
const history = document.querySelector('.history')
var textInput = document.querySelector('.text-box textarea')
const textBox = document.querySelector('.text-box')
const library = []


submitBtn.addEventListener('click', () => {

    var text = textInput.value
    text = text.replace(/[^\w ]/g, '')

    if (text === '') {
        return
    } else if (!library.includes(text)) {

        library.push(text)

        const createQuestion = async()=>{

            let response = await fetch('http://localhost:8089/questions/list')
            let response2 = await fetch('http://localhost:8089/questions/create',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question: text
                })
            })
        }

        createQuestion()

        var newQuestion = document.createElement('div')
        newQuestion.classList.add('history-questions')

        const smsIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        smsIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        smsIcon.setAttribute('viewBox', '0 0 512 512')
        smsIcon.innerHTML = '<path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>'

        const question = document.createElement('div')
        question.classList.add('question')
        question.textContent = text

        var deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')

        const deleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        deleteIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        deleteIcon.setAttribute('viewBox', '0 0 448 512')
        deleteIcon.innerHTML = '<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>'

        newQuestion.appendChild(smsIcon)
        newQuestion.appendChild(question)
        newQuestion.appendChild(deleteBtn)

        deleteBtn.appendChild(deleteIcon)

        

        newQuestion.addEventListener('mouseover',()=>{

            deleteBtn.addEventListener('click',()=>{
                newQuestion.remove()
                const index = library.indexOf(text)
                if(index!==-1){
                    library.splice(index,1)
                }
            })
        })

        history.appendChild(newQuestion)

        history.insertBefore(newQuestion, history.firstChild)

        textInput.value = 'Saved'

    } else {
        textInput.value = 'Already asked'
    }

    textInput.style.transition = 'opacity 0.5s ease-in-out';
    textInput.style.opacity = 0;

    setTimeout(() => {
        textInput.value = '';
        textInput.style.opacity = 1;
    }, 500);

})

historyBtn.addEventListener('click', () => {

   
    if (history.style.display === 'block') {
        container.style.height = '275px'
        textBox.style.height = '217px'
        textBox.style.transition = '0.6s ease-in'
        history.classList.add('fadeOut')
        setTimeout(() => {
            history.style.display = 'none'
            history.classList.remove('fadeOut')
        }, 500)

    } else {

        container.style.height = '675px'
        textBox.style.height = '117px'
        textBox.style.transition = '0.6s ease-out'
        history.style.display = 'block'
        history.classList.add('fadeIn')
    }



})






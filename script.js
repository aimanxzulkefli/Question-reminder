const container = document.querySelector('.container')
const search = document.querySelector('.button .search-btn')
const submit = document.querySelector('.button .submit-btn')
const history = document.querySelector('.history')
const question = document.querySelector('.question')

const library = []

function newQuestions(text){

    var newLink = document.createElement('a')
    newLink.classList.add('history-questions')

    var newSvg = document.createElement('svg')
    newSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newSvg.setAttribute('viewBox', '0 0 512 512')
    var path = document.createElement('path')
    path.setAttribute('d', 'M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z')
    newSvg.appendChild(path)
    
    var newDiv1 = document.createElement('div')
    newDiv1.classList.add('question')
    newDiv1.textContent = text

    var newDiv2 = document.createElement('div')
    newDiv2.classList.add('question-delete')
    var newButton = document.createElement('button')
    newButton.classList.add('delete-btn')
    var newButtonSvg = document.createElement('svg')
    newSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newSvg.setAttribute('viewBox', '0 0 448 512')
    var path2 = document.createElement('path')
    path2.setAttribute('d', 'M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7')

    newButton.appendChild(newButtonSvg)
    newDiv2.appendChild(newButton)
    newLink.appendChild(newDiv2)
    newLink.appendChild(newDiv1)
    newLink.appendChild(newSvg)
    history.appendChild(newLink)
}

submit.addEventListener('click',()=>{

    var textBox = document.querySelector('.text-box input')
    var text = textBox.value

    if(text===''){
        return
    }else{
        alert(`"${text}" saved`)
        library.push(text)
        newQuestions(text)
        console.log(library)
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


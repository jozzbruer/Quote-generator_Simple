document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.querySelector('.btn')
    const paragraph = document.querySelector('.text') 


    const sentenceList1 = ['A quick Brown fox', 'A slow blue turtle', 'A fast yellow fish']
    const sentenceList2 = ['jumps over','lands on','runs over']
    const sentenceList3 = ['a lazy dog','a smart cat','a sly crow']


    generateBtn.addEventListener('click', () => {
         clear()
         let q = document.createTextNode(generateQuotes())
         paragraph.appendChild(q)
    })
    
    /* Clear function */
    function clear(){
       paragraph.innerHTML =''
    }

    /* This function is for the Quote generation */
    function generateQuotes(){
        /* get a radom index after each click */
        let randomIndex1 = Math.floor( Math.random() * sentenceList1.length)
        let randomIndex2 = Math.floor( Math.random() * sentenceList2.length)
        let randomIndex3 = Math.floor( Math.random() * sentenceList3.length)
        
        let quote = `${sentenceList1[randomIndex1]} ${sentenceList2[randomIndex2]} ${sentenceList3[randomIndex3]} `

        return quote
    }
})  
const sButton = document.querySelector('#submit-button')


sButton.addEventListener('click', whatchaGot)

function whatchaGot() {
    const input = document.querySelector('#translator-input[type=text]')
    console.log(input.value)

    inputValue = input.value

    h1 = document.querySelector('#results')

    lostInEmojiTranslation = document.querySelector('input[name=translation-section]:checked')



    if (input.value === '') {
        window.Notification = "Please Enter Some Info!!"
        console.log('whatchagot null')

    }
    if (lostInEmojiTranslation.value === 'encode') {
        h1.innerHTML = encode(inputValue)
    }
    if (lostInEmojiTranslation.value === 'translate') {
        h1.innerHTML = translate(inputValue)
    }
    if (lostInEmojiTranslation.value === 'madlib') {
        h1.innerHTML = madlib(inputValue)
    }
    if (lostInEmojiTranslation.value === 'search') {
        h1.innerHTML = '';
        // for (let i = 0; i < emojis.length; i++) {
        //     const currentEmo = emojis[i];

        // if (search(currentEmo).name.includes(inputValue)) {
        //     let p = document.createElement(`<p>`)
        //     p.innerHTML = currentEmo.symbol
        // // }
        // if (lostInEmojiTranslation.value === 'search') {

        let tempSearchArr = search(inputValue)
        for (let emo = 0; emo < tempSearchArr.length; emo++) {
            let p = document.createElement("p")
            const element = tempSearchArr[emo];
            p.innerHTML = element.symbol
            h1.appendChild(p)
        }

        //--------------My own work out

        // let searchArr = []
        // let searchArrStr = ''
        // for (let i = 0; i < emojis.length; i++) {
        //     const symbol = emojis[i];

        //     if (symbol.name.includes(inputValue)) {
        //         console.log('symbol approved', symbol)
        //         searchArr.push(symbol.symbol)
        //     }
        // }
        // for (let i = 0; i < searchArr.length; i++) {
        //     const joinMe = searchArr[i];
        //     searchArrStr += joinMe + ' '
        // }
        // h1.innerHTML = searchArrStr

    }

    if (lostInEmojiTranslation.value === 'random') {
        let randoArr = [1, 2, 3, 4]
        switch (randomElement(randoArr)) {
            case 1:
                console.log('case 1')
                lostInEmojiTranslation.value = 'encode'
                whatchaGot();
                break;

            case 2:
                console.log('case 2')
                lostInEmojiTranslation.value = 'translate'
                whatchaGot()
                break;
            case 3:
                console.log('case 3')
                lostInEmojiTranslation.value = 'madlib'
                whatchaGot()
                break;
            case 4:
                console.log('case 4')
                lostInEmojiTranslation.value = 'search'
                whatchaGot()
                break;

            default:
                break;
        }



        // h1.innerHTML = randomElement(inputValue)

    }

    // function unneededcode() {
    //     //  Shouldn't need
    //     // encode = document.querySelector('#encode')

    //     // translate = document.querySelector('#translate')

    //     // madlib = document.querySelector('#madlib')

    //     // search = document.querySelector('#search')

    //     // random = document.querySelector('#random')
}
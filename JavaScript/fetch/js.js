/*
function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src
    document.body.append(script)
    script.onload = () => callback(script)
}
loadScript('test.js', (script) => {
    console.log(`Скрипт ${script.src} загрузился!`)
    test()
})
*/
console.log('Выполняем запрос на сервер...')

setTimeout(() => {
    console.log('Идет подготовка данных...')
    const person = {
        name: 'Максим',
        age: '21',
        height: '185',
    }
    setTimeout(() => {
        person.russian = true
        console.log('Данные получены: ', person)
    }, 2000)
}, 2000)


/////////////////////////////////////////////////////////////////////////////
const ball = document.querySelector('.circle')
const button = document.querySelector('.button_ball')
function ballSizing(x, y, radius, callback) {
    ball.style.width = 0
    ball.style.height = 0
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'

    setTimeout(() => {
        ball.style.width = radius * 2 + 'px'
        ball.style.height = radius * 2 + 'px'

        ball.addEventListener('transitionend', function handler() {
            ball.removeEventListener('transitionend', handler)
            callback(ball)
        })
    }, 0)
}
button.addEventListener('click', () => {
    button.classList.add('animated')
    button.style.backgroundColor = 'red'
    ballSizing(150, 150, 100, (div) => {
        div.classList.add('ball_hello')
        const p = document.createElement('p')
        p.innerHTML = 'Hello, World'
        div.append(p)
    })
})

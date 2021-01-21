const
    canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d')

canvas.width = document.documentElement.clientWidth - canvas.clientLeft * 2
canvas.height = document.documentElement.clientHeight * 9 / 10

/// CODE
const info = document.querySelector('.info')
const color = document.querySelector('#settings-color')
const size = document.querySelector('#settings-size')
const refresh = document.querySelector('#settings-refresh')

const takeColor = () => {
    return color.value
}
const takeSize = () => {
    return size.value
}
refresh.addEventListener('click', () => {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
})
canvas.addEventListener('mousedown', (event) => {
    let trueColor = takeColor()
    let trueSize = takeSize()

    ctx.beginPath()
    ctx.arc(event.pageX - canvas.clientLeft, event.pageY - canvas.clientTop, trueSize / 2, 0, Math.PI * 2)
    ctx.fill()

    const paint = (x, y, color, size) => {
        let trueX = x - canvas.clientLeft
        let trueY = y - canvas.clientTop
        ctx.fillStyle = color
        ctx.strokeStyle = color
        ctx.lineWidth = size
        ctx.lineTo(trueX, trueY)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(trueX, trueY, size / 2, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(trueX, trueY)

        info.innerHTML = `x: ${trueX}
                          y: ${trueY}`
    }
    const onMouseMove = (event) => {
        paint(event.pageX, event.pageY, trueColor, trueSize)
    }
    document.addEventListener('mousemove', onMouseMove)
    document.onmouseup = function () {
        ctx.beginPath()
        document.removeEventListener('mousemove', onMouseMove)
        document.onmouseup = false
    }
})
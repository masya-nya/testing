const
    canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d')

canvas.width = document.documentElement.clientWidth - canvas.clientLeft * 2
canvas.height = document.documentElement.clientHeight * 9 / 10

/// CODE
ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)
const info = document.querySelector('.info')
const color = document.querySelector('#settings-color')
const size = document.querySelector('#settings-size')
const refresh = document.querySelector('#settings-refresh')
const eraser = document.querySelector('#settings-eraser')
const tools = document.querySelector('#settings-tools')
let array = new Array

const takeColor = () => {
    return color.value
}
const takeSize = () => {
    return size.value
}

const componentToHex = (i) => {
    return i.toString(16)
}

const pipetteFunction = (event) => {
    let pipetteColor = `#${componentToHex(ctx.getImageData(event.pageX, event.pageY, 1, 1).data[0])}${componentToHex(ctx.getImageData(event.pageX, event.pageY, 1, 1).data[1])}${componentToHex(ctx.getImageData(event.pageX, event.pageY, 1, 1).data[2])}`
    color.value = pipetteColor
}

eraser.addEventListener('click', () => {
    eraser.classList.toggle('input-active')
    if (eraser.classList.contains('input-active')) {
        canvas.style.cursor = "url('images/eraser.png'), auto"
        size.value = 10
    } else {
        canvas.style.cursor = `url('images/${tools.value}.png'), auto`
    }
})

tools.addEventListener('change', () => {
    if (tools.value === 'pensil') {
        size.value = 2
        if (array.indexOf('painting') === -1) {
            canvas.removeEventListener('click', pipetteFunction)
            canvas.addEventListener('pointerdown', painting)
        }
        canvas.style.cursor = "url('images/pensil.png'), auto"
    } else if (tools.value === 'brush') {
        size.value = 10
        if (array.indexOf('painting') === -1) {
            canvas.removeEventListener('click', pipetteFunction)
            canvas.addEventListener('pointerdown', painting)
        }
        canvas.style.cursor = "url('images/brush.png'), auto"
    } else if (tools.value === 'pipette') {
        canvas.removeEventListener('pointerdown', painting)
        canvas.addEventListener('click', pipetteFunction)
        if (!(array.indexOf('painting') === -1)) {
            array.splice(array.indexOf('painting'), 1)
        }
        canvas.style.cursor = "url('images/pipette.png'), auto"
    }
})

refresh.addEventListener('click', () => {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
})
const painting = (event) => {
    if (array.indexOf('painting') === -1) {
        array.push('painting')
    }
    let trueColor = takeColor()
    let trueSize = takeSize()

    ctx.fillStyle = trueColor
    ctx.strokeStyle = trueColor
    ctx.lineWidth = trueSize

    if (eraser.classList.contains('input-active')) {
        ctx.fillStyle = '#fff'
        ctx.strokeStyle = '#fff'
    }

    ctx.arc(event.pageX - canvas.clientLeft, event.pageY - canvas.clientTop, trueSize / 2, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(event.pageX - canvas.clientLeft, event.pageY - canvas.clientTop)

    const paint = (x, y, size) => {
        let trueX = x - canvas.clientLeft
        let trueY = y - canvas.clientTop

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
        paint(event.pageX, event.pageY, trueSize)
    }

    document.addEventListener('pointermove', onMouseMove)

    document.onpointerup = function () {
        ctx.beginPath()
        document.removeEventListener('pointermove', onMouseMove)
        document.onmouseup = false
    }
}
canvas.addEventListener('pointerdown', painting)

canvas.addEventListener('click', () => {
    console.log(array)
})
document.addEventListener('click', () => {
    if (tools.value === 'pipette') {
        eraser.disabled = true
    } else (
        eraser.disabled = false
    )
})


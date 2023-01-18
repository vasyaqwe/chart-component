const nums = document.querySelectorAll('.animated-num')
const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]
const chartsContainer = document.querySelector('.charts')
generateCharts()

function generateCharts() {
    const maxNum = Math.max(...data.map(item => item.amount))
    chartsContainer.innerHTML = data.map(item => `<div class="chart">
    <div class="chart-rectangle ${item.amount === maxNum && 'maximum'}" style="height: ${Math.floor(item.amount * 2.2)}px; ${item.amount === maxNum ? 'background-color: var(--clr-accent-cyan);' : 'background-color: var(--clr-accent-orange);'} ">
     <div class="tooltip">$${item.amount}</div>
    </div>
     <p class="day">${item.day}</p>
    </div>
    `).join('')
}

nums.forEach(num => {
    const speed = 50
    const animate = () => {
        const value = +num.getAttribute('target-num')
        const data = +num.innerText

        const time = value / speed
        if (data < value) {
            num.innerText = Math.ceil(data + time)
            setTimeout(animate, 1)
        } else {
            num.innerText = value
        }
    }
    animate()
})
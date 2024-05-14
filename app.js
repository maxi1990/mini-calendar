const monthName = document.getElementById('month-name')
const dayName = document.getElementById('day-name')
const dayNum = document.getElementById('day-number')
const yearEl = document.getElementById('year')



const date = new Date()

monthName.innerText = date.toLocaleDateString("es",{
    month: "long"
})

dayName.innerText = date.toLocaleString("es",{
    weekday: "long"
})

dayNum.innerText = date.getDate()

yearEl.innerText = date.getFullYear()
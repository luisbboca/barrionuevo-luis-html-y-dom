const days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']


const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

// const itemList = document.createElement('LI')
// itemList.textContent = 'Lunes'
// daysList.appendChild(itemList)*/
title.innerHTML = 'Interactuando en el HTML -<span> con DOM </span>'


for(const day of days) {
    daysList.innerHTML +=`<li>${day}</li>`
}

// Your code goes here
const heading = document.querySelector('.logo-heading')
heading.addEventListener('mouseover', (event)=> {
    event.currentTarget.style.color = 'blue'
})

const home = document.querySelector('.nav-link')
home.addEventListener('keydown', (e)=> {
    e.currentTarget.style.backgroundColor = "black"
})

const uncontent = document.querySelector('.intro')
uncontent.addEventListener('mouseout', (e) => {
e.currentTarget.style.backgroundColor = 'orange'
})

const happy = document.querySelector('.')

happy.addEventListener('scroll', (e) => {
    e.currentTarget
})

const counter = document.getElementById('num')

let item = document.getElementsByClassName('btn')
let zero = document.getElementsByTagName('h2')[0]

let score = 0;

item[0].addEventListener('click', () => {
score --;
zero.textContent = score;
if (score < 0){
    document.body.style.backgroundColor = 'red'
} else if (score == 0) {
    document.body.style.backgroundColor = 'yellow'
}
})

item[1].addEventListener('click', () => {
    score = 0;
    zero.textContent = score;
    if (score == 0){
        document.body.style.backgroundColor = 'yellow'
    }
    })

    item[2].addEventListener('click', () => {
        score ++
        zero.textContent = score;
        if (score > 0){
            document.body.style.backgroundColor = 'green'
        } else if (score == 0) {
            document.body.style.backgroundColor = 'yellow'
        }
        })


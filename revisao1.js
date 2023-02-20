// let e const
{
    var a = 2
    let b = 3
}
console.log(a)
// console.log(b) causa um erro de escopo

// template string
const produto = 'iPad'
console.log(`${produto} é caro

pois é...`)

// destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l)
console.log(e)
console.log(tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)

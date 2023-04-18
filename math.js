const calcFunc = (x) => {
    return x**4 - 3*(x**3) - 15*(x**2) + 15*x + 50
}

const factors = [1, 2, 5, 10, 25, 50] 

const ans = []

factors.forEach(factor => {
    // if(calcFunc(factor) > 0)
    ans.push(`${factor}: ${calcFunc(factor)}, ${factor*-1}: ${calcFunc(factor*-1)}`)
})

ans.forEach(a => console.log(a))


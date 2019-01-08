

// // multiple arugments
// let add = function(a, b) {
//     return a + b
// }

// let result = add(12, 10)
// console.log(result)

// // Default arguments - undefined assigned in its place
// let getScoreText = function(name = 'Anonymous', score = 0) { // you can assign a default of 0 here, this is legal!
//     return 'Name: ' + name + ' ' + 'Score: ' + score
// }

// let scoreTest = getScoreText()
// console.log(scoreTest)

// coding challenge 

// global scope - getTip
//   local scope - getTip, tipPercent, total
//     local scope - getTip, tipPercent, total, msg // this scope can access all the way up the root tree, not vice versa!

let getTip = function(total, tipPercent = .15) {
    tipPercent = tipPercent * total
    total = total + tipPercent

    if (tipPercent <= .14) {
        let msg = "Damn you a cheap ass!"
        console.log(msg)
    }


    return total
}

let result = getTip(25, .25)
console.log(result)


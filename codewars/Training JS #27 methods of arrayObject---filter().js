function countGrade(scores) {
    let S = scores.filter(score => score === 100)
    let A = scores.filter(score => score < 100 && score >= 90)
    let B = scores.filter(score => score < 90 && score >= 80)
    let C = scores.filter(score => score < 80 && score >= 60)
    let D = scores.filter(score => score < 60 && score >= 0)
    let X = scores.filter(score => score === -1)
    return {S: S.length, A: A.length, B: B.length, C: C.length, D: D.length, X: X.length}
}

console.log(countGrade([50, 60, 70, 80, 90, 100]))
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]))
console.log(countGrade([-1, -1, -1, -1, -1, -1]))

// assertCheck(countGrade([50, 60, 70, 80, 90, 100]), {S: 1, A: 1, B: 1, C: 2, D: 1, X: 0});
// assertCheck(countGrade([65, 75, , 85, 85, 95, 100, 100]), {S: 2, A: 1, B: 2, C: 2, D: 0, X: 0});
// assertCheck(countGrade([-1, -1, -1, -1, -1, -1]), {S: 0, A: 0, B: 0, C: 0, D: 0, X: 6});
//
// Grade
// S: Full
// marks(score = 100)
// Grade
// A: score < 100
// and
// score >= 90
// Grade
// B: score < 90
// and
// score >= 80
// Grade
// C: score < 80
// and
// score >= 60
// Grade
// D: score < 60
// and
// score >= 0
// Grade
// X: score = -1
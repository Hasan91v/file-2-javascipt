// lecture 3 - task 1

let mark = Number(prompt('Enter your mark: '))

if (mark >= 80 && mark <= 100 ){
    document.write(' Your letter Grrade: A+')
} else if (mark >= 70 && mark < 80) {
    document.write('Your letter Grrade: A')
}else if (mark >= 60 && mark < 70) {
    document.write('Your letter Grrade: B')
}else if (mark >= 50 && mark < 60) {
    document.write('Your letter Grrade: C')
}else if (mark >= 40 && mark < 50) {
    document.write('Your letter Grrade: D')
}else if (mark < 40 && mark >= 0) {
    document.write('Your letter Grrade: F')
}else {
    document.write('Wrong Entry')
}
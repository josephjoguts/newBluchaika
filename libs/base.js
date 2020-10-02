class User{
    constructor(fName,lName) {
        this.fName = fName
        this.lName = lName
    }
}
function sayHi(){
    alert(this.fName + " " +this.lName)
}
function counter(){
    let count = 0;
    return function (){
        count++;
        let user = new User(`User${count}`,"ttttt")
        sayHi.call(user)
    }
}
let t = counter();
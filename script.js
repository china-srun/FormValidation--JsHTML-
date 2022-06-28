// let test = 6
// var re = /[0-5]/

// if (re.exec(test)) {
//     console.log("yes")
// }
// else{
//     console.log("no")
// }
function testt(){
    let userName = document.getElementById("username");
    var checkName = /^[a-zA-Z]{6-12}$/

    if (checkName.test(userName.value)) {
        alert("nice")
    }
    else{
        alert("no")
}
}


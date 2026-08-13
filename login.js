const emailList = ["fake@email.com"]
const passwordList = ["111"]

function validateUserInput() {
    const inputName = document.getElementById('usernameInput').value
    const inputPassword = document.getElementById('passwordInput').value

    if (emailList.includes(inputName)) {
        const emailTag = emailList.indexOf(inputName)
        if (inputPassword === passwordList[emailTag]) {
            window.location.href = "home.html"
            alert("Login successful.")
        } else {
            alert("Password is incorrect.")
        }
    } else {
        alert("Email does not exist.")
    }
}
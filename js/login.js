async function login() {
    let email = document.getElementById("email").value
    let auth = document.getElementById("auth").value
    let pass = document.getElementById("pass").value

    // Check if auth code was never entered
    if (auth == "") {
        auth = "mfanotenabled"
    }

    let data = await fetch(http0+`Login/${email}/${auth}/${pass}`)
    let body = await data.text()
    let jsdata = JSON.parse(body)
    let jsdata2 = JSON.parse(jsdata)

    document.getElementById("warningmessage").style.display = "block"
    document.getElementById("warningmessage").innerText = jsdata2.Message
    setTimeout(closewarning, 2000);

    // Set token to localstorage
    localStorage.setItem("udips", jsdata2.Data)
    localStorage.setItem("udips_email", email)
}

async function closewarning() {
    document.getElementById("warningmessage").style.display = "none"
}

async function register() {
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    let data = await fetch(http0+`Create/${email}/${pass}`)
    let body = await data.text()
    if (body == "-") {
        document.getElementById("warningmessage").style.display = "block"
        document.getElementById("warningmessage").innerHTML = "Konto finnes fra før!"
    } else {
        document.getElementById("warningmessage").style.display = "block"
        document.getElementById("warningmessage").innerHTML = "Konto har blitt opprettet du kan nå logge inn"
    }
    setTimeout(closewarning, 2000);

    // Set token to localstorage
    localStorage.setItem("udips_email", email)
}

async function closewarning() {
    document.getElementById("warningmessage").style.display = "none"
}
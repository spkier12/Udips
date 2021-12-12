let http0 = "https://api.ulrik.live:4001/"

// Check if token is valid if not return to login page
validate()
async function validate() {
    try {
        console.log("Checking token...")
        let datavalidate = await fetch(`${http0}Validate/${localStorage.getItem("udips")}`)
        let bodyvalidate = await datavalidate.text()
        let dataparse = JSON.parse(bodyvalidate)
        let dataparse2 = JSON.parse(dataparse)
        console.log(dataparse2.Data)
        if (dataparse2.Data == "") {
            document.getElementById("warningmessage").innerText = "Du har blitt logget ut\npga sikkerhet login igjen om 5 sekunder!"
            location.href = "./login.html"
        }
    } catch {
            document.getElementById("warningmessage").innerText = "Du har blitt logget ut\npga sikkerhet login igjen om 5 sekunder!"
            location.href = "./login.html"
    }
    
}
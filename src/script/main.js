function lineCount(){
    const textValue = document.getElementById("textArea").value
    document.getElementById("lineCount").textContent = textValue.split("\n").length
}

function exclude() {
    document.getElementById("textArea").value = ""
    check()
    lineCount()
}

function center() {
    document.getElementById("textArea").style.textAlign = "center"
    check()
    lineCount()
}

function right() {
    document.getElementById("textArea").style.textAlign = "right"
    check()
    lineCount()
}

function left() {
    document.getElementById("textArea").style.textAlign = "left"
    check()
    lineCount()
}

function check() {
    const textValue = document.getElementById("textArea").value

    document.getElementById("wordCount").textContent = textValue.length
    
}
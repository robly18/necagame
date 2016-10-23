
var _cnsl = null;
function getCnsl() {
    if (!_cnsl) _cnsl = document.getElementById("cnsl");
    if (!_cnsl) alert("ERROR: Tried to access console before it existed!");
    return _cnsl;
}

function unsafeGetCommand() {
    let txt = document.getElementById("command").value;
    document.getElementById("command").value = "";
    return txt;
}

function safeGetCommand() {
    return unsafeGetCommand()
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function unsafeInsertText(txt) {
    let cnsl = getCnsl();
    cnsl.innerHTML += "<p class=\"console\">" + txt + "</p>";
    cnsl.scrollTop = cnsl.scrollHeight;
}

function submitText() {
    unsafeInsertText("USER> " + safeGetCommand());
    return false;
}


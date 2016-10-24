
var _cnsl = null;
function getCnsl() {
    if (!_cnsl) _cnsl = document.getElementById("cnsl");
    if (!_cnsl) alert("ERROR: Tried to access console before it existed!");
    return _cnsl;
}

function escape(txt) {
    return txt
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function unsafeGetCommand() {
    let txt = document.getElementById("command").value;
    document.getElementById("command").value = "";
    return txt;
}

function safeGetCommand() {
    return escape(unsafeGetCommand())
}

function unsafeInsertText(txt, style) {
    let cnsl = getCnsl();
    if (!style) style = 'console';
    cnsl.innerHTML += "<p class=\"" + style + "\">" + txt + "</p>";
    cnsl.scrollTop = cnsl.scrollHeight;
}

function safeInsertText(txt, style) {
    unsafeInsertText(escape(txt), style)
}

var log = safeInsertText;

var _blocked = true;
function blockConsole() {_blocked = true;};
function unblockConsole() {_blocked = false;};

function submitText() {
    if (_blocked) return false;
    let txt = safeGetCommand();
    if (txt) {
        unsafeInsertText("USER> " + txt);
        act(txt);
    }
    return false;
}


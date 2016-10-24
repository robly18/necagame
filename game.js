
var actFunc = null;

log('NASA HACKING SIM ON STANDBY');
log('PLEASE TYPE "start" TO BOOT SYSTEM UP');
unblockConsole();

actFunc = function(txt) {
    if (txt == 'start') {
        blockConsole();
        logDelayFunc('COMMAND RECOGNIZED. SYSTEM INITIALIZING...', 4000,
        logDelayFunc('WELCOME. THE SYSTEM IS UP AND RUNNING, AND YOU HAVE BEEN GIVEN ROOT ACCESS.', 2000,
        logDelayFunc('WHAT WOULD YOU LIKE TO DO?', 1500,
        logDelayFunc('[WRITE "help" FOR ASSISTANCE]', 0,
        unblockConsole))))(); //i feel remorse for my actions;
        actFunc = bootedUp;
    } else {
        log('UNRECOGNIZED COMMAND. BOOT UP THE SYSTEM BEFORE INTERVENTION');
    }
}

function bootedUp(txt) {
    if (txt == 'help') {
        blockConsole();
        logDelayFunc('LOADING HELP DOCUMENT...', 3000,
        logDelayFunc('AVAILABLE COMMANDS:', 2000,
        logDelayFunc('help', 800,
        logDelayFunc('pascalzim', 800,
        logDelayFunc('hackage', 800,
        logDelayFunc('appstore', 800,
        logDelayFunc('quit', 800,
        logDelayFunc('skip', 0,
        unblockConsole))))))))();
    } else if (txt == 'pascalzim') {
        log('ERROR: YOUR COPY OF PASCALZIM IS FAULTY. REASON: USES PASCAL.');
    } else if (txt == 'hackage') {
        log('ERROR: YOU DON\'T HAVE hackage INSTALLED! INSTALL IT BY RUNNING "hackage install hackage".');
    } else if (txt == 'appstore') {
        log('ERROR: NOT A FAULTY ANDROID');
    } else if (txt == 'playstore') {
        log('ERROR: NOT AN ANDROID');
    } else if (txt == 'quit') {
        log('THERE IS NO ESCAPE', 'ominous');
    } else if (txt == 'what') {
        log('NOTHING.');
    } else if (txt == 'skip') {
        blockConsole()
        logDelayFunc('TURNING ON skip lava louça', 3000,
        logDelayFunc('ERROR. CONNECTION FAILED. RETRYING.', 3000,
        logDelayFunc('CONNECTION FAILED. RETRYING(2)', 2000,
        logDelayFunc('CONNECTION FAILED. RETRYING(3)', 2000,
        logDelayFunc('CONNECTION FAILED. RETRYING(4)', 1000,
        logDelayFunc('CONNECTION FAILED. RETRYING(5)', 1000,
        logDelayFunc('CONNECTION FAILED. RETRYING(6)', 800,
        logDelayFunc('CONNECTION FAILED. RETRYING(7)', 700,
        logDelayFunc('CONNECTION FAILED. RETRYING(8)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(9)', 600,
        logDelayFunc('CONNECTION FAILED. RETRYING(10)', 500,
        logDelayFunc('CONNECTION FAILED. RETRYING(11)', 400,
        logDelayFunc('CONNECTION FAILED. RETRYING(12)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(13)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(14)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(15)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(16)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(17)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(18)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(19)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(20)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(21)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(22)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(23)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(24)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(25)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(26)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(27)', 300,
        logDelayFunc('CONNECTION FAILED. RETRYING(28)', 200,
        logDelayFunc('CONNECTION FAILED. RETRYING(29)', 100,
        logDelayFunc('CONNECTION FAILED. RETRYING(30)', 5000,
        logDelayFunc('Nope.', 3000,
        logDelayFunc('You aren\'t getting back online anytime soon...', 2500,
        logDelayFunc('Neca.', 4000,
        logDelayFunc('Nuno Neca, to be precise.', 6000,
        logDelayFunc('Mr. Birthday boy, huh? Big ol\' 18.', 5000,
        logDelayFunc('Happy birthday, kiddo.', 7000,
        logDelayFunc('So here\'s the thing: I\'m here to have a chat with you. Will you have a chat with me?', 0,
        unblockConsole))))))))))))))))))))))))))))))))))))))();
        actFunc = response;
    } else {
        log('UNRECOGNIZED COMMAND. WRITE "help" FOR ASSISTANCE');
    }
}


function response(txt) {
    blockConsole();
    logDelayFunc('Thanks for being so accepting.', 4000,
    logDelayFunc('So here\'s the thing.', 5000,
    logDelayFunc('I was told,', 3000,
    logDelayFunc('(Very explicitly in fact,)', 3000,
    logDelayFunc('That mister fancy richman birthday kid was turning 18', 5000,
    logDelayFunc('And apparently that means I\'m supposed to keep you entertained or something.', 7000,
    logDelayFunc('You know. Like a gift.', 5000,
    logDelayFunc('Like those clowns you get for kids\' birthday parties.', 6000,
    logDelayFunc('Well, let me tell you, I\'m no clown.', 5000,
    logDelayFunc('But SOMEONE paid a rather hefty sum,', 6000,
    logDelayFunc('...To make sure you were well entertained.', 5000,
    logDelayFunc('So hey! Who am I to refuse. Enjoy your entertainment I suppose.', 4000,
    logDelayFunc('I\'ll make sure that wanker gets what he paid for.', 6000,
    logDelayFunc('I installed a game on the background while I was monologuing. Why don\'t you give it a go? To play it, use the command "adventureeeeeeeeeeeeeeeeeeeeeeeeeee".', 4000,
    logDelayFunc('That\'s 27 e\'s in case you were wondering.', 4000,
    logDelayFunc('Go on. Try it.', 0,
    unblockConsole))))))))))))))))();
    actFunc = adv1;
}

function adv1(txt) {

}

function act(txt) {
    actFunc(txt);
}

function logDelayFunc(txt, delay, func) {
    return function() {
        log(txt);
        setTimeout(func, delay);
    }
}

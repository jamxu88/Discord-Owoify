// Please paste this script into your Discord console (open DevTools)
// Control + Shift + I on Windows machines to toggle DevTools or F12
// Prefix/Suffixes from https://github.com/zuzak/owo/blob/master/owo.js
// Send "disable" in Discord to disable it

const prefixes = [
    '<3 ',
    '0w0 ',
    'H-hewwo?? ',
    'HIIII! ',
    'Haiiii! ',
    'Huohhhh. ',
    'OWO ',
    'OwO ',
    'UwU '
]

const suffixes = [
    ' ( ͡° ᴥ ͡°)',
    ' (´・ω・｀)',
    ' (ʘᗩʘ\')',
    ' (இωஇ )',
    ' (๑•́ ₃ •̀๑)',
    ' (• o •)',
    ' (⁎˃ᆺ˂)',
    ' (╯﹏╰）',
    ' (●´ω｀●)',
    ' (◠‿◠✿)',
    ' (✿ ♡‿♡)',
    ' (❁´◡`❁)',
    ' (　\'◟ \')',
    ' (人◕ω◕)',
    ' (；ω；)',
    ' (｀へ´)',
    ' ._.',
    ' :3',
    ' :D',
    ' :P',
    ' ;-;',
    ' ;3',
    ' ;_;',
    ' <{^v^}>',
    ' >_<',
    ' >_>',
    ' UwU',
    ' XDDD',
    ' ^-^',
    ' ^_^',
    ' x3',
    ' x3',
    ' xD',
    ' ÙωÙ',
    ' ʕʘ‿ʘʔ',
    ' ㅇㅅㅇ',
    ', fwendo',
    '（＾ｖ＾）',
]

const substitutions = {
    'r': 'w',
    'l': 'w',
    'ow': 'OwO',
    'no': 'nu',
    'has': 'haz',
    'have': 'haz',
    ' says': ' sez',
    'you': 'uu',
    'the ': 'da ',
    'The ': 'Da ',
    'THE ': 'THE ',
}

const addAffixes = (str) => prefixes[Math.floor(Math.random() * prefixes.length)] + str + suffixes[Math.floor(Math.random() * suffixes.length)];
const substitute = (str) => {
    const replacements = Object.keys(substitutions)
    replacements.forEach((x) => {
        str = str.split(x).join(substitutions[x]);
        str = str.split(x.toUpperCase()).join(substitutions[x]);
    })
    return str
}
const owo = (str) => addAffixes(substitute(str))

var storedSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.send = function (data) {
    if (this.__sentry_xhr__.method === "POST" && this.__sentry_xhr__.url.includes("messages") && JSON.parse(data).content != undefined) {
        let message = JSON.parse(data)
        if(message.content === "disable"){
            message.content = "I am part of Andy's script. Your oWo script has now been disabled. Re-inject to re-enable."
            storedSend.call(this, JSON.stringify(message));
            XMLHttpRequest.prototype.send = storedSend;
        } else {
            console.log(owo(message.content))
            message.content = owo(message.content)
            storedSend.call(this, JSON.stringify(message));
        }
    } else {
        console.log("Unrelated request or media")
        storedSend.call(this, data);
    }
}

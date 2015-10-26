var adverbs = [
    'echt', 'totaal', 'waarschijnlijk', 'zeker', 'ws', 'denk ik', 'helemaal', 'volledig',
    '[sz]owie?[sz]o', 'letterlijk', 'beslist', 'oprecht', 'werke?lijk', 'absoluut',
    'sws', 'gegarandeerd', 'serieus', 'weer', 'eerlijk', 'eigen?lijk', 'miss?(chien)?',
    'compleet', 'helemaal', 'inderdaad', 'wel', '(heel )?(ontzettend )?(erg )?(ziels)?graag'
];
var adverbsRegexSet = adverbs.join('|');

var robustRegex = function(regexStr, flags) {
    flags = flags || 'i';

    // replace all spaces with a pattern that matches any combination of whitespace and/or periods
    regexStr = regexStr.replace(/ /g, '([\\s.]+)');

    return new RegExp(regexStr, flags);
}

module.exports = [
    robustRegex( "help me ((om )?( een)?) #?vegan(ist)?(isch)? (te )? (worden?|zijn)" ),
    robustRegex( "ik (wil|moet|ga|zou|overweeg|denk (er)? ?aan?) ?(om)? (" + adverbsRegexSet + ")? (proberen )?(om )?( een)? #?vegan(ist)? (moeten )?(te )?(worden?|zijn|blijven)" ),
//  'help me vegetarier te worden',
//  'help me vegetariër te worden',
//  'help me vegetarisch te worden',
//  'ik wil vegetarier worden',
//  'ik wil vegetariër worden',
//  'ik wil vegetarisch worden',
//  'ik wil vegetarier zijn',
//  'ik wil vegetariër zijn',
//  'ik wil vegetarisch zijn',
]

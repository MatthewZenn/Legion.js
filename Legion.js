document.getElementById('btn').addEventListener('click', () => {
    legion();
});

const prefixes = ['XX_', 'Xx_', 'XX.', 'Xx.', 'The', '#1', 'THE', ''];
const suffixes = ['_XX', '_xX', '.XX', '.xX', '69', '420', '1', '2', '_WasHere'];
const names = ['Noob', 'Slayer', 'Master', 'Unicorn', 'Demon', 'Hammer', 'Gamer', 'Killer', 'Sith', 'Jedi'];
const spaces = ['', '_', '.'];

function legion(){
    var tag = '...';
    var first = names[Math.floor(Math.random()*names.length)];

    var re = first;
    var res = re
    x = Math.random();
    if (x <= 0.3) {
        res = re.replace(/i/gi, '1');
        re = res;
    }
    x = Math.random();
    if (x <= 0.3) {
        res = re.replace(/o/gi, '0');
        re = res;
    }
    x = Math.random();
    if (x <= 0.3) {
        res = re.replace(/e/gi, '3');
    }
    first = res;

    var last = names[Math.floor(Math.random()*names.length)];

    var re = last;
    var res = re
    x = Math.random();
    if (x <= 0.3) {
        res = re.replace(/i/gi, '1');
        re = res;
    }
    x = Math.random();
    if (x <= 0.3) {
        res = re.replace(/o/gi, '0');
        re = res;
    }
    x = Math.random();
    if (x <= 0.3) {
        res = re.replace(/e/gi, '3');
    }
    last = res;

    var space = spaces[Math.floor(Math.random()*spaces.length)];
    var prefix = prefixes[Math.floor(Math.random()*prefixes.length)];
    var suffix = suffixes[Math.floor(Math.random()*suffixes.length)];
    var tag = prefix + first + space + last + suffix;


    document.getElementById('text').innerHTML = tag;
}
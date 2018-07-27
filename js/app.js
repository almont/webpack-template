// Elements
const listOfWordsElement = document.getElementById('list-of-words');
const resultElement = document.getElementById('result');
const emojiElement = document.getElementById('emoji-list');


// Array of bad words
const badWords = ['$', 'ganhe dinheiro enviando emails', 'trabalhe em casa', 'renda extra', 'crédito', 'seja seu próprio patrão', 'aplique agora', 'taxas baixas', 'dobre sua renda', 'ganhe', 'pago semanalmente', 'pagamento imediato', 'dinheiro rápido', 'liberdade financeira', 'saia da dívida', 'elimine a dívida', 'reduza suas taxas', 'refinancie', 'bônus', 'livre', 'empréstimo', '100%', 'emagreça', 'dieta', 'por que não consigo emagrecer', 'perca peso', 'perder gordura', 'fique sarado', 'secar barriga', 'compre', 'aproveite', 'grátis', 'desconto', 'promoção', 'oferta', 'imperdível', 'preços', 'valores', 'frete grátis', 'despachamos para todo o brasil', 'vagas abertas', 'telemarketing', 'curso', 'curso online', 'oportunidade', 'agência de modelos', 'oferta de emprego', 'parceria', 'lista de emails', 'lista de contatos', 'divulgue seu', 'divulgue sua', 'marketing por e-mail', 'sites de busca', 'clique', 'assine', 'visite o site', 'saiba mais', 'dê uma olhada', 'leia agora', 'não exclua', 'veja isso', 'confira', 'abra', 'isso não é spam', 'atenção', 'especialmente para você', 'a informação que você pediu', 'agora', 'já', 'última chance', 'hoje', 'tempo limitado', 'não perca tempo', '24 horas', 'urgente', 'imediato', 'só até amanhã', 'dinheiro', 'dinheiro a sério', 'vencedor', 'gratuito', 'Clique aqui', 'Anuncie', 'Ganhe dinheiro enviando e-mails', 'Lista de e-mails', 'Mala direta', 'Perda de peso', 'oi', 'urgentemente', 'amigo', 'escondido', 'para você', 'STOP', 'fora', 'oferecer', 'quente', 'incrível', 'satisfação', 'agir agora', 'aplicar agora', 'agora só', 'como se vê', 'como se vê na TV', 'evitar', 'ser seu próprio patrão', 'trabalhar em casa', 'em casa', 'comprar', 'ligue agora', 'bônus em dinheiro', 'o caixa livre', 'dobrar sua renda', 'ganhar', 'marketing multi nível', 'ganhar dinheiro', 'o pagamento imediato', 'o pagamento atrasado', 'gestão de fundos', 'de acesso gratuito', 'dom gratuito', 'informação livre', 'a oferta livre', 'medicina', 'soft tabs', 'cialis', 'xanax', 'valium', 'vicodin', 'Viagra', 'Levitra', 'plantas medicinais', 'alargamento', 'aberto agora', 'recolher', 'comparar', 'consolidar', 'débito', 'saia dívida', 'eliminar a dívida', 'reduzir sua taxa de hipoteca', 'refinanciar', 'as taxas mais baixas de seguros', 'seguro de vida', 'empréstimos', 'caro amigo', 'perder peso', 'grau em linha', 'marketing online', 'farmácia on-line', 'prometeu que', 'adolescente', 'vencedor ', 'você é um vencedor', 'sua família', 'seu won e-mail', 'por favor me ajude', 'o pedido de parceria', 'Deus te abençoe', 'comprar agora', 'destinatário desconhecido', 'Saldo em aberto', 'Fatura', 'Fatura de Cartão de crédito', 'Cobrança', 'Mensagem de Saldo em aberto'];


// Array of emoji
const emojList = ['❤', '❥', '웃', '유', '🍾', '☮', '✌', '☏', '☢', '☠', '✔', '☑', '♚', '▲', '♪', '✈', '⌚', '¿', '♥', '❣', '♂', '♀', '⚤', 'Ⓐ', '✍', '✉', '☣', '☤', '✘', '☒', '♛', '▼', '♫', '⌘', '⌛', '¡', '♡', 'ღ', 'ツ', '☼', '☁', '❅', '♒', '✎', '©', '®', '™', 'Σ', '✪', '✯', '☭', '➳', '⚑', '✞', '℃', '℉', '°', '✿', 'ϟ', '☃', '☂', '✄', '¢', '€', '£', '∞', '✫', '★', '½', '☯', '✡', '☪', '😍', '😘', '😛', '😃', '😂', '😊', '😉', '😁', '😭', '😒', '😏', '😥', '😳', '😲', '😯', '😱', '😰', '😓', '👿', '💤', '💩', '👏', '✌', '☺', '👌', '👍', '💪', '👊', '👉', '✊', '🙈', '🙊', '🙉', '🎁', '🎉', '➡', '✅', '🆗', '✔', '🎶', '🎵', '🎧', '🔴', '🔵', '⚫', '💰', '💸', '💲', '☀', '☁', '🔥', '☕', '☔', '❄', '👓', '🎓', '💍', '🚀'];


// Build bad words and emoji lists
(function () {
    // Words
    let list = '';

    for (let i = 0; i < badWords.length; i++) {
        list += '<li>' + badWords[i] + '</li>';

        // Scaping special chars
        badWords[i] = badWords[i].replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
    }

    listOfWordsElement.innerHTML = list;


    // Emoji
    emojiElement.innerText = '';

    for (let i = 0; i < emojList.length; i++) {
        emojiElement.innerHTML += `<li><a class="emoji-link" href="#" onclick="emojiSelect(event)">${String(emojList[i]).toString()}</a></li>`;
    }
})();


// Show and hide
function showHide(element, status) {
    if (status == 'show') {
        element.classList.add('show');
        element.classList.remove('hide');
    } else if (status == 'hide') {
        element.classList.add('hide');
        element.classList.remove('show');
    } else {
        if (element.classList.contains('show')) {
            element.classList.add('hide');
            element.classList.remove('show');

        } else {
            element.classList.add('show');
            element.classList.remove('hide');
        }
    }
}


// Search for the bad words into subject line
function matchWords(subject, words) {
    // let regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");
    let regex = new RegExp("(?:" + words.join("|") + ")", "gi");
    
    return subject.match(regex) || [];
}


// Highlight words inside the subject
function highlightWords(subject, result) {
    let subjectLine = subject;
    
    for (let i = 0; i < result.length; i++) {
        subjectLine = subjectLine.replace(result[i], `<span class='bg-danger text-warning'>${result[i]}</span>`);
    }

    return subjectLine;
}


// Submit
function search(e) {
    e.preventDefault();

    let copyText = document.getElementById('subject-copy');
    showHide(copyText, 'hide');

    let subject = document.getElementById('subject').value;
    let result = matchWords(subject, badWords);
    
    showHide(resultElement, 'show');
    resultElement.innerHTML = highlightWords(subject, result);
}


// Result
function result(e) {
    showHide(resultElement, 'hide');
}


// Char counter
function charCounter() {
    let chars = document.getElementById('subject').value;
    let resultLabel = document.getElementById('chars-counter');
    let copy = document.getElementById('copy');
    let copyText = document.getElementById('subject-copy');
    
    if (chars.length > 60) {
        resultLabel.innerHTML = `<span class="chars-counter-red">${chars.length} caracteres</span>`;
        showHide(copy, 'hide');
    } else {
        resultLabel.innerHTML = `<span class="chars-counter-green">${chars.length} caracteres</span>`;
        showHide(copy, 'show');
    }

    showHide(copyText, 'hide');
    showHide(resultElement, 'hide');
};
document.getElementById('subject').addEventListener('input', charCounter);


// Emoji list
function emojiList(e) {
    e.preventDefault();

    let emojilist = document.getElementById('emoji');
    showHide(emojilist);
}


// Emoji selector
function emojiSelect(e) {
    document.getElementById('subject').value += e.target.innerText;
    charCounter();
}


// Copy to clipboard
function copySubject(e) {
    let text = document.getElementById('subject');
    text.select();
    document.execCommand('copy');

    let copyText = document.getElementById('subject-copy');
    showHide(copyText, 'show');

    showHide(resultElement, 'hide');
}


/** BAD WORDS

ganhe dinheiro enviando emails
trabalhe em casa
renda extra
crédito
seja seu próprio patrão
aplique agora
taxas baixas
dobre sua renda
ganhe
pago semanalmente
pagamento imediato
dinheiro rápido
liberdade financeira
saia da dívida
elimine a dívida
reduza suas taxas
refinancie
bônus
livre
empréstimo
100%
emagreça
dieta
por que não consigo emagrecer
perca peso
perder gordura
fique sarado
secar barriga
compre
aproveite
grátis
desconto
promoção
oferta
imperdível
preços
valores
frete grátis
despachamos para todo o brasil
vagas abertas
telemarketing
curso
curso online
oportunidade
agência de modelos
oferta de emprego
parceria
lista de emails
lista de contatos
divulgue seu
divulgue sua
marketing por e-mail
sites de busca
clique
assine
visite o site
saiba mais
dê uma olhada
leia agora
não exclua
veja isso
confira
abra
isso não é spam
atenção
especialmente para você
a informação que você pediu
agora
já
última chance
hoje
tempo limitado
não perca tempo
24 horas
urgente
imediato
só até amanhã
dinheiro
dinheiro a sério
$
vencedor
gratuito
Clique aqui
Anuncie
Ganhe dinheiro enviando e-mails
Lista de e-mails
Mala direta
Perda de peso
oi
urgentemente
amigo
escondido
para você
STOP
fora
oferecer
quente
incrível
satisfação
agir agora
aplicar agora
agora só
como se vê
como se vê na TV
evitar
ser seu próprio patrão
trabalhar em casa
em casa
comprar
ligue agora
bônus em dinheiro
o caixa livre
dobrar sua renda
ganhar
marketing multi nível
ganhar dinheiro
o pagamento imediato
o pagamento atrasado
gestão de fundos
de acesso gratuito
dom gratuito
informação livre
a oferta livre
medicina
soft tabs
cialis
xanax
valium
vicodin
Viagra
Levitra
plantas medicinais
alargamento
aberto agora
recolher
comparar
consolidar
débito
saia dívida
eliminar a dívida
reduzir sua taxa de hipoteca
refinanciar
as taxas mais baixas de seguros
seguro de vida
empréstimos
caro amigo
perder peso
grau em linha
marketing online
farmácia on-line
prometeu que
adolescente
vencedor
você é um vencedor
sua família
seu won e-mail
por favor me ajude
o pedido de parceria
Deus te abençoe
comprar agora
destinatário desconhecido
Saldo em aberto
Fatura
Fatura de Cartão de crédito
Cobrança
Mensagem de Saldo em aberto

 */

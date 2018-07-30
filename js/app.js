// Elements
const listOfWordsElement = document.getElementById('list-of-words');
const resultElement = document.getElementById('result');
const emojiListElement = document.getElementById('emoji-list');
const subjectCopyElement = document.getElementById('subject-copy');
const subjectElement = document.getElementById('subject');
const charsCounterElement = document.getElementById('chars-counter');
const copyElement = document.getElementById('copy');
const emojiElement = document.getElementById('emoji');


// Array of bad words
const badWords = ['$', 'ganhe dinheiro enviando emails', 'trabalhe em casa', 'renda extra', 'crédito', 'seja seu próprio patrão', 'aplique agora', 'taxas baixas', 'dobre sua renda', 'ganhe', 'pago semanalmente', 'pagamento imediato', 'dinheiro rápido', 'liberdade financeira', 'saia da dívida', 'elimine a dívida', 'reduza suas taxas', 'refinancie', 'bônus', 'livre', 'empréstimo', '100%', 'emagreça', 'dieta', 'por que não consigo emagrecer', 'perca peso', 'perder gordura', 'fique sarado', 'secar barriga', 'compre', 'aproveite', 'grátis', 'desconto', 'promoção', 'oferta', 'imperdível', 'preços', 'valores', 'frete grátis', 'despachamos para todo o brasil', 'vagas abertas', 'telemarketing', 'curso', 'curso online', 'oportunidade', 'agência de modelos', 'oferta de emprego', 'parceria', 'lista de emails', 'lista de contatos', 'divulgue seu', 'divulgue sua', 'marketing por e-mail', 'sites de busca', 'clique', 'assine', 'visite o site', 'saiba mais', 'dê uma olhada', 'leia agora', 'não exclua', 'veja isso', 'confira', 'abra', 'isso não é spam', 'atenção', 'especialmente para você', 'a informação que você pediu', 'agora', 'já', 'última chance', 'hoje', 'tempo limitado', 'não perca tempo', '24 horas', 'urgente', 'imediato', 'só até amanhã', 'dinheiro', 'dinheiro a sério', 'vencedor', 'gratuito', 'Clique aqui', 'Anuncie', 'Ganhe dinheiro enviando e-mails', 'Lista de e-mails', 'Mala direta', 'Perda de peso', 'oi', 'urgentemente', 'amigo', 'escondido', 'para você', 'STOP', 'fora', 'oferecer', 'quente', 'incrível', 'satisfação', 'agir agora', 'aplicar agora', 'agora só', 'como se vê', 'como se vê na TV', 'evitar', 'ser seu próprio patrão', 'trabalhar em casa', 'em casa', 'comprar', 'ligue agora', 'bônus em dinheiro', 'o caixa livre', 'dobrar sua renda', 'ganhar', 'marketing multi nível', 'ganhar dinheiro', 'o pagamento imediato', 'o pagamento atrasado', 'gestão de fundos', 'de acesso gratuito', 'dom gratuito', 'informação livre', 'a oferta livre', 'medicina', 'soft tabs', 'cialis', 'xanax', 'valium', 'vicodin', 'Viagra', 'Levitra', 'plantas medicinais', 'alargamento', 'aberto agora', 'recolher', 'comparar', 'consolidar', 'débito', 'saia dívida', 'eliminar a dívida', 'reduzir sua taxa de hipoteca', 'refinanciar', 'as taxas mais baixas de seguros', 'seguro de vida', 'empréstimos', 'caro amigo', 'perder peso', 'grau em linha', 'marketing online', 'farmácia on-line', 'prometeu que', 'adolescente', 'vencedor ', 'você é um vencedor', 'sua família', 'seu won e-mail', 'por favor me ajude', 'o pedido de parceria', 'Deus te abençoe', 'comprar agora', 'destinatário desconhecido', 'Saldo em aberto', 'Fatura', 'Fatura de Cartão de crédito', 'Cobrança', 'Mensagem de Saldo em aberto'];


// Array of emoji
const emojiList = ['❤', '❥', '웃', '유', '🍾', '☮', '✌', '☏', '☢', '☠', '✔', '☑', '♚', '▲', '♪', '✈', '⌚', '¿', '♥', '❣', '♂', '♀', '⚤', 'Ⓐ', '✍', '✉', '☣', '☤', '✘', '☒', '♛', '▼', '♫', '⌘', '⌛', '¡', '♡', 'ღ', 'ツ', '☼', '☁', '❅', '♒', '✎', '©', '®', '™', 'Σ', '✪', '✯', '☭', '➳', '⚑', '✞', '℃', '℉', '°', '✿', 'ϟ', '☃', '☂', '✄', '¢', '€', '£', '∞', '✫', '★', '½', '☯', '✡', '☪', '😍', '😘', '😛', '😃', '😂', '😊', '😉', '😁', '😭', '😒', '😏', '😥', '😳', '😲', '😯', '😱', '😰', '😓', '👿', '💤', '💩', '👏', '✌', '☺', '👌', '👍', '💪', '👊', '👉', '✊', '🙈', '🙊', '🙉', '🎁', '🎉', '➡', '✅', '🆗', '✔', '🎶', '🎵', '🎧', '🔴', '🔵', '⚫', '💰', '💸', '💲', '☀', '☁', '🔥', '☕', '☔', '❄', '👓', '🎓', '💍', '🚀'];


// Build bad words and emoji lists
(function () {
    // Words
    listOfWordsElement.innerHTML = badWords.map((word) => `<li>${word}</li>`).join('');
    
    // Emoji
    emojiListElement.innerHTML = emojiList.map((emoji) => `<li><a class="emoji-link" href="#" onclick="emojiSelect(event)">${emoji}</a></li>`).join('');
})();


// Show and hide
function showHide(_element, _status) {
    if (_status == 'show') {
        _element.classList.add('show');
        _element.classList.remove('hide');

    } else if (_status == 'hide') {
        _element.classList.add('hide');
        _element.classList.remove('show');

    } else {
        if (_element.classList.contains('show')) {
            _element.classList.add('hide');
            _element.classList.remove('show');

        } else {
            _element.classList.add('show');
            _element.classList.remove('hide');
        }
    }
}


// Search for the bad words into subject line
function matchWords(_subject, _words) {
    let regex = new RegExp("(?:" + _words.join("|") + ")", "gi");
    
    return _subject.match(regex) || [];
}


// Highlight words inside the subject
function highlightWords(_subject, _result) {
    let subject = _subject;
    let result = _result.map((word) => word.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&')).join('|');

    return subject.replace(RegExp(result, "gi"), (word) => `<span class='bg-danger text-warning'>${word}</span>`);
}


// Submit
function search(e) {
    e.preventDefault();

    let subject = subjectElement.value;
    let words = badWords.map((word) => word.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&'));
    let result = matchWords(subject, words);

    resultElement.innerHTML = highlightWords(subject, result);
    showHide(resultElement, 'show');
    showHide(subjectCopyElement, 'hide');
}


// Result
function result(e) {
    subjectElement.select();

    showHide(resultElement, 'hide');
}


// Char counter
function charCounter() {
    let chars = subjectElement.value;
    
    if (chars.length > 60) {
        charsCounterElement.innerHTML = `<span class="chars-counter-red">${chars.length} caracteres</span>`;
        showHide(copyElement, 'hide');
        
    } else {
        charsCounterElement.innerHTML = `<span class="chars-counter-green">${chars.length} caracteres</span>`;
        showHide(copyElement, 'show');
    }

    showHide(subjectCopyElement, 'hide');
    showHide(resultElement, 'hide');
};
subjectElement.addEventListener('input', charCounter);


// Emoji list
function showEmojiList(e) {
    e.preventDefault();

    showHide(emojiElement);
}


// Emoji selector
function emojiSelect(e) {
    subjectElement.value += e.target.innerText;
    charCounter();
}


// Copy to clipboard
function copySubject(e) {
    subjectElement.select();
    document.execCommand('copy');

    showHide(subjectCopyElement, 'show');
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

// Array of bad words
const badWords = ['$', 'ganhe dinheiro enviando emails', 'trabalhe em casa', 'renda extra', 'crédito', 'seja seu próprio patrão', 'aplique agora', 'taxas baixas', 'dobre sua renda', 'ganhe', 'pago semanalmente', 'pagamento imediato', 'dinheiro rápido', 'liberdade financeira', 'saia da dívida', 'elimine a dívida', 'reduza suas taxas', 'refinancie', 'bônus', 'livre', 'empréstimo', '100%', 'emagreça', 'dieta', 'por que não consigo emagrecer', 'perca peso', 'perder gordura', 'fique sarado', 'secar barriga', 'compre', 'aproveite', 'grátis', 'desconto', 'promoção', 'oferta', 'imperdível', 'preços', 'valores', 'frete grátis', 'despachamos para todo o brasil', 'vagas abertas', 'telemarketing', 'curso', 'curso online', 'oportunidade', 'agência de modelos', 'oferta de emprego', 'parceria', 'lista de emails', 'lista de contatos', 'divulgue seu', 'divulgue sua', 'marketing por e-mail', 'sites de busca', 'clique', 'assine', 'visite o site', 'saiba mais', 'dê uma olhada', 'leia agora', 'não exclua', 'veja isso', 'confira', 'abra', 'isso não é spam', 'atenção', 'especialmente para você', 'a informação que você pediu', 'agora', 'já', 'última chance', 'hoje', 'tempo limitado', 'não perca tempo', '24 horas', 'urgente', 'imediato', 'só até amanhã', 'dinheiro', 'dinheiro a sério', 'vencedor', 'gratuito', 'Clique aqui', 'Anuncie', 'Ganhe dinheiro enviando e-mails', 'Lista de e-mails', 'Mala direta', 'Perda de peso', 'oi', 'urgentemente', 'amigo', 'escondido', 'para você', 'STOP', 'fora', 'oferecer', 'quente', 'incrível', 'satisfação', 'agir agora', 'aplicar agora', 'agora só', 'como se vê', 'como se vê na TV', 'evitar', 'ser seu próprio patrão', 'trabalhar em casa', 'em casa', 'comprar', 'ligue agora', 'bônus em dinheiro', 'o caixa livre', 'dobrar sua renda', 'ganhar', 'marketing multi nível', 'ganhar dinheiro', 'o pagamento imediato', 'o pagamento atrasado', 'gestão de fundos', 'de acesso gratuito', 'dom gratuito', 'informação livre', 'a oferta livre', 'medicina', 'soft tabs', 'cialis', 'xanax', 'valium', 'vicodin', 'Viagra', 'Levitra', 'plantas medicinais', 'alargamento', 'aberto agora', 'recolher', 'comparar', 'consolidar', 'débito', 'saia dívida', 'eliminar a dívida', 'reduzir sua taxa de hipoteca', 'refinanciar', 'as taxas mais baixas de seguros', 'seguro de vida', 'empréstimos', 'caro amigo', 'perder peso', 'grau em linha', 'marketing online', 'farmácia on-line', 'prometeu que', 'adolescente', 'vencedor ', 'você é um vencedor', 'sua família', 'seu won e-mail', 'por favor me ajude', 'o pedido de parceria', 'Deus te abençoe', 'comprar agora', 'destinatário desconhecido', 'Saldo em aberto', 'Fatura', 'Fatura de Cartão de crédito', 'Cobrança', 'Mensagem de Saldo em aberto'];


// Build bad words list
(function () {
    let list = '';

    for (let i = 0; i < badWords.length; i++) {
        list += '<li>' + badWords[i] + '</li>';

        // Scaping special chars
        badWords[i] = badWords[i].replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
    }

    document.querySelector('#list-of-words').innerHTML = list;
})();


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

    let subject = document.querySelector('#subject').value;
    let result = matchWords(subject, badWords);

    document.querySelector('#result').style.display = 'block';
    document.querySelector('#result').innerHTML = highlightWords(subject, result);
}


// Char counter
document.getElementById('subject').oninput = function () {
    let chars = document.getElementById('subject').value;
    let resultLabel = document.querySelector('#chars-counter');
    
    if (chars.length > 60) {
        resultLabel.innerHTML = `<span class='text-danger'>${chars.length} caracteres</span>`;
    } else {
        resultLabel.innerHTML = `<span class='text-success'>${chars.length} caracteres</span>`;
    }
};


// Emoji list
function emojiList(e) {
    e.preventDefault();

    let smile = document.querySelector('#emoji-list');

    if (smile.classList.contains('show')) {
        smile.classList.add('hide');
        smile.classList.remove('show');
        
    } else {
        smile.classList.add('show');
        smile.classList.remove('hide');
    }
}

document.querySelector('#emoji-test').innerText = String.fromCodePoint(0x1F60F);


// Emoji selector
function emojiSelect(e) {
    document.querySelector('#subject').value += e.target.innerText;
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

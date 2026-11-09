(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- data: Instagram @bflshoes, осень–зима 2026/27 ---------- */
// t: type, c: colour, s: sole, l: leather note, z: sizes [from,to] or list, p: price (sum), n: photo count
const R = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const P = [
  { id: 'DemNOdOiHyb', t: 'slipon',  c: 'brown', s: 'eva',        z: R(39, 44), p: 2830000, n: 4, ru: 'Слипоны с ремешком',            uz: 'Tasmali slip-on' },
  { id: 'DednnFvoLAe', t: 'slipon',  c: 'black', s: 'extralight', z: R(39, 44), p: 2830000, n: 3, ru: 'Слипоны Extralight',            uz: 'Extralight slip-on' },
  { id: 'DeWrVFOCKUP', t: 'slipon',  c: 'navy',  s: 'wearlight',  z: R(38, 45), p: 2830000, n: 4, ru: 'Слипоны замша и кожа',          uz: 'Zamsh va charm slip-on' },
  { id: 'DeUc34GoKZ7', t: 'slipon',  c: 'brown', s: 'wearlight',  z: R(38, 44), p: 2830000, n: 1, ru: 'Слипоны из зернистой кожи',     uz: 'Donador charm slip-on' },
  { id: 'DeRtTB-iGn4', t: 'casual',  c: 'black', s: 'extralight', z: R(39, 44), p: 2830000, n: 3, ru: 'Кроссовки Extralight',          uz: 'Extralight krossovka' },
  { id: 'DePNdBkoU5n', t: 'classic', c: 'black', s: 'rubber',     z: R(39, 45), p: 2830000, n: 2, ru: 'Оксфорды на каучуке',           uz: 'Kauchuk taglikli oksford' },
  { id: 'DeMn8EKiIDZ', t: 'slipon',  c: 'black', s: 'wearlight',  z: R(39, 45), p: 2830000, n: 4, ru: 'Слипоны с фартуком',            uz: 'Fartukli slip-on' },
  { id: 'DeKNVz4IX0Y', t: 'casual',  c: 'black', s: 'eva',        z: R(38, 44), p: 2430000, n: 3, ru: 'Кожаные кеды',                  uz: 'Charm kedlar' },
  { id: 'DeHcgKxCHnT', t: 'casual',  c: 'navy',  s: 'extralight', z: R(39, 44), p: 2830000, n: 4, ru: 'Кроссовки трикотаж и кожа',     uz: 'Trikotaj va charm krossovka' },
  { id: 'DeErzVZI5_u', t: 'loafer',  c: 'black', s: null,         z: R(38, 45), p: 2430000, n: 2, l: { ru: 'флотар', uz: 'flotar' }, ru: 'Лоферы из флотара', uz: 'Flotar loafer' },
  { id: 'DeCG1vGoO_D', t: 'loafer',  c: 'black', s: 'leather',    z: R(38, 45), p: 2830000, n: 2, ru: 'Пенни-лоферы на кожаной подошве', uz: 'Charm taglikli penni-loafer' },
  { id: 'Dd_-Gc1iDxh', t: 'classic', c: 'black', s: 'eva',        z: R(39, 43), p: 2430000, n: 3, ru: 'Оксфорды с прямым мыском',      uz: 'To‘g‘ri burunli oksford' },
  { id: 'Dd885xboZS3', t: 'slipon',  c: 'brown', s: 'extralight', z: R(39, 44), p: 2830000, n: 3, ru: 'Слипоны с трикотажной вставкой', uz: 'Trikotaj qo‘shimchali slip-on' },
  { id: 'Dd4HgD5IpnL', t: 'slipon',  c: 'navy',  s: 'wearlight',  z: R(38, 45), p: 2830000, n: 3, ru: 'Слипоны на светлой подошве',    uz: 'Och taglikli slip-on' },
  { id: 'Dd1X4gyiLZJ', t: 'loafer',  c: 'black', s: 'eva',        z: R(38, 45), p: 2430000, n: 3, ru: 'Пенни-лоферы',                  uz: 'Penni-loafer' },
  { id: 'DdyrJYfIHqn', t: 'slipon',  c: 'brown', s: 'wearlight',  z: R(38, 44), p: 2830000, n: 1, ru: 'Слипоны Wearlight',             uz: 'Wearlight slip-on' },
  { id: 'DdwQ3EgooF7', t: 'casual',  c: 'brown', s: 'eva',        z: R(38, 45), p: 2430000, n: 3, ru: 'Дерби casual',                  uz: 'Casual derbi' },
  { id: 'Ddt7z0KCIIi', t: 'casual',  c: 'grey',  s: 'eva',        z: R(38, 44), p: 2430000, n: 3, ru: 'Кеды шерсть и кожа',            uz: 'Jun va charm kedlar' },
  { id: 'DdrOPDFo_Mr', t: 'classic', c: 'black', s: 'microlight', z: R(38, 45), p: 2600000, n: 2, ru: 'Дерби на микролайте',           uz: 'Mikrolayt derbi' },
  { id: 'DdobDtjCD0C', t: 'classic', c: 'brown', s: 'eva',        z: R(38, 44), p: 2430000, n: 4, ru: 'Туфли из гладкой кожи',         uz: 'Silliq charm tufli' },
  { id: 'DdgqRKJIYFI', t: 'casual',  c: 'brown', s: 'eva',        z: R(38, 43), p: 2430000, n: 1, ru: 'Замшевые дерби',                uz: 'Zamsh derbi' },
  { id: 'Dddc4erCD6Y', t: 'loafer',  c: 'black', s: 'eva',        z: R(38, 45), p: 2600000, n: 3, ru: 'Лоферы с пряжкой',              uz: 'To‘qali loafer' },
  { id: 'DdWX1WGo1p-', t: 'slipon',  c: 'navy',  s: 'eva',        z: R(39, 45), p: 2830000, n: 1, ru: 'Слипоны тёмно-синие',           uz: 'To‘q ko‘k slip-on' },
  { id: 'DdOs6HnIDCL', t: 'loafer',  c: 'brown', s: 'eva',        z: R(39, 44), p: 2830000, n: 1, l: { ru: 'тарандус (Италия)', uz: 'tarandus (Italiya)' }, ru: 'Лоферы из тарандуса', uz: 'Tarandus loafer' },
  { id: 'DdEmj1vCOwq', t: 'loafer',  c: 'navy',  s: 'eva',        z: R(39, 44), p: 2830000, n: 4, ru: 'Лоферы с ремешком',             uz: 'Tasmali loafer' },
  { id: 'DdBJ8MziM-R', t: 'classic', c: 'black', s: null,         z: R(39, 45), p: 2830000, n: 3, ru: 'Дерби из зернистой кожи',       uz: 'Donador charm derbi' },
];
P.forEach((p, i) => { p.o = i; p.img = Array.from({ length: p.n }, (_, k) => `media/p/${p.id}_${k}.jpg`); });
const IT = '<i class="it" aria-hidden="true"></i>';
const ALL_SIZES = R(38, 45);

const SOLES = {
  extralight: { it: 1, name: 'Extralight®', ru: 'Облегчённая итальянская подошва. Очень лёгкая и гибкая, хорошо амортизирует шаг — для тех, кто весь день на ногах.', uz: 'Yengillashtirilgan italyan taglik. Juda yengil va egiluvchan, qadamni yumshatadi — kun bo‘yi oyoqda yuradiganlar uchun.' },
  wearlight:  { it: 1, name: 'Wearlight', ru: 'Облегчённая итальянская подошва для повседневной носки: мягкая, упругая, держит форму.', uz: 'Kundalik kiyish uchun yengil italyan taglik: yumshoq, elastik, shaklini saqlaydi.' },
  eva:        { name: 'EVA', ru: 'Лёгкий вспененный материал. Пружинит, почти не весит и не устаёт ноге в городе.', uz: 'Yengil ko‘pikli material. Prujinali, deyarli vazni yo‘q, shaharda oyoq charchamaydi.' },
  rubber:     { name: { ru: 'Каучук', uz: 'Kauchuk' }, ru: 'Не скользит, прочная и гибкая — надёжный выбор на зиму и для каждого дня.', uz: 'Sirpanmaydi, chidamli va egiluvchan — qish va har kun uchun ishonchli tanlov.' },
  microlight: { name: { ru: 'Микролайт', uz: 'Mikrolayt' }, ru: 'Облегчённая подошва для классической пары: строгий силуэт без лишнего веса.', uz: 'Klassik juft uchun yengil taglik: ortiqcha og‘irliksiz qat’iy silueti.' },
  leather:    { name: { ru: 'Кожаная', uz: 'Charm' }, ru: 'Классика для торжественных выходов. Со временем подстраивается под стопу.', uz: 'Tantanali chiqishlar uchun klassika. Vaqt o‘tib oyoq shakliga moslashadi.' },
};

/* ---------- i18n ---------- */
const UZ = {
  'nav.collection': 'Kolleksiya', 'nav.soles': 'Tagliklar', 'nav.craft': 'Ustaxona', 'nav.store': 'Do‘kon',
  'hero.eyebrow': 'Toshkent · Beruniy ko‘chasi, 8 · mo‘ljal: «Orzu» chorrahasi',
  'hero.l1': 'Tabiiy charmdan', 'hero.l2': 'qo‘lda tikilgan', 'hero.l3': 'erkaklar poyabzali',
  'hero.lead': 'Yengil italyan tagliklardagi tufli, loafer va slip-onlar. 2026/27 kuz–qish kolleksiyasi do‘konda.',
  'hero.cta': 'Kolleksiyani ko‘rish', 'hero.call': 'Qo‘ng‘iroq qilish',
  'hero.f1': 'mavsum modeli', 'hero.f2': 'o‘lchamlar', 'hero.f3': 'Extralight va Wearlight tagliklari',
  'tick.leather': 'Tabiiy charm', 'tick.hand': 'Qo‘l mehnati', 'tick.season': 'Kuz–qish 2026/27', 'tick.sizes': 'O‘lcham 38–45',
  'col.eyebrow': 'Yangi kelgan', 'col.title': 'Kuz–qish <em>2026/27</em>',
  'col.note': 'Narxlar — yakuniy, Instagram’dagidek. O‘lchamingizni tanlang — faqat sizga mosini ko‘rsatamiz.',
  'col.size': 'O‘lchamingiz', 'col.sort': 'Saralash', 'sort.new': 'Avval yangilari', 'sort.asc': 'Narx ↑', 'sort.desc': 'Narx ↓',
  'col.empty': 'Bu tanlovda model yo‘q. Filtrlardan birini olib tashlang yoki qo‘ng‘iroq qiling — mavjudligini aytamiz.', 'col.reset': 'Filtrlarni tozalash',
  'film.q': 'Yaxshi juft vitrinada emas, bir mavsum kiyilgandan keyin bilinadi.',
  'sole.eyebrow': 'Oyoq ostida nima bor', 'sole.title': 'Hammasini <em>taglik</em> hal qiladi',
  'sole.note': 'Har bir model tavsifida taglikni ko‘rsatamiz. Farqi quyida — bosing, modellar chiqadi.',
  'craft.eyebrow': 'Ish jarayoni', 'craft.title': '<em>Qo‘lda</em> tikilgan', 'craft.note': 'Ustaxonamizdan kadrlar — tikish, qoliplash, belgilash va yig‘ish.',
  'craft.1': 'Tikish', 'craft.2': 'Qoliplash', 'craft.3': 'Qo‘lda belgilash', 'craft.4': 'Sex',
  'edit.eyebrow': 'Qanday tanlash kerak', 'edit.title': 'Butun mavsumga uch juft',
  'edit.1t': 'Qora klassika', 'edit.1d': 'Oksford yoki derbi — kostyumga, to‘yga, ishga.',
  'edit.2t': 'Loaferlar', 'edit.2d': 'Rasmiy va erkin o‘rtasida: chinos, jinsi, trikotaj.',
  'edit.3t': 'Slip-on yoki kedlar', 'edit.3d': 'Har kunga, yengil taglikda — ko‘p yursangiz.',
  'edit.cta': 'Kolleksiyadan tanlash',
  'store.eyebrow': 'Do‘kon', 'store.title': 'Kelib <em>kiyib ko‘ring</em>',
  'store.addr': 'Manzil', 'store.addrv': 'Toshkent, Beruniy ko‘chasi, 8', 'store.land': 'Mo‘ljal', 'store.landv': '«Orzu» chorrahasi',
  'store.phones': 'Telefonlar', 'store.tgw': 'Yozish: +998 90 358 11 01', 'store.tgc': 'Kanal @bflshoesuz',
  'store.route': 'Yo‘nalish olish', 'store.outlet': 'O‘tgan mavsum modellari −60% gacha chegirmada. Mavjudligi va o‘lchamlarni telefon orqali aniqlang.',
  'foot.note': '@bflshoes ochiq materiallari asosidagi sayt konsepti. Ommaviy oferta emas — mavjudlik va narxlarni do‘kondan aniqlang.',
  'pd.final': 'yakuniy narx', 'pd.pick': 'O‘lchamni tanlang', 'pd.hint': 'O‘lchamga ishonchingiz komilmi? Oyoq uzunligini sm’da yuboring — maslahat beramiz.',
  'pd.tg': 'Telegram’da buyurtma', 'pd.ig': 'Instagram’ga yozish', 'pd.copied': 'Buyurtma matni nusxalandi — chatga qo‘yib yuboring.', 'pd.post': 'Instagram’dagi post ↗',
};
const T = {
  ru: { all: 'Все', classic: 'Туфли', loafer: 'Лоферы', slipon: 'Слипоны', casual: 'Кеды и casual',
        black: 'чёрный', brown: 'коричневый', navy: 'тёмно-синий', grey: 'серый',
        sum: 'сум', models: n => `${n} ${plural(n, 'модель', 'модели', 'моделей')}`, inSize: z => ` в размере ${z}`,
        sizes: 'Размеры', sole: 'Подошва', colour: 'Цвет', leather: 'Кожа', natural: 'натуральная', sizeOf: 'р.',
        show: 'Показать', anySole: 'Любая подошва', msg: (p, z) => `Здравствуйте! Хочу заказать: ${p.ru} (арт. ${p.id}), размер ${z || '—'}, ${fmt(p.p)} сум. Есть в наличии?` },
  uz: { all: 'Barchasi', classic: 'Tufli', loafer: 'Loafer', slipon: 'Slip-on', casual: 'Kedlar va casual',
        black: 'qora', brown: 'jigarrang', navy: 'to‘q ko‘k', grey: 'kulrang',
        sum: 'so‘m', models: n => `${n} ta model`, inSize: z => `, ${z}-o‘lcham`,
        sizes: 'O‘lchamlar', sole: 'Taglik', colour: 'Rang', leather: 'Charm', natural: 'tabiiy', sizeOf: 'o‘l.',
        show: 'Ko‘rsatish', anySole: 'Har qanday taglik', msg: (p, z) => `Assalomu alaykum! Buyurtma bermoqchiman: ${p.uz} (art. ${p.id}), o‘lcham ${z || '—'}, ${fmt(p.p)} so‘m. Mavjudmi?` },
};
function plural(n, a, b, c) { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 10 || h >= 20) ? b : c; }
const fmt = n => n.toLocaleString('ru-RU').replace(/ /g, ' ');

$$('[data-i]').forEach(el => { el.dataset.ru = el.innerHTML; });
let lang = (localStorage.getItem('bfl-lang') || (navigator.language || '').startsWith('uz') && 'uz') || 'ru';
const t = () => T[lang];
const soleName = k => { const n = SOLES[k].name; return typeof n === 'string' ? n : n[lang]; };

function applyLang() {
  document.documentElement.lang = lang;
  $$('[data-i]').forEach(el => {
    const v = lang === 'uz' ? UZ[el.dataset.i] : el.dataset.ru;
    if (v != null) el.innerHTML = v;
  });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  buildBars(); renderSoles(); render();
  if ($('#pd').open && cur) openPd(cur, true);
}
$$('.lang button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; localStorage.setItem('bfl-lang', lang); applyLang(); }));

/* ---------- filters ---------- */
const st = { size: null, type: 'all', sole: 'all', sort: 'new' };
function buildBars() {
  $('#sizeBar').innerHTML = ALL_SIZES.map(z => `<button type="button" data-z="${z}" aria-pressed="${st.size === z}">${z}</button>`).join('');
  const types = ['all', 'classic', 'loafer', 'slipon', 'casual'];
  $('#typeBar').innerHTML = types.map(k => {
    const n = k === 'all' ? P.length : P.filter(p => p.t === k).length;
    return `<button type="button" data-t="${k}" aria-pressed="${st.type === k}">${t()[k]}<sup>${n}</sup></button>`;
  }).join('');
  const soles = ['all', ...Object.keys(SOLES)];
  $('#soleBar').innerHTML = soles.map(k => `<button type="button" data-s="${k}" aria-pressed="${st.sole === k}">${k === 'all' ? t().anySole : soleName(k) + (SOLES[k].it ? IT : '')}</button>`).join('');
}
document.addEventListener('click', e => {
  const b = e.target.closest('#sizeBar button, #typeBar button, #soleBar button');
  if (!b) return;
  if (b.dataset.z) st.size = st.size === +b.dataset.z ? null : +b.dataset.z;
  if (b.dataset.t) st.type = b.dataset.t;
  if (b.dataset.s) st.sole = st.sole === b.dataset.s ? 'all' : b.dataset.s;
  buildBars(); render();
});
$('#sort').addEventListener('change', e => { st.sort = e.target.value; render(); });
$('#reset').addEventListener('click', () => { Object.assign(st, { size: null, type: 'all', sole: 'all' }); buildBars(); render(); });

function list() {
  let r = P.filter(p => (st.type === 'all' || p.t === st.type) && (st.sole === 'all' || p.s === st.sole) && (!st.size || p.z.includes(st.size)));
  if (st.sort === 'asc') r = r.slice().sort((a, b) => a.p - b.p || a.o - b.o);
  if (st.sort === 'desc') r = r.slice().sort((a, b) => b.p - a.p || a.o - b.o);
  return r;
}
function render() {
  const r = list();
  $('#count').textContent = t().models(r.length) + (st.size ? t().inSize(st.size) : '');
  $('#empty').hidden = r.length > 0;
  $('#grid').innerHTML = r.map((p, i) => {
    const tag = p.s ? `<span class="card__tag${SOLES[p.s].it ? ' card__tag--it' : ''}">${soleName(p.s)}${SOLES[p.s].it ? IT : ''}</span>` : '';
    return `<li class="card" style="animation-delay:${Math.min(i, 12) * 40}ms"><button type="button" data-id="${p.id}" aria-label="${p[lang]}, ${fmt(p.p)} ${t().sum}">
      <div class="card__media">${tag}<img src="${p.img[0]}" alt="" loading="lazy" decoding="async">${p.img[1] ? `<img src="${p.img[1]}" alt="" loading="lazy" decoding="async">` : ''}</div>
      <div class="card__info"><span class="card__name">${p[lang]}</span><span class="card__price">${fmt(p.p)} ${t().sum}</span></div>
      <p class="card__sub">${t()[p.c]} · ${p.z[0]}–${p.z[p.z.length - 1]}</p></button></li>`;
  }).join('');
}
$('#grid').addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (b) openPd(P.find(p => p.id === b.dataset.id)); });

/* ---------- soles list ---------- */
function renderSoles() {
  $('#soleList').innerHTML = Object.keys(SOLES).map((k, i) => {
    const n = P.filter(p => p.s === k).length;
    return `<li><button class="sole" type="button" data-sole="${k}"><span class="sole__n">0${i + 1}</span>
      <span class="sole__t">${soleName(k)}${SOLES[k].it ? '<small>Italia'+IT+'</small>' : ''}</span>
      <span class="sole__go">${t().show} · ${n} →</span>
      <span class="sole__d">${SOLES[k][lang]}</span></button></li>`;
  }).join('');
}
$('#soleList').addEventListener('click', e => {
  const b = e.target.closest('[data-sole]'); if (!b) return;
  Object.assign(st, { sole: b.dataset.sole, type: 'all' }); buildBars(); render();
  $('#collection').scrollIntoView({ behavior: 'smooth' });
});

/* ---------- product dialog ---------- */
const pd = $('#pd'); let cur = null, curSize = null;
function openPd(p, keep) {
  cur = p; if (!keep) curSize = st.size && p.z.includes(st.size) ? st.size : null;
  $('#pdType').textContent = `${t()[p.t]} · ${t()[p.c]}`;
  $('#pdName').textContent = p[lang];
  $('#pdPrice').textContent = `${fmt(p.p)} ${t().sum}`;
  const spec = [];
  if (p.s) spec.push([t().sole, soleName(p.s) + (SOLES[p.s].it ? IT : '')]);
  spec.push([t().leather, p.l ? p.l[lang] : t().natural]);
  spec.push([t().colour, t()[p.c]]);
  spec.push([t().sizes, `${p.z[0]}–${p.z[p.z.length - 1]}`]);
  $('#pdSpec').innerHTML = spec.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('');
  $('#pdSizes').innerHTML = ALL_SIZES.map(z => `<button type="button" data-z="${z}" ${p.z.includes(z) ? '' : 'disabled'} aria-pressed="${curSize === z}">${z}</button>`).join('');
  if (!keep) showImg(0);
  $('#pdThumbs').innerHTML = p.img.length > 1 ? p.img.map((s, i) => `<button type="button" data-k="${i}" aria-current="${i === (pd._k || 0)}" aria-label="${i + 1}"><img src="${s}" alt=""></button>`).join('') : '';
  $('#pdPost').href = `https://www.instagram.com/p/${p.id}/`;
  $('#pdCopied').hidden = true;
  $('.pd__x').setAttribute('aria-label', lang === 'uz' ? 'Yopish' : 'Закрыть');
  if (!pd.open) { pd.showModal(); requestAnimationFrame(() => { pd.scrollTop = 0; $('.pd__body').scrollTop = 0; }); history.replaceState(null, '', '#m-' + p.id); }
}
function showImg(k) {
  pd._k = k; const im = $('#pdImg'); im.src = cur.img[k]; im.alt = cur[lang];
  $$('#pdThumbs button').forEach(b => b.setAttribute('aria-current', +b.dataset.k === k));
}
$('#pdThumbs').addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) showImg(+b.dataset.k); });
$('#pdSizes').addEventListener('click', e => {
  const b = e.target.closest('[data-z]'); if (!b || b.disabled) return;
  curSize = curSize === +b.dataset.z ? null : +b.dataset.z;
  $$('#pdSizes button').forEach(x => x.setAttribute('aria-pressed', +x.dataset.z === curSize));
});
async function copyMsg() {
  const txt = t().msg(cur, curSize);
  try { await navigator.clipboard.writeText(txt); $('#pdCopied').hidden = false; } catch (_) { /* clipboard blocked: chat still opens */ }
}
$('#pdTg').addEventListener('click', copyMsg);
$('#pdIg').addEventListener('click', copyMsg);
function closePd() { pd.close(); }
$('#pdClose').addEventListener('click', closePd);
pd.addEventListener('click', e => { if (e.target === pd) closePd(); });
pd.addEventListener('close', () => { history.replaceState(null, '', location.pathname + location.search); });
// swipe photos on touch
let sx = null;
$('.pd__main').addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
$('.pd__main').addEventListener('touchend', e => {
  if (sx == null || !cur) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
  if (Math.abs(dx) > 40 && cur.img.length > 1) showImg((pd._k + (dx < 0 ? 1 : -1) + cur.img.length) % cur.img.length);
});

/* ---------- header, reveal, videos ---------- */
const top = $('#top'); let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  top.classList.toggle('is-solid', y > 40);
  top.classList.toggle('is-hidden', y > 600 && y > lastY && !pd.open);
  lastY = y;
}, { passive: true });

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.target.tagName === 'VIDEO') {
    if (e.isIntersecting && !reduce) e.target.play().catch(() => {}); else e.target.pause();
  } else if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -8% 0px' });
$$('video').forEach(v => { if (reduce) v.removeAttribute('autoplay'); io.observe(v); });
$$('.sec-head, .soles__wrap, .craft__row, .edit > *, .store__grid > *, .film__copy').forEach(el => { el.classList.add('rv'); io.observe(el); });

// hero reels: gentle parallax
const reels = $$('.reel');
if (!reduce && reels.length) {
  const base = [-6, 8, -2], k = [0.05, -0.04, 0.08];
  addEventListener('scroll', () => {
    const y = scrollY; if (y > innerHeight * 1.2) return;
    reels.forEach((r, i) => { r.style.transform = `translateY(calc(${base[i]}% + ${y * k[i]}px))`; });
  }, { passive: true });
}

// nav highlight
const secs = ['collection', 'soles', 'craft', 'store'].map(id => $('#' + id));
const navIo = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$('.nav a').forEach(a => a.classList.toggle('is-on', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
secs.forEach(s => navIo.observe(s));

$('#factCount').textContent = P.length;
applyLang();
const m = location.hash.match(/^#m-(.+)$/);
if (m) { const p = P.find(x => x.id === m[1]); if (p) openPd(p); }
})();

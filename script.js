var typeFlag = 0;
var data = {
  pingJia : 
  ['あ','い','う','え','お',
  'か','き','く','け','こ',
  'さ','し','す','せ','そ',
  'た','ち','つ','て','と',
  'な','に','ぬ','ね','の',
  'は','ひ','ふ','へ','ほ',
  'ま','み','む','め','も',
  'ら','り','る','れ','ろ',
  'や','ゆ','よ','わ','を',
  'ん'],
  pianJia : 
  ['ア','イ','ウ','エ','オ',
    'カ','キ','ク','ケ','コ',
    'サ','シ','ス','セ','ソ',
    'タ','チ','ツ','テ','ト',
    'ナ','ニ','ヌ','ネ','ノ',
    'ハ','ヒ','フ','ヘ','ホ',
    'マ','ミ','ム','メ','モ',
    'ラ','リ','ル','レ','ロ',
    'ヤ','ユ','ヨ','ワ','ヲ',
    'ン']
};
var charList = data.pingJia;

text = document.getElementsByClassName("text")[0];
changebtn = document.getElementsByClassName("change")[0];
pingbtn = document.getElementsByClassName("pingjia")[0];
pianbtn = document.getElementsByClassName("pianjia")[0];
mixbtn = document.getElementsByClassName("mixbtn")[0];

// 按键函数
pingbtn.onclick = function(){
  typeFlag = 0;
  charList = data.pingJia;
  pingbtn.style.backgroundColor = "#367FB2";
  pianbtn.style.backgroundColor = "#69a6d1";
  mixbtn.style.backgroundColor = "#69a6d1";
};

pianbtn.onclick = function(){
  typeFlag = 1;
  charList = data.pianJia;
  pingbtn.style.backgroundColor = "#69a6d1";
  pianbtn.style.backgroundColor = "#367FB2";
  mixbtn.style.backgroundColor = "#69a6d1";
};

mixbtn.onclick = function(){
  typeFlag = 2;
  charList = data.pianJia.concat(data.pingJia);
  pingbtn.style.backgroundColor = "#69a6d1";
  pianbtn.style.backgroundColor = "#69a6d1";
  mixbtn.style.backgroundColor = "#367FB2";
};

changebtn.onclick = function(){
  randomCharacter = charList[Math.floor(Math.random() * charList.length)];
  text.innerText = randomCharacter;
};
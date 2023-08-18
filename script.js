var typeFlag = 0;
var data = {
  qPingJia : 
  [['あ','a'],['い','i'],['う','u'],['え','e'],['お','o'],
  ['か','ka'],['き','ki'],['く','ku'],['け','ke'],['こ','ko'],
  ['さ','sa'],['し','si'],['す','su'],['せ','se'],['そ','so'],
  ['た','ta'],['ち','ti'],['つ','tu'],['て','te'],['と','to'],
  ['な','na'],['に','ni'],['ぬ','nu'],['ね','ne'],['の','no'],
  ['は','ha'],['ひ','hi'],['ふ','hu'],['へ','he'],['ほ','ho'],
  ['ま','ma'],['み','mi'],['む','mu'],['め','me'],['も','mo'],
  ['ら','ra'],['り','ri'],['る','ru'],['れ','re'],['ろ','ro'],
  ['や','ya'],['ゆ','yu'],['よ','yo'],['わ','wa'],['を','wo'],
  ['ん','nn']],
  
  qPianJia : 
  [['ア','a'],['イ','i'],['ウ','u'],['エ','e'],['オ','o'],
  ['カ','ka'],['キ','ki'],['ク','ku'],['ケ','ke'],['コ','ko'],
  ['サ','sa'],['シ','si'],['ス','su'],['セ','se'],['ソ','so'],
  ['タ','ta'],['チ','ti'],['ツ','tu'],['テ','te'],['ト','to'],
  ['ナ','na'],['ニ','ni'],['ヌ','nu'],['ネ','ne'],['ノ','no'],
  ['ハ','ha'],['ヒ','hi'],['フ','hu'],['ヘ','he'],['ホ','ho'],
  ['マ','ma'],['ミ','mi'],['ム','mu'],['メ','me'],['モ','mo'],
  ['ラ','ra'],['リ','ri'],['ル','ru'],['レ','re'],['ロ','ro'],
  ['ヤ','ya'],['ユ','yu'],['ヨ','yo'],['ワ','wa'],['ヲ','wo'],
  ['ン','nn']],

  zPingJia :
  [['が','ga'],['ぎ','gi'],['ぐ','gu'],['げ','ge'],['ご','go'],
  ['ざ','za'],['じ','zi'],['ず','zu'],['ぜ','ze'],['ぞ','zo'],
  ['だ','da'],['ぢ','di'],['づ','du'],['で','de'],['ど','do'],
  ['ば','ba'],['び','bi'],['ぶ','bu'],['べ','be'],['ぼ','bo'],
  ['ぱ','pa'],['ぴ','pi'],['ぷ','pu'],['ぺ','pe'],['ぽ','po']],

  zPianJia :
  [['ガ','ga'],['ギ','gi'],['グ','gu'],['ゲ','ge'],['ゴ','go'],
  ['ザ','za'],['ジ','zi'],['ズ','zu'],['ゼ','ze'],['ゾ','zo'],
  ['ダ','da'],['ヂ','di'],['ヅ','du'],['デ','de'],['ド','do'],
  ['バ','ba'],['ビ','bi'],['ブ','bu'],['ベ','be'],['ボ','bo'],
  ['パ','pa'],['ピ','pi'],['プ','pu'],['ペ','pe'],['ポ','po']]
};
var charList = data.qPingJia;

var text = document.getElementsByClassName("text")[0];
var tiptext = document.getElementsByClassName("tiptext")[0];
var protip = document.getElementsByClassName("protip")[0];
var changebtn = document.getElementsByClassName("change")[0];
var selectBtnGroup = document.getElementsByClassName("select-btn");


// 按键函数
function selectBtnFunc(e){
  // 获取当前按钮
  var currentBtn = e.target;
  //根据不同的按钮改变字符表
  switch(currentBtn.id){
    case "qpingjia":
      charList = data.qPingJia;
      break;
    case "qpianjia":
      charList = data.qPianJia;
      break;
    case "qmixbtn":
      charList = data.qPianJia.concat(data.qPingJia);
      break;
    case "zpingjia":
      charList = data.zPingJia;
      break;
    case "zpianjia":
      charList = data.zPianJia;
      break;
    case "zmixbtn":
      charList = data.zPingJia.concat(data.zPianJia);
      break;
    case "pingmixbtn":
      charList = data.qPingJia.concat(data.zPingJia);
      break;
    case "pianmixbtn":
      charList = data.qPianJia.concat(data.zPianJia);
      break;
    case "allmixbtn":
      charList = data.qPingJia.concat(data.zPingJia,data.qPianJia,data.zPianJia);
      break;
    default: 
      break;
  } 

  for (var i = 0; i < selectBtnGroup.length; i++) {
    selectBtnGroup[i].style.backgroundColor = "#69a6d1";
  }
  currentBtn.style.backgroundColor = "#367FB2";
}

for (var i = 0; i < selectBtnGroup.length; i++) {
    selectBtnGroup[i].addEventListener('click', selectBtnFunc);
}

protip.onclick = function(){
  tiptext.style.color = "#1f597e";
}

changebtn.onclick = function(){
  randomCharacter = charList[Math.floor(Math.random() * charList.length)];
  text.innerText = randomCharacter[0];
  tiptext.innerText = randomCharacter[1];
  tiptext.style.color = "#aacde1";
};
var typeFlag = 0;
var data = [["やすみます","休みマム","休む","休息"],["はたらきます","働きます","働く","工作"],["はじまります","始まります","始まる","开始"],
            ["おわります","終わります","終わる","结束"],["おきます","起きます","","起床"],["ねます","寝ます","","睡觉"],
            ["べんきょうします","勉強します","","学习"],["いきます","行きます","行く","去"],["かえります","帰ります","帰る","回来"],
            ["きます","来ます","","来"],["のみます","飲みます","飲む","喝"],["かいます","買います","買う","买"],
            ["とります","撮ります","撮る","拍照"],["かきます","書きます","書く","写"],["よみます","読みます","読む","读"],
            ["ききます","聞きます","聞く","听"],["たべます","食べます","食べる","吃"],["みます","見ます","見る","看"],
            ["します","します","","做"],["そうじします","掃除しまう","","打扫"],["あいます","会います","会う","见"],
            ["おくります","送ります","送る","寄"],["つくります","作ります","作る","制作"],["ふとります","太ります","太る","胖"],
            ["だします","出します","出す","寄信"],["とどきます","届きます","届く","收到送到"],["かきます","かきます","かく","画"],
            ["かします","貸します","貸す","借出"],["ならいます","習います","習う","学习"],["あげます","","あげる","给"],
            ["かけます","かけます","かける","打电话"],["かります","借ります","借りる","借入"],["おしえます","教えます","教える","教"],
            ["もらいます","もらいます","もらう","拿到得到"]
            // ["","","",""],["","","",""],["","","",""],
            ]
var btn_state = 0;

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
    case "pingjia":
      btn_state = 0;
      break;
    case "hanzi":
      btn_state = 1;
      break;
    case "zhongwen":
      btn_state = 2;
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
  randomVerb = data[Math.floor(Math.random() * data.length)];
  switch(btn_state){
    case 0:
      text.innerText = randomVerb[0];
      tiptext.innerText = randomVerb[1]+" / "+randomVerb[2]+" / " +randomVerb[3];
      break;
    case 1:
      text.innerText = randomVerb[1];
      tiptext.innerText = randomVerb[0]+" / "+randomVerb[2]+" / " +randomVerb[3];
      break;
    case 2:
      text.innerText = randomVerb[3];
      tiptext.innerText = randomVerb[0]+" / "+randomVerb[1]+" / " +randomVerb[2];
      break;
    default: 
      break;
  } 

  tiptext.style.color = "#aacde1";
};
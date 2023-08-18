
// 变量
var currentFlag = 1;
var numberSet = [77,"ななじゅう　なな"];
// 获取元素
var text = document.getElementsByClassName("text")[0];
var tiptext = document.getElementsByClassName("tiptext")[0];
var protip = document.getElementsByClassName("protip")[0];
var changebtn = document.getElementsByClassName("change")[0];
var selectBtnGroup = document.getElementsByClassName("select-btn");


// 按键函数
function selectBtnFunc(e){
  // 获取当前按钮
  var currentBtn = e.target;
  //根据不同的按钮改变生成方式
  switch(currentBtn.id){
    case "one-number-btn":
    	currentFlag = 1;
      break;
    case "two-number-btn":
    	currentFlag = 2;
      break;
    case "three-number-btn":
    	currentFlag = 3;
      break;
    case "four-number-btn":
    	currentFlag = 4;
      break;
    case "five-number-btn":
    	currentFlag = 5;
      break;
    case "six-number-btn":
    	currentFlag = 6;
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


//获取每一位
function getEveryNum(number){
	let digits = [];
	if (number==0){
		return [0];
	}
	while (number > 0) {
	  digits.push(number % 10);
	  number = Math.floor(number / 10);
	}
	return digits;
}


//生成随机数和提示
function generateNumber(){
	let tempNum = 0;
	let digits = [];
	let tip = "";
	let data = ["れい","いち","に","さん","よん","ご","ろく","なな","はち","きゅう"];
	switch(currentFlag){
    case 1:
    	tempNum = Math.floor(Math.random() * 10);
      break;
    case 2:
    	tempNum = Math.floor(Math.random() * 100);
      break;
    case 3:
    	tempNum = Math.floor(Math.random() * 1000);
      break;
    case 4:
    	tempNum = Math.floor(Math.random() * 10000);
      break;
    case 5:
    	tempNum = Math.floor(Math.random() * 100000);
      break;
    case 6:
    	tempNum = Math.floor(Math.random() * 1000000);
      break;
    default: 
      break;
    }

    digits = getEveryNum(tempNum);
    //如果少一位的话重新生成
    if(digits.length!=currentFlag){
    	generateNumber();
    	return;
    }

    for (var i = digits.length - 1; i >= 0; i--) {
    	switch(i){
	    case 5:
	    	if(digits[i]==0){
	    		break;
	    	}
	    	if (digits[i]==1) {
	    		tip = tip + "じゅう ";
	    	}else{
	    		tip = tip + data[digits[i]]+ "じゅう ";
	    	}
	      break;
	    case 4:
	    	if(digits[i]==0){
	    		break;
	    	}
	    	tip = tip + data[digits[i]]+ "まん ";
	      break;
	    case 3:
	    	if(digits[i]==0){
	    		break;
	    	}
	    	if (digits[i]==1) {
	    		tip = tip + "せん ";
	    	}else if(digits[i]==3){
	    		tip = tip + data[digits[i]]+ "ぜん ";
	    	}else if(digits[i]==8){
	    		tip = tip + "はっせん ";
	    	}else{
	    		tip = tip + data[digits[i]]+ "せん ";
	    	}
	      break;
	    case 2:
	    	if(digits[i]==0){
	    		break;
	    	}
	    	if (digits[i]==1) {
	    		tip = tip + "ひゃく ";
	    	}else if(digits[i]==3){
	    		tip = tip + data[digits[i]]+ "びゃく ";
	    	}else if(digits[i]==6){
	    		tip = tip + "ろっぴゃく ";
	    	}else if(digits[i]==8){
	    		tip = tip + "はっぴゃく ";
	    	}else{
	    		tip = tip + data[digits[i]]+ "ひゃく ";
	    	}
	      break;
	    case 1:
	    	if(digits[i]==0){
	    		break;
	    	}
	    	if (digits[i]==1) {
	    		tip = tip + "じゅう ";
	    	}else{
	    		tip = tip + data[digits[i]]+ "じゅう ";
	    	}
	      break;
	    case 0:
	    	if(tip != "" && digits[i]==0){
	    		break;
	    	}
	    	tip = tip + data[digits[i]];
	      break;
	    default: 
	      break;
	    }
    	
    }

	
	numberSet[0] = tempNum;
	numberSet[1] = tip;
}

changebtn.onclick = function(){
	generateNumber();
	text.innerText = numberSet[0];
	tiptext.innerText = numberSet[1];
	tiptext.style.color = "#aacde1";
	
};
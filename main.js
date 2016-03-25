var newTpoic, newDate, topic, dateLabel, endD, divRunningMan;
var backgroundPhoto = new Array("timerBackground.jpg" ,"BirthdayParty.jpg", "BusinessEvent.jpg", "MemorialDay.jpg");
var secUnit = 1000;
var minUnit = secUnit * 60;
var hrUnit = minUnit * 60;
var dayUnit = hrUnit * 24;
var timeCounter;
var	imgPosCounter = 0;
var imgPos=-60;
var imgLeftBorder, imgRightBorder;
var imgWayToLeft = true;
var butFirstClick = true;

function setNewEvent(){
    newTopic = document.getElementById("newTopic");
    newDate = document.getElementById("newDate");
    topic = document.getElementById("topic");
    dateLabel = document.getElementById("date");
	divRunningMan = document.getElementById("divRunningMan");	
    endD = new Date(newDate.value);
    
    topic.innerHTML = newTopic.value; 
	if(butFirstClick == true){
    timeCounter = setInterval(showRemaining,1);
	butFirstClick = false;
	}
}

function showRemaining(){
    var now = new Date();
    var timeDifference = endD - now -8*60*60*1000;
    var days = Math.floor(timeDifference/dayUnit);
    var hours = (Math.floor((timeDifference%dayUnit) /hrUnit)); 
    var minius = Math.floor((timeDifference%hrUnit)/minUnit);
    var seconds = Math.floor((timeDifference%minUnit) / secUnit);
    imgLeftBorder = (document.body.clientWidth)/2 - 60;    
	imgRightBorder = (document.body.clientWidth)/2 - 180;  
	
    dateLabel.innerHTML = "還剩下 " + days + "天 " + hours + "時 " + minius + "分 " + seconds + "秒！";
	imgPosCounter++;
	setImgPosition();
}

function setEventBackground(){
    document.body.background = backgroundPhoto[eventSelect.value];
}

function setImgPosition(){
	if((imgPos+parseInt(imgLeftBorder)) == 0 ){
		imgWayToLeft = false;
		document.imgRunningMan.src = "RunningMan_R.gif"
	}
	else if(imgPos == parseInt(imgRightBorder)){
		imgWayToLeft = true;
		document.imgRunningMan.src = "RunningMan_L.gif"
	}
	//可以設定讓小人要跑多快
	if(imgPosCounter%1==0){
		if(imgWayToLeft){
			document.all.divRunningMan.style.marginLeft = (imgPos--) + "px";
		}
		else{
			document.all.divRunningMan.style.marginLeft = (imgPos++) + "px";
		}
	}
}
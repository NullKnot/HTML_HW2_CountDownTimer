var newTpoic, newDate, topic, dateLabel, endD;
var backgroundPhoto = new Array("BirthdayParty.jpg", "BusinessEvent.jpg", "MemorialDay.jpg");
var secUnit = 1000;
var minUnit = secUnit * 60;
var hrUnit = minUnit * 60;
var dayUnit = hrUnit * 24;
var timeCounter;

//建Listener版本confirBut.addEventListener("click", setNewEvent);
function setNewEvent(){
    newTopic = document.getElementById("newTopic");
    newDate = document.getElementById("newDate");
    topic = document.getElementById("topic");
    dateLabel = document.getElementById("date");
    endD = new Date(newDate.value);
    endD.setHours(0);
    
    topic.innerHTML = newTopic.value; 
    timeCounter = setInterval(showRemaining,1);
}

function showRemaining(){
    var now = new Date();
    var timeDifference = endD - now;
    var days = Math.floor(timeDifference/dayUnit);
    var hours = Math.floor((timeDifference%dayUnit) /hrUnit);
    var minius = Math.floor((timeDifference%hrUnit)/minUnit);
    var seconds = Math.floor((timeDifference%minUnit) / secUnit);
        
    dateLabel.innerHTML = "還剩下 " + days + "天 " + hours + "時 " + minius + "分 " + seconds + "秒！";
}

//建Listener版本eventSelect.addEventListener("change", setEventBackground);
function setEventBackground(){
    document.body.background = backgroundPhoto[eventSelect.value];
}
//ps：選擇圖片的語法
//"url('" + bgSelect.value + ".jpg')"

var loc = window.location;
var wsStart = 'ws://'
if (loc.protocol == 'https:') {
    wsStart = 'wss://'
}
var endpoint = wsStart + loc.host + '/ws'
var socket = new WebSocket(endpoint)

const uid = $('#uid').text();
const person_id = uid;

var users = [
    {
        "name" : "Thomas",
        "uid" : null,
        "name" : 'Thomas',
        "avatar" : "https://i.ibb.co/0s74kVh/zac-m-wright-healthcare-consultant-avatar-Head-tilt-April-2020.png",
    },
    {
        "name" : "Julie",
        "uid" : null,
        "name" : 'Julie',
        "avatar" : "https://i.ibb.co/QjnzbK0/unnamed.png",
        
    }]

all_users = []

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, date){
    var control;
    
    if (who === uid){
        control = '<li>' +
                        '<div class="msj macro">' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p style="color:white;"><small>'+ date + '</small></p>' +
                            '</div>' +
                            '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ users[person_id].avatar +'" /></div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li>' +
        // '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" />' +                                
        '<div class="msj-rta macro">' +
        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ users[who].avatar +'" /></div>' +

                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+ date + ' - ' + users[who].name + '</small></p>' +
                            '</div>' +
                            '</div>' +
                  '</li>';
    }
    $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
}


// note: listens to click
$(".send-button").click(function(event) {
    checkInput()    
})

$("#enter-button").keydown((event) => {
    if (event.key === "Enter") {
        checkInput();
    }
})

function checkInput() {
    const text = $('.mytext').val();
    if (text != "") {
        const date = formatAMPM(new Date())
        socket.send("{ \"text\" : \"" + text + "\", \"date\" : \"" + date + "\", \"uid\" : \"" + uid + "\"}");
        $('.mytext').val("");
    }
}


// VARIABLES 
var checked = false;


socket.onopen = function (e) {
    console.log("open", e);

}

socket.onmessage = function(msg) {
    var rec = JSON.parse(msg.data);
    
    if (rec.video !== undefined) {

        if (rec.video === 'true') {
            startVideo(rec.uid)
        } else {
            endVideo(rec.uid)
        }

    } else {
        insertChat(rec.uid, rec.text, rec.date);              
    }
}

socket.oneerror = function(e) {
    console.log("error", e)
}

socket.onclose = function(e) {
    console.log('close', e)
}



// Note: video stream 
const video = document.getElementById('video');
const support = document.getElementById('support');

const constraints = {
    audio : true,
    video : {
        width: 500, 
        height: 500
    }
}

if (window.streamCount === undefined) {
    window.streamCount = 0;
}


$('.start-video').click(() => {
    socket.send("{ \"video\" : \"" + true + "\", \"uid\" : \"" + uid + "\"}");
    $("ul").css('top', '55%');
    $(".start-video").css('display', 'none');
    $(".end-video").css('display', 'block');
})

$('.end-video').click(() => {
    socket.send("{ \"video\" : \"" + false + "\", \"uid\" : \"" + uid + "\"}");
    $(".start-video").css('display', 'block');
    $(".end-video").css('display', 'none');

   
})

function startVideo(target_uid) {
    init(target_uid);
    window.streamCount += 1;
    $("ul").css('top', '55%');
}

function endVideo(target_uid) {
    if (parseInt(target_uid) === 0) {
        window.stream = null;
        video.srcObject = null;
    } else {
        window.stream = null;
        support.srcObject = null
    }
    window.streamCount -= 1 
    if (window.streamCount === 0) {
        $("ul").css('top', '10%');
    }
}



async function init(target_uid) {
    try {
        if (parseInt(target_uid) === 0) {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            window.stream = stream;
            video.srcObject = stream;
        } else {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            window.stream = stream;
            support.srcObject = stream;
        }
    } catch (e) {
        console.log(e)
    }
}


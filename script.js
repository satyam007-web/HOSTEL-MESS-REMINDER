if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

let breakfast = "08:00";
let lunch = "13:00";
let dinner = "20:00";

function checkMealTime() {

    let now = new Date();

    let currentHour =
        String(now.getHours()).padStart(2,'0');

    let currentMinute =
        String(now.getMinutes()).padStart(2,'0');

    let currentTime =
        currentHour + ":" + currentMinute;

    if(currentTime === breakfast){
        new Notification("🍳 Breakfast Time! Go to Mess");
    }

    if(currentTime === lunch){
        new Notification("🍛 Lunch Time! Go to Mess");
    }

    if(currentTime === dinner){
        new Notification("🍽 Dinner Time! Go to Mess");
    }
}

setInterval(checkMealTime,60000);
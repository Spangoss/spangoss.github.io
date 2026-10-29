window.onload = function () {

    var birthday = new Date('1983-03-26');
    var today = new Date();
    var currentYear = today.getFullYear();
    var thisYearsBirthday = new Date(birthday).setFullYear(currentYear);
    var hasBirthdayHappenedThisYear = checkDateInPast(thisYearsBirthday);
    var nextBirthday = new Date(thisYearsBirthday);
    var age = currentYear - birthday.getFullYear();

    if (hasBirthdayHappenedThisYear) {
        nextBirthday.setFullYear(currentYear + 1);
    } else {
        age = currentYear - birthday.getFullYear() - 1;
    }

    document.getElementById("my-age").innerHTML = age;
    var options = { month: 'short', day: 'numeric' };
    document.getElementById("birthday").innerHTML = birthday.toLocaleDateString("en-US", options);

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = nextBirthday - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown-days").innerHTML = days;
        document.getElementById("countdown-hours").innerHTML = hours;
        document.getElementById("countdown-minutes").innerHTML = minutes;
        document.getElementById("countdown-seconds").innerHTML = seconds;

    }, 1000, nextBirthday);

};

function checkDateInPast(date) {
    var now = new Date().getTime();
    return (now > date);
}


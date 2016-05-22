;(function () {
    var button = document.getElementById("sendButton");

    function validateContactData(name, email) {
        var nameFilter = /^[a-zA-Z\-'\s]+$/;
        var emailFilter = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|hu)\b/;
        return nameFilter.test(name) && emailFilter.test(email);
    }

    function sendMessage() {
        var name = document.getElementById('visitorName');
        var email = document.getElementById('visitorEmail');
        if (validateContactData(name.value, email.value) ) {
            alert("Your message was sent to me!");
        } else {
            alert("Please provide valid contact data!")
        }
    }

    button.addEventListener("click", sendMessage);
})();

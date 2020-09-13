var user = /** @class */ (function () {
    function user(firstName, phone, email, password) {
        this.firstName = firstName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.fullName = firstName;
    }
    return user;
}());
var greeter = function (person) {
    return "Hello, " + person.firstName;
};
var validateForm = function () {
    var firstName = document.forms["reg"]["name"].value;
    var s = "";
    var patt1 = /[0-9]/g;
    var patt2 = /[!@#$%^&*]/g;
    var patt3 = /[a-zA-Z]/g;
    var result = firstName.match(patt1);
    if (firstName.match(patt1) || firstName.match(patt2) || firstName.length < 2) {
        s = s + "enter valid name \n";
        document.getElementById("name_error").innerHTML = "error";
    }
    if (firstName == "") {
        s = s + "First Name must be filled out \n";
        document.getElementById("name_error").innerHTML = "Please Enter your first name";
    }
    var phone = document.forms["reg"]["phone"].value;
    if (phone == "") {
        s = s + "Phone number must be valid filled out \n";
        document.getElementById("phone_error").innerHTML = "Please Enter valid your Phone number";
    }
    if (phone.length < 10 || phone.length > 10) {
        s = s + "Phone number must be valid length \n";
        document.getElementById("phone_error").innerHTML = "Please Enter valid Phone number";
    }
    if (phone.match(patt3)) {
        s = s + "Phone number must be valid  \n";
        document.getElementById("phone_error").innerHTML = "Please Enter valid Phone number";
    }
    var email = document.forms["reg"]["email"].value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "") {
        s = s + "email must be filled out \n";
        document.getElementById("email_error").innerHTML = "Please Enter your Email";
    }
    if (!email.match(mailformat)) {
        s = s + "email must be valid \n";
        document.getElementById("email_error").innerHTML = "Please Enter your valid Email ";
    }
    var pass = document.forms["reg"]["password"].value;
    if (pass == "") {
        s = s + "password must be filled out \n";
        document.getElementById("pass_error").innerHTML = "Please Enter your Password";
    }
    if (pass.length < 8) {
        s = s + "password must be 8 character long \n";
        document.getElementById("pass_error").innerHTML = "Please Enter 8 digit Password";
    }
    if (!pass.match(patt1)) {
        s = s + "password must be contain atleast one digit \n";
        document.getElementById("pass_error").innerHTML = "Please Enter atleast 1 digit ";
    }
    if (!pass.match(patt2)) {
        s = s + "password must be contain atleast one special character \n";
        document.getElementById("pass_error").innerHTML = "Please Enter atleast 1 special character ";
    }
    if (!pass.match(patt3)) {
        s = s + "password must be contain atleast one Alphabet \n";
        document.getElementById("pass_error").innerHTML = "Please Enter atleast 1 Alphabet ";
    }
    var pass_c = document.forms["reg"]["confirm_pass"].value;
    if (pass_c !== pass) {
        s = s + "confirm your password\n";
        document.getElementById("confirm_error").innerHTML = "confirm your password";
    }
    if (s != "") {
        alert(s);
        return false;
    }
    else {
        var object = new user(firstName, phone, email, pass);
        var str = document.getElementById("result_display").innerHTML;
        document.getElementById("result_display").innerHTML = str + "<br>" + greeter(object) + "<br> You can Log in now.";
        return true;
    }
};

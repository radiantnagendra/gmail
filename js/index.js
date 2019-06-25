console.log('outside');

function Submit() {
    console.log('inside');
    var name = document.getElementById('firstname').value;
    var phonenum = document.getElementById('phonenum').value;
    var phregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var email = document.getElementById('usermail').value;
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var pword = document.getElementById('pass').value;
    var fakepwd = document.getElementById('fakepass').value;

    if (name === '') {
        $('.firstnameerr').css('display', 'block');
        $('.name').css('border', '2px solid #d50000');
        //  $(".firstnameerr, .name").css("display:block", "border:1px solid red");

    } else {
        $('.firstnameerr').css('display', 'none');
        $('.name').css('border', '2px solid #cacaca');
        // document.getElementById('firstname').style.border = "1px solid #cacaca";
    }

    if (phonenum === '') {
        $('.phonenum').css('display', 'block');
        $('.ph').css('border', '2px solid #d50000');
        // document.getElementById('phonenum').style.borderColor = "red";
    } else {
        $('.phonenum').css('display', 'none');
        $('.ph').css('border', '2px solid #cacaca');
        // document.getElementById('phonenum').style.border = "1px solid #cacaca";
    }

    if (!phregex.test(phonenum)) {
        $('.phonenum').css('display', 'block');
        $('.ph').css('border', '2px solid #d50000');
        // document.getElementById('phonenum').style.borderColor = "red";
    } else {
        $('.phonenum').css('display', 'none');
        $('.ph').css('border', '2px solid #cacaca');
        // document.getElementById('phonenum').style.border = "1px solid #cacaca";
    }

    if (email === '') {
        $('.usermail').css('display', 'block');
        $('.mail').css('border', '2px solid #d50000');
        // document.getElementById('usermail').style.borderColor = "red";
    } else {
        $('.usermail').css('display', 'none');
        $('.mail').css('border-color', '#cacaca');
        // document.getElementById('usermail').style.border = "1px solid #cacaca";
    }

    if (!regex.test(email)) {
        $('.usermail').css('display', 'block');
        $('.mail').css({ "border-color": "rgb(213, 0, 0)", "border-width": "2px 0px 2px 2px", "border-style": "solid" });
    } else {
        $('.usermail').css('display', 'none');
        $('.mail').css('border-color', '#cacaca');
        // document.getElementById('usermail').style.border = "1px solid #cacaca";
    }

    if (!regex.test(email)) {
        $('.gmail').css({ "border-color": "rgb(213, 0, 0)", "border-width": "2px 2px 2px 0px", "border-style": "solid" });
    } else {
        $('.gmail').css('border-color', '#cacaca');
        // document.getElementById('usermail').style.border = "1px solid #cacaca";
    }

    if (pword === '') {
        $('.pass').css('display', 'block');
        $('.psd1').css('border', '2px solid #d50000');
        // document.getElementById('pass').style.borderColor = "red";
    } else {
        $('.pass').css('display', 'none');
        $('.psd1').css('border-color', '#cacaca');
        // document.getElementById('pass').style.border = "1px solid #cacaca";
    }

    if (fakepwd === '') {
        $('.fakepass').css('display', 'block');
        $('.psd2').css('border', '2px solid #d50000');
        //document.getElementById('fakepass').style.border = "1px solid red";
    } else {
        $('.fakepass').css('display', 'none');
        $('.psd2').css('border-color', '#cacaca');
        //document.getElementById('fakepass').style.border = "1px solid #cacaca";
    }

}

function passFunction() {
    var x = document.getElementById("pass");
    var y = document.getElementById("fakepass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

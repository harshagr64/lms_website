function signup_form() {
    let name = document.getElementById('name_input').value.trim();
    let email = document.getElementById('email_input').value.trim();
    let password = document.getElementById('pass_input').value.trim();
    let con_password = document.getElementById('pass_input_confirm').value.trim();


    if (name.length == 0 || email.length == 0 || password.length == 0) {
        alert("Please enter valid details");
        return;
    }
    else if (!email_validation(email)) {
        alert("Please Enter a valid Email ID");
        return;
    }
    else if (password.length < 8) {
        alert("Password must contain atleasr 8 characters");
        return;
    } else if (password != con_password) {
        alert("Password & confirm password does not match");
        return;
    } else {
        // all validation are passed
        $.ajax({
            method: "post",
            url: "../php_code/register_code.php",
            data: {
                name: name,
                email: email,
                password: password
            },
            success: function (html) {
                $("#data").text("");
                $("#data").prepend(html);
            }

        });

    }

}

function signin_form() {
    // alert("hello");
    let email = document.getElementById('email_input').value.trim();
    let password = document.getElementById('password_input').value.trim();

    if (email.length == 0 || password.length == 0) {
        alert("Please enter valid details");
    } else if (!email_validation(email)) {
        alert("Please Enter a valid Email ID");
        return;
    } else if (password.length < 8) {
        alert("Password must contain atleasr 8 characters");
        return;
    } else {
        $.ajax({
            method: "post",
            url: "../php_code/login_code.php",
            data: {
                email: email,
                password: password,
            },
            success: function (html) {
                $("#data").text("");
                $("#data").prepend(html);
            }
        });
    }

}

//validate email using RegEx
function email_validation(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
        const email1Span = $("#email_1_span");
        const email2Span = $("#email_2_span");
        const firstNameSpan = $("#first_name_span");
    
        // create an error message and set it to an empty string
        let errorMessage = "";

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
            email1Span.textContent = "First email is required.";
        }else if(email1.value != ""){
            email1Span.textContent = "*";
        }
    
        if (email2.value == "") { 
            email2Span.textContent = "Second email is required.";
        }else if(email2.value != ""){
            email1Span.textContent = "*";
        }
    
    
        if (email1.value != email2.value) { 
            email2Span.textContent = "Both emails must match.";
        }else if(email1.value == email2.value && email2.value != ""){
            email2Span.textContent = "*";
        }
    
        if (firstName.value == "") {
            firstNameSpan.textContent = "First name is required.";
        } else if(firstName.value != ""){
            firstNameSpan.textContent = "*"
        }
    
        // submit the form if error message is an empty string
        if (email1Span.textContent == "*" && email2Span.textContent == "*" && firstNameSpan.textContent == "*") {
            $("#email_form").submit();
        } else {
            console.log("User has not fixed mistakes")
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});
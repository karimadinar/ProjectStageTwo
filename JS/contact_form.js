// EMAILJS - Sending E-mails (SMTP)
/*--- INIATE EMAIL.JS LIBRARY (CDN) ---*/

(function () {
    emailjs.init('user_G25UzTcpj0eEnI8n4E3CI');
})();

/*-- SERVICE ID --*/
const service_id = 'service_4qkcmuq';
/*-- TEMPLATE ID --*/
const template_id = 'template_tejgfqk';

/*--- INITIATE FORM INFO ---*/
/*var templateParams = {
    from_name: 'Mounir el bertouli',
    to_name: 'pergola.339mb@gmail.com',
          message: 'Hey from JavaScript client-side via Email.JS',
    occupation: 'Software Enginner'
};*/

/*--- SEND E-MAIL FUNCTION ---*/

const sendMail = (templateParams) => {
    emailjs.send(service_id, template_id, templateParams)
        .then(function (response) {
            /*console.log('SUCCESS!', response.status, response.text);*/
            console.log(response)
            return true;
        }, function (error) {
            //console.log('FAILED...', error);
            console.log(error)
            return false;
        });
};



// SUBMIT CONTACT FORM
const contact_form = document.getElementById('contact-form');
const submit_form = (e) => {
    e.preventDefault();

    // FORM INPUTS
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    /*--- DATA OBJECT ---*/
    const form_data = {};

    // FORM VALIDATOR 
    (function () {
        if (fullName.value == "" || email.value == "" || phone.value == "" || message.value == "") {
            swal({
                title: "oops!",
                text: "Form Input are required!",
                icon: "danger",
                button: "Got it",
              });
            return;
        } else {
            form_data.fullName = fullName.value;
            form_data.email = email.value;
            form_data.phone = phone.value;
            form_data.message = message.value;
        }
    })()

    if (!sendMail(form_data)) {
        swal({
            title: "Thank you, " + fullName.value,
            text: "You've sent Message Successfully, We will reply to you later.",
            icon: "success",
            button: "Got it",
          });
        return;
    } else {
        swal({
            title: "oops!",
            text: "Ooops! Something Went Wrong! Try again later",
            icon: "danger",
            button: "Got it",
          })
        return;
    }
};

contact_form.addEventListener('submit', submit_form);

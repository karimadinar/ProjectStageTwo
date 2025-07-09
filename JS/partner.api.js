// SENDING PARTNER INFO FORM THROUGH API 
(function() {
    emailjs.init('user_G25UzTcpj0eEnI8n4E3CI');
})();
// EMAILJS CONFIGURTION
const email_config = {
    service_id: 'service_4qkcmuq',
    template_id: 'template_qx436hn'
};




$('#partner-forms').submit(async e => {
    e.preventDefault();
    let data = {};
    const unindexed_arr = $('#partner-forms').serializeArray();

    //console.log(unindexed_arr);
    $.map(unindexed_arr, function (n, i) 
        { data[n.name] = n.value }
    );

    const email_obj ={
        partner_company: data.company,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        partner_email: data.email,
        codeArea: data.code_area,
        phoneNumber: data.phone_number,
        partner_rue: data.partner_rure,
        partner_lien: data.lien,
        code_postal: data.code_postal,
        partner_country: data.country,
        truck_bache: data.truck_bache,
        truck_head: data.truck_head,
        truck_carousel: data.truck_carousel
    }

    emailjs.send(email_config.service_id, email_config.template_id, email_obj)
        .then(function (response) {
            /*console.log('SUCCESS!', response.status, response.text);*/
            console.log(response)
            return true;
        }, function (error) {
            //console.log('FAILED...', error);
            console.log(error)
            return false;
        });

    /*await fetch('http://localhost:8080/api/v1/mail', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(data => {
            if(data.status === 200) {
                console.log(data);
            } else if (data.status === 400) {
                return console.log(data.msg)
            } else {
                return console.log(data.msg);
            }
        })*/
});
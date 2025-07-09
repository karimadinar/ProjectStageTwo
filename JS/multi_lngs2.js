// MULTI LANGUAGES SART -- CREATING A CLASS 
const ele_langs = {
    eng: {
        navigation: {
            home: 'Home',
            about: 'About us',
            contact: 'contact us'
        },
        form: {
            form_title: 'Contact us',
            label1: 'Full Name',
            label2: 'Adresse E-mail',
            label3: 'Phone Number',
            inp1: 'Enter Your full name',
            inp2: 'Enter your e-mail address',
            inp3: 'Enter your phone number',
            form_btn: 'Send'
        },

        info_title: 'Contact Information',
        footer: {
            links: 'Links',
            services: 'Services'
        }

    },
    esp: {
        navigation: {
            home: 'bienvenida',
            about: 'Sobre nosotras',
            contact: 'contacto'
        },
        form: {
            form_title: 'Contacta con nosotras',
            label1: 'nombre completo',
            label2: 'correo electronico',
            label3: 'Número de teléfono',
            inp1: 'ingrese su nombre completo',
            inp2: 'Introduce tu correo electrónico',
            inp3: 'Ingrese su número telefónico',
            form_btn: 'enviar'
        },

        info_title: 'Información del contacto',
        footer: {
            links: 'Enlaces',
            services: 'Servicios'
        }

    },
    fra: {
        navigation: {
            home: 'Accueille',
            about: 'à propos de nous',
            contact: 'Nous contacter'
        },
        form: {
            form_title: 'Nous contacter',
            label1: 'Nom et prénom',
            label2: 'Address e-mail',
            label3: 'Numero de telephone',
            inp1: 'Entrez votre Nom et prenom',
            inp2: 'Entrez votre e-mail address',
            inp3: 'Entrez votre numéro de téléphone',
            form_btn: 'envoyer'
        },

        info_title: 'informations de contact',
        footer: {
            links: 'Liens',
            services: 'Prestations de service'
        }

    }
}

class Translate {
    constructor() {
        document.getElementById('eng').addEventListener('click', () => {
            this.translate('english');
        })

        document.getElementById('esp').addEventListener('click', () => {
            this.translate('espain');
        })

        document.getElementById('fr').addEventListener('click', () => {
            this.translate('francais');
        })

        this.translate(localStorage.getItem('language'));
    }

    // METHODS
    translate(language) {
        if(language == 'english') {

            // NAVIGATION
            document.getElementById('cn-home').innerText = ele_langs.eng['navigation'].home;
            document.getElementById('cn-about').innerText = ele_langs.eng['navigation'].about;
            document.getElementById('cn-contact').innerText = ele_langs.eng['navigation'].contact;

            // FORM AREA
            document.getElementById('form-title').innerText = ele_langs.eng['form'].form_title;
            document.getElementById('label-np').innerText = ele_langs.eng['form'].label1;
            document.getElementById('label-ae').innerText= ele_langs.eng['form'].label2;
            document.getElementById('label-nt').innerText = ele_langs.eng['form'].label3;
            document.getElementById('btn-env').innerText = ele_langs.eng['form'].form_btn;
            document.getElementById('fullName').placeholder = ele_langs.eng['form'].inp1;
            document.getElementById('email').placeholder = ele_langs.eng['form'].inp2;
            document.getElementById('phone').placeholder = ele_langs.eng['form'].inp3;

            // INFORMATION INFO
            document.getElementById('in-title').innerText = ele_langs.eng['info_title'];

            // FOOTER LINKS
            document.getElementById('cn-links').innerText = ele_langs.eng.footer.links;
            document.getElementById('cn-services').innerText = ele_langs.eng.footer.services;

        } else if (language == 'espain') {
            // NAVIGATION
            document.getElementById('cn-home').innerText = ele_langs.esp['navigation'].home;
            document.getElementById('cn-about').innerText = ele_langs.esp['navigation'].about;
            document.getElementById('cn-contact').innerText = ele_langs.esp['navigation'].contact;

            // FORM AREA
            document.getElementById('form-title').innerText = ele_langs.esp['form'].form_title;
            document.getElementById('label-np').innerText = ele_langs.esp['form'].label1;
            document.getElementById('label-ae').innerText = ele_langs.esp['form'].label2;
            document.getElementById('label-nt').innerText = ele_langs.esp['form'].label3;
            document.getElementById('btn-env').innerText = ele_langs.esp['form'].form_btn;
            document.getElementById('fullName').placeholder = ele_langs.esp['form'].inp1;
            document.getElementById('email').placeholder = ele_langs.esp['form'].inp2;
            document.getElementById('phone').placeholder = ele_langs.esp['form'].inp3;

            // INFORMATION INFO
            document.getElementById('in-title').innerText = ele_langs.esp['info_title'];
            // FOOTER LINKS
            document.getElementById('cn-links').innerText = ele_langs.esp.footer.links;
            document.getElementById('cn-services').innerText = ele_langs.esp.footer.services;
        } else if (language == 'francais') {
            // NAVIGATION
            document.getElementById('cn-home').innerText = ele_langs.fra['navigation'].home;
            document.getElementById('cn-about').innerText = ele_langs.fra['navigation'].about;
            document.getElementById('cn-contact').innerText = ele_langs.fra['navigation'].contact;

            // FORM AREA
            document.getElementById('form-title').innerText = ele_langs.fra['form'].form_title;
            document.getElementById('label-np').innerText = ele_langs.fra['form'].label1;
            document.getElementById('label-ae').innerText = ele_langs.fra['form'].label2;
            document.getElementById('label-nt').innerText = ele_langs.fra['form'].label3;
            document.getElementById('btn-env').innerText = ele_langs.fra['form'].form_btn;
            document.getElementById('fullName').placeholder = ele_langs.fra['form'].inp1;
            document.getElementById('email').placeholder = ele_langs.fra['form'].inp2;
            document.getElementById('phone').placeholder = ele_langs.fra['form'].inp3;

            // INFORMATION INFO
            document.getElementById('in-title').innerText = ele_langs.fra['info_title'];

            // FOOTER LINKS
            document.getElementById('cn-links').innerText = ele_langs.fra.footer.links;
            document.getElementById('cn-services').innerText = ele_langs.fra.footer.services;
        }
    }
}

onload = new Translate();
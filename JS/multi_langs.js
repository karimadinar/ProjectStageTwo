// MULTI LANGUAGES SART -- CREATING A CLASS 
const ele_languages = {
    eng: {
        title: 'Choosing JANOU TRANS as a transporter means choosing professionalism and security for your goods',
        desc: 'We are honored to help you grow your business.',
        btn: 'Contact Us',
        btn1: 'Become Partner',
        bnr_title: 'Our Client is a King',
        label_cerf: 'Certificates',
        title_cerf: 'Welcome To Programming World',
        desc_cerf: 'Read about Janou Transports Services',
        btn_cerf: 'Read More',
        label_locations: 'Locations',
        about: {
            label_about: 'About us',
            title_about: 'Know about us , how we can achieve our work.',
            desc_about: 'Know more about us , to demonstrate to you the guideline.',
            btn_about: 'Read more'
        },
        turn: {
            label_turn: 'Turn over',
            sec1: {clients_title: '+130 Clients', clients_desc: 'Janou Served more than 130 clients around the world.'},
            sec2: {clients_title: '+350K Delivery', clients_desc: 'Janou Served more than 350K delivery around the world.'},
            sec3: {clients_title: '+30 partners', clients_desc: 'Janou contributed with +30 around the world.'},
        },
        ptnr_title: 'Partners',
        footer: {
            links: 'Links',
            services: 'Services'
        },
        navigations: {
            link1: 'Home',
            link2: 'Our services',
            link3: 'About us',
            link4: 'Contact us',
            dropDown: {lnk1: 'Truck transport', lnk2: 'Refrigerated', lnk3: 'Vegetable transport', lnk4: 'Transport ADR'}
        },
        copy_right: 'All rights reserved by Janou Transport',
    },
    esp: {
        title: 'Elegir JANOU TRANS como transportista significa elegir profesionalismo y seguridad para sus bienes',
        desc: 'Nos sentimos honrados de ayudarlo a hacer crecer su negocio.',
        btn: 'Contacta con nosotras',
        btn1: 'Convertirse en socio',
        bnr_title: 'Nuestro cliente es un rey',
        label_cerf: 'Certificados',
        title_cerf: 'Bienvenido al mundo de la programación',
        desc_cerf: 'Servicios de transporte en savoir plus sur Janou',
        btn_cerf: 'Lee mas',
        label_locations: 'ubicaciones',
        about: {
            label_about: 'Sobre nosotras',
            title_about: 'Sepa sobre nosotras, cómo podemos lograr nuestro trabajo.',
            desc_about: 'Conozca más sobre nosotros, para demostrarle la guía.',
            btn_about: 'Lee mas'
        },
        turn: {
            label_turn: "Gasa de negocios",
            sec1: {clients_title: '+130 Rotación', clients_desc: 'Janou atendió a más de 130 clientes en todo el mundo.'},
            sec2: {clients_title: '+350K Entrega', clients_desc: 'Janou realizó más de 350.000 envíos en todo el mundo.'},
            sec3: {clients_title: '+30 socias', clients_desc: 'Janou contribuyó con +30 en todo el mundo.'},
        },
        ptnr_title: 'socias',
        footer: {
            links: 'Enlaces',
            services: 'Servicios'
        },
        navigations: {
            link1: 'bienvenida',
            link2: 'Nuestros servicios',
            link3: 'Sobre nosotras',
            link4: 'Contacta con nosotras',
            dropDown: {lnk1: 'Transporte de camiones', lnk2: 'Refrigerada', lnk3: 'Transporte de verduras', lnk4: 'Transporte ADR'}
        },
        copy_right: 'Todos los derechos reservados por Janou Transport',
    },
    fra: {
        title: "Choisir JANOU TRANS comme transporteur, c'est choisir professionnalisme et sécurité pour vos marchandises",
        desc: 'Nous sommes honorés de vous aider à développer votre entreprise.',
        btn: 'Nous contacter',
        btn1: 'Devenir Partenaire',
        bnr_title: 'Notre Client Est un Roi',
        label_cerf: 'Certificats',
        title_cerf: 'Bienvenue dans le monde de la programmation',
        desc_cerf: 'Services de transport en savoir plus sur Janou',
        btn_cerf: 'Lire la suite',
        label_locations: 'Emplacements',
        about: {
            label_about: 'À propos de nous',
            title_about: 'Connaître nous, comment nous pouvons réaliser notre travail.',
            desc_about: 'En savoir plus sur nous, pour vous démontrer la ligne directrice.',
            btn_about: 'Lire la suite'
        },
        turn: {
            label_turn: "Chiffre d'affaires",
            sec1: {clients_title: '+130 Clientes', clients_desc: 'Janou A servi plus de 130 clients à travers le monde.'},
            sec2: {clients_title: '+350K Livraison', clients_desc: 'Janou A servi plus de 350 000 livraisons à travers le monde.'},
            sec3: {clients_title: '+30 les partenaires', clients_desc: 'Janou a contribué avec +30 à travers le monde.'},
        },
        ptnr_title: 'les partenaires',
        footer: {
            links: 'Liens',
            services: 'Prestations de service'
        },
        navigations: {
            link1: 'Accueille',
            link2: 'Nos prestations',
            link3: 'À propos de nous',
            link4: 'Space Client',
            dropDown: {lnk1: 'Transport routier', lnk2: 'Frigorifique', lnk3: 'Transport de legume', lnk4: 'Transport ADR'}
        },
        copy_right: 'Tous droits réservés par JanouTransport'
    }
}



class Translate {
    constructor() {
        document.getElementById('eng').addEventListener('click', () => {
            this.translate_lng('english');
        })
        document.getElementById('esp').addEventListener('click', () => {
            this.translate_lng('espain');
        })

        document.getElementById('fr').addEventListener('click', () => {
            this.translate_lng('francais');
        })

        this.translate_lng(localStorage.getItem('language'));
    }
    // METHODS

    translate_lng(language) {
        // CHECK IF THE LANGUAGE (AR - FR - ES)
        if(language == 'english') {
            document.getElementById('show-case-title').innerText = ele_languages.eng.title;
            document.getElementById('show-case-btn2').innerText = ele_languages.eng.btn1;
            document.getElementById('show-case-desc').innerText = ele_languages.eng.desc;
            document.getElementById('show-case-btn').innerText = ele_languages.eng.btn;
            document.getElementById('bn-title').innerText = ele_languages.eng.bnr_title;
            document.getElementById('bx-label-cerf').innerText = ele_languages.eng.label_cerf;
            document.getElementById('bx-title-cerf').innerText = ele_languages.eng.title_cerf;
            document.getElementById('bx-desc-cerf').innerText = ele_languages.eng.desc_cerf;
            document.getElementById('bx-btn-cerf').innerText = ele_languages.eng.btn_cerf;
            document.getElementById('bx-label-locations').innerText = ele_languages.eng.label_locations;
            document.getElementById('bx-label-about').innerText = ele_languages['eng']['about'].label_about;
            document.getElementById('bx-title-about').innerText = ele_languages['eng']['about'].title_about;
            document.getElementById('bx-desc-about').innerText = ele_languages['eng']['about'].desc_about;
            document.getElementById('bx-btn-about').innerText = ele_languages['eng']['about'].btn_about;
            document.getElementById('bx-label-turn').innerText = ele_languages['eng']['turn'].label_turn;
            // BX 1
            document.getElementById('bx-turn-title-1').innerText = ele_languages['eng']['turn'].sec1.clients_title;
            document.getElementById('bx-turn-desc-1').innerText = ele_languages['eng']['turn'].sec1.clients_desc;

            // BX 2
            document.getElementById('bx-turn-title-2').innerText = ele_languages['eng']['turn'].sec2.clients_title;
            document.getElementById('bx-turn-desc-2').innerText = ele_languages['eng']['turn'].sec2.clients_desc;

            // BX 3
            document.getElementById('bx-turn-title-3').innerText = ele_languages['eng']['turn'].sec3.clients_title;
            document.getElementById('bx-turn-desc-3').innerText = ele_languages['eng']['turn'].sec3.clients_desc;

            document.getElementById('links').innerText = ele_languages.eng.footer['links'];
            document.getElementById('services').innerText = ele_languages.eng.footer['services'];

            // NAVIGATION LINKS
            document.getElementById('home-link').innerText = ele_languages.eng['navigations'].link1;
            //document.getElementById('services-link').innerText = ele_languages.eng['navigations'].link2;
            document.getElementById('about-link').innerText = ele_languages.eng['navigations'].link3;
            document.getElementById('contact-link').innerText = ele_languages.eng['navigations'].link4;
            /*document.getElementById('dp-link1').innerText = ele_languages.eng['navigations'].dropDown['lnk1'];
            document.getElementById('dp-link2').innerText = ele_languages.eng['navigations'].dropDown['lnk2'];
            document.getElementById('dp-link3').innerText = ele_languages.eng['navigations'].dropDown['lnk3'];
            document.getElementById('dp-link4').innerText = ele_languages.eng['navigations'].dropDown['lnk4'];*/

            // COPY RIGHT
            document.getElementById('copy-right').innerText = ele_languages.eng.copy_right;

        } else if (language == 'espain') {
            document.getElementById('show-case-title').innerText = ele_languages.esp.title;
            document.getElementById('show-case-desc').innerText = ele_languages.esp.desc;
            document.getElementById('show-case-btn').innerText = ele_languages.esp.btn;
            document.getElementById('show-case-btn1').innerText = ele_languages.esp.btn1;
            document.getElementById('bn-title').innerText = ele_languages.esp.bnr_title;
            document.getElementById('bx-label-cerf').innerText = ele_languages.esp.label_cerf;
            document.getElementById('bx-title-cerf').innerText = ele_languages.esp.title_cerf;
            document.getElementById('bx-desc-cerf').innerText = ele_languages.esp.desc_cerf;
            document.getElementById('bx-btn-cerf').innerText = ele_languages.esp.btn_cerf;
            document.getElementById('bx-label-locations').innerText = ele_languages.esp.label_locations;
            document.getElementById('bx-label-about').innerText = ele_languages['esp']['about'].label_about;
            document.getElementById('bx-title-about').innerText = ele_languages['esp']['about'].title_about;
            document.getElementById('bx-desc-about').innerText = ele_languages['esp']['about'].desc_about;
            document.getElementById('bx-btn-about').innerText = ele_languages['esp']['about'].btn_about;
            document.getElementById('bx-label-turn').innerText = ele_languages['esp']['turn'].label_turn;
           // BX 1
           document.getElementById('bx-turn-title-1').innerText = ele_languages['esp']['turn'].sec1.clients_title;
           document.getElementById('bx-turn-desc-1').innerText = ele_languages['esp']['turn'].sec1.clients_desc;
           // BX 2
           document.getElementById('bx-turn-title-2').innerText = ele_languages['esp']['turn'].sec2.clients_title;
           document.getElementById('bx-turn-desc-2').innerText = ele_languages['esp']['turn'].sec2.clients_desc;
           // BX 3
           document.getElementById('bx-turn-title-3').innerText = ele_languages['esp']['turn'].sec3.clients_title;
           document.getElementById('bx-turn-desc-3').innerText = ele_languages['esp']['turn'].sec3.clients_desc;

           document.getElementById('partners-title').innerText = ele_languages.esp.ptnr_title;
           document.getElementById('links').innerText = ele_languages.esp.footer['links'];
            document.getElementById('services').innerText = ele_languages.esp.footer['services'];

            // NAVIGATION LINKS
            document.getElementById('home-link').innerText = ele_languages.esp['navigations'].link1;
            //document.getElementById('services-link').innerText = ele_languages.esp['navigations'].link2;
            document.getElementById('about-link').innerText = ele_languages.esp['navigations'].link3;
            document.getElementById('contact-link').innerText = ele_languages.esp['navigations'].link4;
            /*document.getElementById('dp-link1').innerText = ele_languages.esp['navigations'].dropDown['lnk1'];
            document.getElementById('dp-link2').innerText = ele_languages.esp['navigations'].dropDown['lnk2'];
            document.getElementById('dp-link3').innerText = ele_languages.esp['navigations'].dropDown['lnk3'];
            document.getElementById('dp-link4').innerText = ele_languages.esp['navigations'].dropDown['lnk4'];*/

            // COPY RIGHT
            document.getElementById('copy-right').innerText = ele_languages.esp.copy_right;

        } else if (language == 'francais') {
            document.getElementById('show-case-title').innerText = ele_languages.fra.title;
            document.getElementById('show-case-desc').innerText = ele_languages.fra.desc;
            document.getElementById('show-case-btn').innerText = ele_languages.fra.btn;
            document.getElementById('show-case-btn1').innerText = ele_languages.fra.btn1;
            document.getElementById('bn-title').innerText = ele_languages.fra.bnr_title;
            document.getElementById('bx-label-cerf').innerText = ele_languages.fra.label_cerf;
            document.getElementById('bx-title-cerf').innerText = ele_languages.fra.title_cerf;
            document.getElementById('bx-desc-cerf').innerText = ele_languages.fra.desc_cerf;
            document.getElementById('bx-btn-cerf').innerText = ele_languages.fra.btn_cerf;
            document.getElementById('bx-label-locations').innerText = ele_languages.fra.label_locations;
            document.getElementById('bx-label-about').innerText = ele_languages['fra']['about'].label_about;
            document.getElementById('bx-title-about').innerText = ele_languages['fra']['about'].title_about;
            document.getElementById('bx-desc-about').innerText = ele_languages['fra']['about'].desc_about;
            document.getElementById('bx-btn-about').innerText = ele_languages['fra']['about'].btn_about;
            document.getElementById('bx-label-turn').innerText = ele_languages['fra']['turn'].label_turn;
            // BX 1
            document.getElementById('bx-turn-title-1').innerText = ele_languages['fra']['turn'].sec1.clients_title;
            document.getElementById('bx-turn-desc-1').innerText = ele_languages['fra']['turn'].sec1.clients_desc;

            // BX 2
            document.getElementById('bx-turn-title-2').innerText = ele_languages['fra']['turn'].sec2.clients_title;
            document.getElementById('bx-turn-desc-2').innerText = ele_languages['fra']['turn'].sec2.clients_desc;
            // BX 3
            document.getElementById('bx-turn-title-3').innerText = ele_languages['fra']['turn'].sec3.clients_title;
            document.getElementById('bx-turn-desc-3').innerText = ele_languages['fra']['turn'].sec3.clients_desc;

            document.getElementById('partners-title').innerText = ele_languages.fra.ptnr_title;
            document.getElementById('links').innerText = ele_languages.fra.footer['links'];
            document.getElementById('services').innerText = ele_languages.fra.footer['services'];

            // NAVIGATION LINKS
            document.getElementById('home-link').innerText = ele_languages.fra['navigations'].link1;
            //document.getElementById('services-link').innerText = ele_languages.fra['navigations'].link2;
            document.getElementById('about-link').innerText = ele_languages.fra['navigations'].link3;
            document.getElementById('contact-link').innerText = ele_languages.fra['navigations'].link4;
            /*document.getElementById('dp-link1').innerText = ele_languages.fra['navigations'].dropDown['lnk1'];
            document.getElementById('dp-link2').innerText = ele_languages.fra['navigations'].dropDown['lnk2'];
            document.getElementById('dp-link3').innerText = ele_languages.fra['navigations'].dropDown['lnk3'];
            document.getElementById('dp-link4').innerText = ele_languages.fra['navigations'].dropDown['lnk4'];*/

            // COPY RIGHT
            document.getElementById('copy-right').innerText = ele_languages.fra.copy_right;
        }

        localStorage.setItem('language', language);
    }
}


onload = new Translate();
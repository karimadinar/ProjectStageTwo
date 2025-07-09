// MULTI LANGUAGES SART -- CREATING A CLASS 
const ele_langs = {
    eng: {
        // NAVIGATIONS
        navigations: {
            home: 'Home',
            about: 'About us',
            contact: 'Contact us'
        },

        // BLOCKS
        tl_title: "Vegetable Transport",
        block1: {
            title: "Secure transport solutions",
            desc: "The transport of perishable goods such as vegetables is subject to very strict regulations. These regulations mainly concern compliance with ideal ambient temperatures during transport. Of course, this varies depending on the products to be transported and stored. It can be fresh as well as frozen and frozen products. Choosing the right transport solution is therefore a necessity. With our company, Transports Janou, in business since 2009, you benefit from a solid experience in the field of international road transport. We study your requests and offer you fast and secure transfer alternatives."
        },

        block2: {
            title: "Food transport",
            desc: "At Transports JANOU, we support individuals and professionals in the transport of their food products. Working both nationally and internationally, we have the necessary technical resources to ensure all deliveries. We have a fleet of high-performance satellite-guided vehicles (refrigerated semi-trailers, semi-trailers, Through a high-performance communication system, we manage and monitor our operations in real time. We operate from the start. from SOUTH Morocco to all of Europe."
        },

        // FOOTER
        footer: {
            links: 'Links',
            services: 'Services'
        },

        copy_right: 'All Rights reserved by Janou Transport'
    },
    esp: {
        // NAVIGATIONS
        navigations: {
            home: 'bienvenida',
            about: 'Sobre nosotras',
            contact: 'contacto'
        },

        // BLOCKS
        tl_title: "Transporte de verduras",
        block1: {
            title: "Soluciones de transporte seguras",
            desc: "El transporte de productos perecederos como verduras está sujeto a regulaciones muy estrictas. Estas regulaciones se refieren principalmente al cumplimiento de las temperaturas ambientales ideales durante el transporte. Por supuesto, esto varía en función de los productos a transportar y almacenar. Puede ser tanto productos frescos como congelados y congelados. Por tanto, elegir la solución de transporte adecuada es una necesidad. Con nuestra empresa, Transports Janou, en el negocio desde 2009, se beneficia de una sólida experiencia en el campo del transporte internacional por carretera. Estudiamos tus solicitudes y te ofrecemos alternativas de traslado rápidas y seguras."
        },

        block2: {
            title: "Transporte de alimentos",
            desc: "En Transports JANOU apoyamos a particulares y profesionales en el transporte de sus productos alimenticios. Trabajando tanto a nivel nacional como internacional, contamos con los recursos técnicos necesarios para asegurar todas las entregas. Disponemos de una flota de vehículos guiados por satélite de alto rendimiento (semirremolques frigoríficos, semirremolques, A través de un sistema de comunicación de alto rendimiento, gestionamos y monitoreamos nuestras operaciones en tiempo real. Operamos desde el inicio. Desde el SUR de Marruecos hasta toda Europa."
        },

        // FOOTER
        footer: {
            links: 'Enlaces',
            services: 'Servicos'
        },

        copy_right: 'Todos los derechos reservados por Janou Transport'
    },
    fra: {
        // NAVIGATIONS
        navigations: {
            home: 'Accueil',
            about: 'À propos de nous',
            contact: 'Client Space'
        },

        // BLOCKS
        tl_title: "Transport de legume",
        block1: {
            title: "Des solutions de transport sécurisées",
            desc: "Le transport de denrées périssables telles que les légumes est soumis à des règlementations très strictes. Ces réglementations concernent essentiellement le respect des températures ambiantes idéales au transport. Bien entendu, cela varie en fonction des produits à transporter et à conserver. Il peut s’agir aussi bien de produits frais que de produits surgelés et produits congelés. Bien choisir la solution de transport est alors une nécessité. Avec notre entreprise, Transports Janou, en activité depuis 2009, vous bénéficiez d’une solide expérience dans le domaine du transport routier international. Nous étudions vos demandes et vous proposons des alternatives de transfert rapides et sécurisées."
        },

        block2: {
            title: "Transporte de alimentos",
            desc: " Chez Transports JANOU, nous accompagnons les particuliers et les professionnels dans le transport de leurs produits alimentaires. Intervenant aussi bien au niveau national qu’au niveau international, nous disposons des moyens techniques nécessaires pour assurer toutes livraisons. Nous disposons d’une flotte de véhicules performants guidés par satellite (semi-remorques frigo, semi-remorques, À travers un système de communication des plus performants, nous effectuons la gestion et le suivi de nos opérations en temps réels. Nous opérons au départ du SUD du maroc à destination de toute l’Europe."
        },

        // FOOTER
        footer: {
            links: 'Liens',
            services: 'Services'
        },

        copy_right: 'Tous droits réservés par JanouTransport'
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
            // NAVIGATIONS
            document.getElementById('tl-home').innerText = ele_langs.eng.navigations.home;
            document.getElementById('tl-about').innerText = ele_langs.eng.navigations.about;
            document.getElementById('tl-contact').innerText = ele_langs.eng.navigations.contact;

            // SECTION TITLE 
            document.getElementById('tl-title').innerText = ele_langs.eng.tl_title;

            // BLOCKs
            // BLOCK 1
            document.getElementById('bc-title1').innerText = ele_langs.eng.block1.title;
            document.getElementById('bc-desc1').innerText = ele_langs.eng.block1.desc;

            // BLOCK 2
            document.getElementById('bc-title2').innerText = ele_langs.eng.block2.title;
            document.getElementById('bc-desc2').innerText = ele_langs.eng.block2.desc;

            // FOOTER LINKS
            document.getElementById('tl-links').innerText =  ele_langs.eng.footer.links;
            document.getElementById('tl-services').innerText =  ele_langs.eng.footer.services;

            // COPY RIGHT 
            document.getElementById('copy-right').innerText = ele_langs.eng.copy_right;
        } else if (language == 'espain') {
             // NAVIGATIONS
             document.getElementById('tl-home').innerText = ele_langs.esp.navigations.home;
             document.getElementById('tl-about').innerText = ele_langs.esp.navigations.about;
             document.getElementById('tl-contact').innerText = ele_langs.esp.navigations.contact;
 
             // SECTION TITLE 
             document.getElementById('tl-title').innerText = ele_langs.esp.tl_title;
 
             // BLOCKs
             // BLOCK 1
             document.getElementById('bc-title1').innerText = ele_langs.esp.block1.title;
             document.getElementById('bc-desc1').innerText = ele_langs.esp.block1.desc;
 
             // BLOCK 2
             document.getElementById('bc-title2').innerText = ele_langs.esp.block2.title;
             document.getElementById('bc-desc2').innerText = ele_langs.esp.block2.desc;
 
             // FOOTER LINKS
             document.getElementById('tl-links').innerText =  ele_langs.esp.footer.links;
             document.getElementById('tl-services').innerText =  ele_langs.esp.footer.services;
 
             // COPY RIGHT 
             document.getElementById('copy-right').innerText = ele_langs.esp.copy_right;
        } else if(language == 'francais') {
             // NAVIGATIONS
             document.getElementById('tl-home').innerText = ele_langs.fra.navigations.home;
             document.getElementById('tl-about').innerText = ele_langs.fra.navigations.about;
             document.getElementById('tl-contact').innerText = ele_langs.fra.navigations.contact;
 
             // SECTION TITLE 
             document.getElementById('tl-title').innerText = ele_langs.fra.tl_title;
 
             // BLOCKs
             // BLOCK 1
             document.getElementById('bc-title1').innerText = ele_langs.fra.block1.title;
             document.getElementById('bc-desc1').innerText = ele_langs.fra.block1.desc;
 
             // BLOCK 2
             document.getElementById('bc-title2').innerText = ele_langs.fra.block2.title;
             document.getElementById('bc-desc2').innerText = ele_langs.fra.block2.desc;
 
             // FOOTER LINKS
             document.getElementById('tl-links').innerText =  ele_langs.fra.footer.links;
             document.getElementById('tl-services').innerText =  ele_langs.fra.footer.services;
 
             // COPY RIGHT 
             document.getElementById('copy-right').innerText = ele_langs.fra.copy_right;
        }
    }
}
onload = new Translate();
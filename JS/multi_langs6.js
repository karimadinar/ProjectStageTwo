// MULTI LANGUAGES SART -- CREATING A CLASS 
const ele_langs = {
    eng: {
        navigations: {
            home: 'Home',
            about: 'About us',
            contact: 'Contact us'
        },

        // BLOCKS
        td_title: "Transport ADR",
        td_sub_title: 'We are authorized to transport hazardous materials belonging to the following classes: CLASSES 2,3, 4.1, 4.2, 4.3, 5.1, 5.2, 6.1, 6.2, 8 and 9 ',
        block1: {
            //title: "Secure transport solutions",
            desc: "The transport of dangerous goods by road is a very specific activity of our profession ...",
            lists: {
                item1: "Our company specializes in the transport of hazardous materials by road and specific products classified ADR internationally.",
                item2: "We are authorized to manage and deliver all classes of goods representing danger.",
                item3: "To make your deliveries as efficient as possible, we have a team of drivers trained in specific transport and a fleet of approved vehicles."
            }
        },
        // FOOTER
        footer: {
            links: 'Links',
            services: 'Services'
        },

        copy_right: 'All Rights reserved by Janou Transport'

    },
    esp: {
        navigations: {
            home: 'Home',
            about: 'About us',
            contact: 'Contact us'
        },

        // BLOCKS
        td_title: "Transporte ADR",
        td_sub_title: 'Estamos autorizados a transportar materiales peligrosos pertenecientes a las siguientes clases: CLASES 2,3, 4.1, 4.2, 4.3, 5.1, 5.2, 6.1, 6.2, 8 y 9',
        block1: {
            //title: "Transporte seguro de mercancías peligrosas",
            desc: "El transporte de mercancías peligrosas por carretera es una actividad muy específica de nuestra profesión ...",
            lists: {
                item1: "Nuestra empresa se especializa en el transporte de materiales peligrosos por carretera y productos específicos clasificados ADR a nivel internacional.",
                item2: "Estamos autorizados a gestionar y entregar toda clase de mercancías que representen peligro.",
                item3: "Pour réaliser au mieux vos livraisons, nous disposons d’une équipe de chauffeurs formée aux transports spécifiques et d’une flotte de véhicules homologués."
            }
        },
        // FOOTER
        footer: {
            links: 'Enlaces',
            services: 'Servicos'
        },

        copy_right: 'Todos los derechos reservados por Janou Transport'

    },

    fra: {
        navigations: {
            home: 'Home',
            about: 'About us',
            contact: 'Contact us'
        },

        // BLOCKS
        td_title: "Transporte ADR",
        td_sub_title: ' Nous sommes habilités pour transporter les matières dangereuses appartenant aux classes suivantes : CLASSES 2,3, 4.1, 4.2, 4.3, 5.1, 5.2, 6.1, 6.2, 8 et 9',
        block1: {
            //title: "Sécurité du transport des marchandises dangereuses",
            desc: "Le transport de marchandises dangereuses par route, il s’agit d’une activité très spécifique de notre profession…",
            lists: {
                item1: "Notre société est spécialisée dans le transport de matières dangereuses par route et de produits spécifiques classés ADR au niveau de l’international.",
                item2: "Nous somme habilités à gérer et à livrer toutes les classes de marchandises représentant du danger.",
                item3: "Pour réaliser au mieux vos livraisons, nous disposons d’une équipe de chauffeurs formée aux transports spécifiques et d’une flotte de véhicules homologués."
            }
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
            document.getElementById('td-home').innerText =  ele_langs.eng.navigations.home;
            document.getElementById('td-about').innerText =  ele_langs.eng.navigations.about;
            document.getElementById('td-contact').innerText =  ele_langs.eng.navigations.contact;

            // BLOCKS
            //document.getElementById('td-title').innerText =ele_langs.eng.td_title;
            //document.getElementById('td-sub-title').innerText =ele_langs.eng.td_sub_title;

            // BLOCK 1
            //document.getElementById('bc-title1').innerText = ele_langs.eng.block1.title;
            document.getElementById('bc-desc1').innerText = ele_langs.eng.block1.desc;
            // BLOKC 1 - LISTS
            document.getElementById('ls-1').innerText = ele_langs.eng.block1.lists.item1;
            document.getElementById('ls-2').innerText = ele_langs.eng.block1.lists.item2;
            document.getElementById('ls-3').innerText = ele_langs.eng.block1.lists.item3;

            // BLOCK 2
            //document.getElementById('bc-title2').innerText = ele_langs.eng.block2.title;
            //document.getElementById('bc-desc2').innerText = ele_langs.eng.block2.desc;

            // FOOTER LINKS
            document.getElementById('td-links').innerText = ele_langs.eng.footer.links;
            document.getElementById('td-services').innerText = ele_langs.eng.footer.services;

            // COPY RIGHT
            document.getElementById('copy-right').innerText =  ele_langs.eng.copy_right;
        } else if(language == 'espain'){
            // NAVIGATIONS
            document.getElementById('td-home').innerText =  ele_langs.esp.navigations.home;
            document.getElementById('td-about').innerText =  ele_langs.esp.navigations.about;
            document.getElementById('td-contact').innerText =  ele_langs.esp.navigations.contact;

            // BLOCKS
            //document.getElementById('td-title').innerText =ele_langs.esp.td_title;
            //document.getElementById('td-sub-title').innerText =ele_langs.esp.td_sub_title;

            // BLOCK 1
            //document.getElementById('bc-title1').innerText = ele_langs.esp.block1.title;
            document.getElementById('bc-desc1').innerText = ele_langs.esp.block1.desc;
            // BLOKC 1 - LISTS
            document.getElementById('ls-1').innerText = ele_langs.esp.block1.lists.item1;
            document.getElementById('ls-2').innerText = ele_langs.esp.block1.lists.item2;
            document.getElementById('ls-3').innerText = ele_langs.esp.block1.lists.item3;

            // BLOCK 2
            //document.getElementById('bc-title2').innerText = ele_langs.esp.block2.title;
            //document.getElementById('bc-desc2').innerText = ele_langs.esp.block2.desc;

            // FOOTER LINKS
            document.getElementById('td-links').innerText = ele_langs.esp.footer.links;
            document.getElementById('td-services').innerText = ele_langs.esp.footer.services;

            // COPY RIGHT
            document.getElementById('copy-right').innerText =  ele_langs.esp.copy_right;
        } else if(language == 'francais') {
            // NAVIGATIONS
            document.getElementById('td-home').innerText =  ele_langs.fra.navigations.home;
            document.getElementById('td-about').innerText =  ele_langs.fra.navigations.about;
            document.getElementById('td-contact').innerText =  ele_langs.fra.navigations.contact;

            // BLOCKS
            //document.getElementById('td-title').innerText =ele_langs.fra.td_title;
            //document.getElementById('td-sub-title').innerText =ele_langs.fra.td_sub_title;

            // BLOCK 1
            //document.getElementById('bc-title1').innerText = ele_langs.fra.block1.title;
            document.getElementById('bc-desc1').innerText = ele_langs.fra.block1.desc;
            // BLOKC 1 - LISTS
            document.getElementById('ls-1').innerText = ele_langs.fra.block1.lists.item1;
            document.getElementById('ls-2').innerText = ele_langs.fra.block1.lists.item2;
            document.getElementById('ls-3').innerText = ele_langs.fra.block1.lists.item3;

            // BLOCK 2
            //document.getElementById('bc-title2').innerText = ele_langs.fra.block2.title;
            //document.getElementById('bc-desc2').innerText = ele_langs.fra.block2.desc;

            // FOOTER LINKS
            document.getElementById('td-links').innerText = ele_langs.fra.footer.links;
            document.getElementById('td-services').innerText = ele_langs.fra.footer.services;

            // COPY RIGHT
            document.getElementById('copy-right').innerText =  ele_langs.fra.copy_right;
        }
    }
}


onload = new Translate();
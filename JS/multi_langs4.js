// MULTI LANGUAGES SART -- CREATING A CLASS 
const ele_langs = {
    eng: {
        navigations: {
            home: 'Home',
            about: 'About us',
            contact: 'Contact us'
        },

        fq_title: 'Refrigerated',
        block1: {
            //title: "Adapted offers",
            desc: "Janou transport is the leader in the field of express refrigerated transport, today we are putting all the necessary means to meet your needs as quickly as possible.",
            lists: {
                list1: "We ensure respect for the cold chain throughout trips and professional feedback.",
                list2: "For all your shipments of perishable foodstuffs (fruits, vegetables, frozen foods, meats, fresh products, dairy products, etc.), our teams offer express refrigerated deliveries to all requested delivery destinations and under the agreed conditions.",
                list3: "Double cold service",
                list4: "Intervention in bonded warehouse in Casablanca",
                list5: "Global express coverage",
                list6: "Import-export",
                list7: "Continuous monitoring"
            }
        },
        footer : {
            links: 'Links',
            services: 'Services'
        },
        copy_right: 'All rights reserved by Janou Transport',

    },
    esp: {
        navigations: {
            home: 'bienvenida',
            about: 'Sobre nosotras',
            contact: 'contacto'
        },

        fq_title: 'Refrigerada',
        block1: {
            //title: "Ofertas adaptadas",
            desc: "Janou Transport es líder en el sector del transporte frigorífico express, hoy estamos poniendo todos los medios necesarios para satisfacer sus necesidades lo más rápido posible.",
            lists: {
                list1: "Velamos por el respeto a la cadena de frío durante los viajes y la retroalimentación profesional.",
                list2: "Para todos sus envíos de alimentos perecederos (frutas, verduras, alimentos congelados, carnes, productos frescos, lácteos, etc.), nuestros equipos ofrecen entregas refrigeradas express a todos los destinos de entrega solicitados y en las condiciones pactadas.",
                list3: "Servicio doble frío",
                list4: "Intervención en depósito fiscal en Casablanca",
                list5: "Cobertura global express",
                list6: "Importar exportar",
                list7: "Monitoreo continuo"
            }
        },
        footer : {
            links: 'Enlaces',
            services: 'Servicos'
        },
        copy_right: 'Todos los derechos reservados por Janou Transport',

    },
    fra: {
        navigations: {
            home: 'Accueil',
            about: 'À propos de nous',
            contact: 'Client Space'
        },

        fq_title: 'Glacé',
        block1: {
            //title: "Des offres sur mesure",
            desc: "Janou transport est le leader dans le domaine du transport frigorifique express, nous mettons aujourd’hui tous les  moyens nécessaires pour satisfaire vos besoins dans les plus brefs délais.",
            lists: {
                list1: "Nous assurons le respect de la chaîne du froid tout au long des voyages et un retour d’informations professionnel",
                list2: "Pour toutes vos cargaisons de denrées périssables (fruits, légumes, surgelés, viandes, produits frais, produits laitiers, etc...), nos équipes proposent des livraisons express frigorifiques vers tous destination de livraison demandée et dans les conditions convenues.",
                list3: "Service double froid",
                list4: "Intervention en magasin sous douane à Casablanca",
                list5: "Une couverture expresse mondiale",
                list6: "Import-export",
                list7: "Un suivi continue"
            }
        },

        footer : {
            links: 'Liens',
            services: 'Services'
        },
        copy_right: 'Tous droits réservés par JanouTransport',

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
    translate(language)  {
        if(language == 'english') {
            // NAVIGATIONS
            document.getElementById('fq-home').innerText = ele_langs.eng.navigations.home;
            document.getElementById('fq-about').innerText = ele_langs.eng.navigations.about;
            document.getElementById('fq-contact').innerText = ele_langs.eng.navigations.contact;

            // BLOCKS AREA
            document.getElementById('fq-title').innerText =  ele_langs.eng.fq_title;
            // BLOCK 1
            //document.getElementById('bc-title1').innerText = ele_langs.eng.block1.title;
            document.getElementById('bc-desc1').innerText = ele_langs.eng.block1.desc;
            //LISTS - BLOCK1
            document.getElementById('list-tfs1').innerText = ele_langs.eng.block1.lists.list1;
            document.getElementById('list-tfs2').innerText = ele_langs.eng.block1.lists.list2;
            document.getElementById('list-tfs3').innerText = ele_langs.eng.block1.lists.list3;
            document.getElementById('list-tfs4').innerText = ele_langs.eng.block1.lists.list4;
            document.getElementById('list-tfs5').innerText = ele_langs.eng.block1.lists.list5;
            document.getElementById('list-tfs6').innerText = ele_langs.eng.block1.lists.list6;
            document.getElementById('list-tfs7').innerText = ele_langs.eng.block1.lists.list7;
            // BLOCK 1
            /*document.getElementById('bc-title2').innerText = ele_langs.eng.block2.title;
            document.getElementById('bc-desc2').innerText = ele_langs.eng.block2.desc;*/

            // FOOTER LINKS
            document.getElementById('fq-links').innerText = ele_langs.eng.footer.links;
            document.getElementById('fq-services').innerText = ele_langs.eng.footer.services;

            // COPY RIGHT 
            document.getElementById('copy-right').innerText = ele_langs.eng.copy_right;
        } else if (language == 'espain') {
            // NAVIGATIONS
            document.getElementById('fq-home').innerText = ele_langs.esp.navigations.home;
            document.getElementById('fq-about').innerText = ele_langs.esp.navigations.about;
            document.getElementById('fq-contact').innerText = ele_langs.esp.navigations.contact;
            // BLOCKS AREA
            document.getElementById('fq-title').innerText =  ele_langs.esp.fq_title;
            // BLOCK 1
            //document.getElementById('bc-title1').innerText = ele_langs.esp.block1.title;
            document.getElementById('bc-desc1').innerText = ele_langs.esp.block1.desc;
            //LISTS - BLOCK1
            document.getElementById('list-tfs1').innerText = ele_langs.esp.block1.lists.list1;
            document.getElementById('list-tfs2').innerText = ele_langs.esp.block1.lists.list2;
            document.getElementById('list-tfs3').innerText = ele_langs.esp.block1.lists.list3;
            document.getElementById('list-tfs4').innerText = ele_langs.esp.block1.lists.list4;
            document.getElementById('list-tfs5').innerText = ele_langs.esp.block1.lists.list5;
            document.getElementById('list-tfs6').innerText = ele_langs.esp.block1.lists.list6;
            document.getElementById('list-tfs7').innerText = ele_langs.esp.block1.lists.list7;
            // BLOCK 1
            /*document.getElementById('bc-title2').innerText = ele_langs.esp.block2.title;
            document.getElementById('bc-desc2').innerText = ele_langs.esp.block2.desc;*/

            // FOOTER LINKS
            document.getElementById('fq-links').innerText = ele_langs.esp.footer.links;
            document.getElementById('fq-services').innerText = ele_langs.esp.footer.services;

            // COPY RIGHT 
            document.getElementById('copy-right').innerText = ele_langs.esp.copy_right;
        } else if(language == 'francais') {
            // NAVIGATIONS
            document.getElementById('fq-home').innerText = ele_langs.fra.navigations.home;
            document.getElementById('fq-about').innerText = ele_langs.fra.navigations.about;
            document.getElementById('fq-contact').innerText = ele_langs.fra.navigations.contact;

            // BLOCKS AREA
            document.getElementById('fq-title').innerText =  ele_langs.eng.fq_title;
            // BLOCK 1
            //document.getElementById('bc-title1').innerText = ele_langs.fra.block1.title;
            document.getElementById('bc-desc1').innerText = ele_langs.fra.block1.desc;
            //LISTS - BLOCK1
            document.getElementById('list-tfs1').innerText = ele_langs.fra.block1.lists.list1;
            document.getElementById('list-tfs2').innerText = ele_langs.fra.block1.lists.list2;
            document.getElementById('list-tfs3').innerText = ele_langs.fra.block1.lists.list3;
            document.getElementById('list-tfs4').innerText = ele_langs.fra.block1.lists.list4;
            document.getElementById('list-tfs5').innerText = ele_langs.fra.block1.lists.list5;
            document.getElementById('list-tfs6').innerText = ele_langs.fra.block1.lists.list6;
            document.getElementById('list-tfs7').innerText = ele_langs.fra.block1.lists.list7;
            // BLOCK 1
            /*document.getElementById('bc-title2').innerText = ele_langs.fra.block2.title;
            document.getElementById('bc-desc2').innerText = ele_langs.fra.block2.desc;*/

            // FOOTER LINKS
            document.getElementById('fq-links').innerText = ele_langs.fra.footer.links;
            document.getElementById('fq-services').innerText = ele_langs.fra.footer.services;

            // COPY RIGHT 
            document.getElementById('copy-right').innerText = ele_langs.fra.copy_right;
        }
    }

}

onload = new Translate();
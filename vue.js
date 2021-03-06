const projects = [
    { id: 1, title: "Nowher", url: 'https://adrienr.promo-68.codeur.online/nowher/', detail: "Ce site répond aux problématiques de l'accessibilité numérique tout en abordant le sujet des troubles neurologiques"},
    { id: 2, title: "Shape", url: 'https://adrienr.promo-68.codeur.online/shape/', detail: "Ce projet est un site d'agence web fictive, réalisé dans le cadre de ma formation en web design et développement web"},
    { id: 3, title: "Portfolio-v1", url: 'https://jeanbaptisted760.promo-68.codeur.online/backoffice-portfolio/', detail: "Il s'agit de mon premier portfolio développé en HTML, CSS et Javascript administré dynamiquement par un système CRUD développé en PHP"},
    { id: 4, title: "MANGART", url: '', detail: "Site ecommerce proposant des affiches décoratives issues d'une rencontre entre l'art contemporain et l'univers du manga"},
    { id: 5, title: "BREAK", url: 'https://jeanbaptisted760.promo-68.codeur.online/jb-will/landingpage/index.php', detail: "Site web ecommerce de boissons utilisant le système de gestion de contenu Shopify"}
  ];

/* ====end projects===== */

const Home = {
    template: '#home',
    name: 'Home'
}

const Projets = {
    template: '#projets',
    name: 'Projets',
    data: () => {
        return {
        projects
            }
        }
    }


const Contact = {
    template: '#contact',
    name: 'Contact'
}
const About = {
    template: '#about',
    name: 'About'
}


Vue.component('about-content',{
  template: '<p style="color:white">Originaire de Bourgogne et résidant aujourd’hui à Dijon, j’ai 25 ans.<br><br>Après un master en marketing et management, j’ai décidé de céder à la curiosité en m’orientant dans le domaine du développement web.<br><br>Passionné par ce que je fais, je suis décidé à travailler dur pour réussir.<br><br>Intéressé par les créations de toutes sortes, je pratique aussi le dessin et la musique depuis de nombreuses années.</p>'
})



Vue.component('home-title', {
    template: `<h1>PORTFOLIO</h1>`
  })


  Vue.component('project-title', {
    template: '<h1>PROJETS</h1>'
  })  

  Vue.component('about-title', {
    template: '<h1>À PROPOS</h1>'
  })


  Vue.component('contact-title', {
    template: `<h1>CONTACT</h1>`
  })



  Vue.component('footer-style',{
    template:`
     <div id="container">
     <hr id="container-hr">
      <div id="contacts">
        <div id="contacts--contact">
        <p>{{ mention }}</p>
        </div>
        <div id="contacts_social">
          <a href="https://www.linkedin.com/in/jean-baptiste-druet/"><div class="linkedin_social--icon"></div></a>
          <a href="https://github.com/jibdrt"><div class="github_social--icon"></div></a>
        </div>
      </div>
      <div id="mentions">

      </div>
     </div>
    `,
    
    data(){
      return{
        mail : '',
        phone : '',
        mention : ''
      }
    }
  });
  
  new Vue({
    el:'#root',
  })


const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/projets', component: Projets, name: 'Projets' },
        { path: '/about', component: About, name: 'About' },
        { path: '/contact', component: Contact, name: 'Contact' },
    ]
})



/* =====mobile navigation==== */



/* ============mount vue================== */


const vue = new Vue({
    router,
    data: {
      isDisplay: true
    }
}).$mount('#app');


/* ==============light effect================ */

var pos = document.documentElement;

pos.addEventListener('mousemove', e =>{
pos.style.setProperty('--x', e.clientX + 'px');
pos.style.setProperty('--y', e.clientY + 'px');
});

/* =====================contact====================== */

function submitalert(){
  alert ("Message envoyé");
}
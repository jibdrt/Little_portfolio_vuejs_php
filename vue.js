const projects = [
    { id: 1, title: "Nowher", img: ''},
    { id: 2, title: "Shape", img: ''},
    { id: 3, title: "Portfolio-v1", img: ''},
    { id: 4, title: "Lab-jquery", img: ''},
    { id: 5, title: "TWP", img: ''}
/*     { id: 6, description: "Exemple6"},
    { id: 7, description: "Exemple7"},
    { id: 8, description: "Exemple8"} */
  ];



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
  template: '<p style="color:white">Originaire de Bourgogne et résidant aujourd’hui à Dijon, j’ai 25 ans.<br><br>Après un master en marketing et management, j’ai décidé de céder à la curiosité en m’orientant dans le domaine du développement web.<br><br>Passionné par ce que je fais, cette prise de décision fût une révélation.<br><br>Intéressé par les créations de toutes sortes, je pratique aussi le dessin et la musique depuis de nombreuses années.</p>'
})



Vue.component('home-title', {
    template: '<h1>ACCUEIL</h1>'
  })


  Vue.component('project-title', {
    template: '<h1>PROJETS</h1>'
  })  

  Vue.component('about-title', {
    template: '<h1>À PROPOS</h1>'
  })


  Vue.component('contact-title', {
    template: '<h1>CONTACT</h1>'
  })  


const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/projets', component: Projets, name: 'Projets' },
        { path: '/about', component: About, name: 'About' },
        { path: '/contact', component: Contact, name: 'Contact' },
    ]
})



let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.marginTop = "0";
  } else {
    document.getElementById("navbar").style.marginTop = "-50px";
  }
  prevScrollpos = currentScrollPos;
}




const vue = new Vue({
    router
}).$mount('#app');



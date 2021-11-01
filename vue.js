const projects = [
    { id: 1, description: "Exemple"},
    { id: 2, description: "Exemple2"},
    { id: 3, description: "Exemple3"},
    { id: 4, description: "Exemple4"},
    { id: 5, description: "Exemple5"},
    { id: 6, description: "Exemple6"},
    { id: 7, description: "Exemple7"},
    { id: 8, description: "Exemple8"}
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




Vue.component('home-title', {
    template: '<h1>ACCUEIL</h1>'
  })


  Vue.component('project-title', {
    template: '<h1>PROJETS</h1>'
  })  

  Vue.component('about-title', {
    template: '<h1>A PROPOS</h1>'
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



const vue = new Vue({
    router
}).$mount('#app');



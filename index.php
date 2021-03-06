<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio JBD</title>
    <meta name="description" content="Portfolio Jean-Baptiste Druet Web development Web design">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="main.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<body>

<div id="app">
    <div id="navicon" v-on:click="isDisplay = !isDisplay">
        <img id="bg-menu" src="./assets/img/burger-icon.png" alt="icone du menu de navigation mobile">
    </div>


            <nav>

                <ul v-if="isDisplay" class="container-mobile-nav" id="nav">

                    <router-link to="/">
                        <li class="mobile-nav"><a>Accueil</a></li>
                    </router-link>

                    <router-link to="/projets">
                        <li class="mobile-nav"><a>Projets</a></li>
                    </router-link>

                    <router-link to="/about">
                        <li class="mobile-nav"><a>À propos</a></li>
                    </router-link>

                    <router-link to="/contact">
                        <li class="mobile-nav"><a>Contact</a></li>
                    </router-link>

                </ul>

                <router-view></router-view>

            </nav>



<script type="text/x-template" id="home">

    <div class="home-container">

            <h1 class="container-title">
                    <home-title></home-title>
            </h1>

            <div class="container-effect">
                <div class="box">

                    <div class="title">
                        <span class="block"></span>
                        <h1>Jean-Baptiste Druet<span></span></h1>
                    </div>

                    <div class="role">
                        <div class="block"></div>
                        <p>Dev web</p>
                    </div>

                </div>
            </div>

    </div>

</script>

<script type="text/x-template" id="projets">

    <div class="projects-container">

            <h1 class="container-title">
                    <project-title></project-title>
                    <button id="show-project-btn" style="background-color: white" onclick="effect ()">SHOW</button>
            </h1>



            
                <div v-for="project in projects" class="card-container" data-aos="zoom-in">

                        <p class="project-title" v-html="project.title"></p>

                        <a v-bind:href="project.url" target="blank">
                            <p class="project-detail" id="txtwhite"v-bind="id in project" v-html="project.detail"></p>
                        </a>

                            <a v-bind:href="project.url" target="blank">
                                <button class="card-btn">Voir</button>
                            </a>

      

                </div>


    </div>
</script>

<script type="text/x-template" id="about">

    <div class="about-container">
        <div class="light"></div>
            <h1 class="container-title">
                    <about-title></about-title>
            </h1>
            
            <span id="animabout" class="about-content">
                <about-content></about-content>
            </span>

    </div>

</script>

<script type="text/x-template" id="contact">

    <div class="contact-container">

            <h1 class="container-title">
                    <contact-title></contact-title>
            </h1>
            
        <form id="form" action="form-handler.php" method="post" target="empty">

        
        <div class="label-container">
            <label class="label-title" for="topic">Objet</label><br>
            <input type="text" id='topic' name='message_topic'>
        </div>
        <div class="label-container">
            <label class="label-title" for="mail">e-mail</label><br>
            <input type="email" id='mail' name='user_mail'>
        </div>
        <div class="label-container">
            <label class="label-title" for="msg">Message</label><br>
            <textarea id="msg" name="user_message"></textarea>
        </div>
        <div class="button">

            <button class="btnform" type="reset">Réinitialiser</button>
            <button onclick="submitalert()" class="btnform" type="submit">Envoyer</button>
            <iframe name="empty" id="empty" style="display: none;"></iframe>

            <!-- <input type="submit"> -->
        </div>

        </form>

    </div>
</script>

<footer-style></footer-style>


</div>




    
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="vue.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <script>
        function effect(){
        AOS.init();
    }
    </script>

    
</body>
</html>
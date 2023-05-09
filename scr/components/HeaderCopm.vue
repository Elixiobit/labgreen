<template>        
    <header data-bs-theme="black">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Labgreen</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-3 mb-md-0">
                        <li class="nav-item" v-for="itemBar in listBar" :key="itemBar.nameBar">
                            <a class="nav-link active" aria-current="page" :href="itemBar.linkPage" >{{ itemBar.nameBar }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<script>
    const header = {
        name: 'HeaderCopm',
        data(){
            return {
                listBar: [
                    { nameBar: 'Главная', linkPage: '#'},
                    { nameBar: 'Галерея', linkPage: '#'},
                    { nameBar: 'О нас', linkPage: '#'}
                ]             
            }
        }
    }
    export  default header  ;
</script>


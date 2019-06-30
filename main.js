Vue.config.devtools = true;

Vue.component('books-comp', {
    props: ['books'],
    template: `
<div>
    <input
        type="text"
        v-bind:id="field"
        class="searchfield"
        v-model="search"
        placeholder="Search..." />

    <div id="container" class="d-flex flex-wrap justify-content-around">
        <div class="flip-card" v-for="book in filteredBooks"> 
            <div class="flip-card-intermediate">
                <div class="flip-card-inner">
                    
                    <div class="flip-card-front">
                        <img :src="book.portada"/>
                    </div>

                    <div class="flip-card-back">
                        <h5> {{ book.titulo }} </h5>
                        <p> {{ book.descripcion }} </p>
                        <a data-fancybox="gallery" :href="book.detalle">
                            <button>more info
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    data() {
        return {
            search: ""
        }
    },
    computed: {
        filteredBooks: function () {
            return this.books.filter((book) => {
                return book.titulo.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
});

// fetch data from remote, convert to json, store data in variable books
var app = new Vue({
    el: '#app',
    data: {
        json: [] // initialise empty array
    },
    created: function () {
        fetch("https://api.myjson.com/bins/1h3vb3")
            .then(r => r.json())
            .then(json => {
                console.log(json.books) // json is an object & json.books is an array
                this.json = json.books;
            })
    }
});
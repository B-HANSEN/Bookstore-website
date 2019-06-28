Vue.config.devtools = true;


Vue.component('books-comp', {
    props: ['books'],
    template: `
    <div id="container" class="d-flex flex-wrap justify-content-around">
    <div class="flip-card" v-for="book in books">
        <div class="flip-card-intermediate">
            <div class="flip-card-inner">
                
                <div class="flip-card-front">
                    <img v-bind:src="book.portada"/>
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
            `
});

// for search engine 
// @keyup=""


// fetch data from remote, convert to json, store data in variable books
var app = new Vue({
    el: '#app',
    data: {
        json: null // initialise empty array
    },
    created: function () {
        fetch("https://api.myjson.com/bins/1h3vb3")
            .then(r => r.json())
            .then(json => {
                console.log(json.books)
                this.json = json.books;
            })
    }
});



// more/less button from TGIF-Project
// var app = new Vue({
//     el: '#app',
//     data: {
//         button: {
//             text: 'Show More'
//         },
//         showPara: true
//     },
//     methods: {
//         hideShow() {
//             app.showPara = !app.showPara;
//             app.button.text = app.showPara ? 'Show more' : 'Show less';
//         }
//     }
// });
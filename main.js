Vue.config.devtools = true;


Vue.component('books-comp', {
    props: ['books'],
    template: `
    <div id="container">
    <div class="flip-card" v-for="book in books">
        <div class="flip-card-intermediate">
            <div class="flip-card-inner">
                
                <div class="flip-card-front">
                    <img v-bind:src="book.portada"/>
                </div>

                <div class="flip-card-back">
                    <h5> {{ book.titulo }} </h5>
                    <p> {{ book.descripcion }} </p>
                    <button
                        <img v-bind:src = "book.detalle"
                        @click="openGallery" 
                        data-fancybox="gallery">more info
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
            `,
    data() {
        return {}
    },
    methods: {
        openGallery: function (index) {
            this.book.detalle = index;
        }
    }
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






// var flipCard = document.getElementById("container") // access parent ID in html (main container)

// // map json data in html
// function mapData(anyArray) {

//     // Loop through data in the JSON array.
//     for (var i = 0; i < anyArray.length; i++) {

//         /**************************************Card front*********************************** */
//         // create front image
//         var flipCardFront = document.createElement('div'); // 

//         flipCardFront.setAttribute('class', 'flip-card-front'); // assign to class

//         var image = document.createElement('img'); // create an <img> element
//         image.src = anyArray[i].portada; // from JSON array
//         flipCardFront.append(image); // append img to Front ID

//         // create Inner ID (intermediate) and append Front to Inner ID
//         var flipCardInner = document.createElement('div'); // create Inner ID (intermediate)
//         flipCardInner.setAttribute('class', 'flip-card-inner'); // set Attributes

//         flipCardInner.append(flipCardFront); // append Front to Inner ID

//         /*************************************Card back*********************************** */
//         // create title
//         var flipCardBack = document.createElement('div'); // create Back ID (child2)
//         flipCardBack.setAttribute('class', 'flip-card-back'); // assign to class

//         // add title
//         var title = document.createElement('h5'); // create a <title> p-element
//         title.src = anyArray[i].titulo; // from JSON array
//         title.innerHTML = anyArray[i].titulo; // append title to Back ID
//         flipCardBack.append(title);

//         // add description
//         var description = document.createElement('p'); // create a <description> p-element
//         description.src = anyArray[i].descripcion; // from JSON array
//         description.innerHTML = anyArray[i].descripcion; // append description to Back ID
//         flipCardBack.append(description);

//         // add more info button
//         var button = document.createElement('button'); // create a button element
//         button.setAttribute("class", "click-btn");
//         button.setAttribute("href", anyArray[i].detalle);
//         button.setAttribute("data-fancybox", "gallery")
//         button.innerHTML = "more info"; // append description to Back ID
//         flipCardBack.append(button);

//         // append Back to Inner ID
//         flipCardInner.append(flipCardBack);

//         /****************************Card Inner to Flip-card************************* */
//         // append Inner to Intermediate
//         var flipCardIntermediate = document.createElement('div'); // create Intermediate ID
//         flipCardIntermediate.setAttribute('class', 'flip-card'); // assign to class
//         flipCardIntermediate.append(flipCardInner);

//         // append Intermediate to parent
//         flipCard.append(flipCardIntermediate);
//     }
// }


// /* *************************** SEARCH ENGINE ************************* */
// function searchFn() {
//     var input, filter, parentCard, titulo, i;

//     input = document.getElementById("searchfield"); // declare variable for user input text
//     filter = input.value.toLowerCase(); // set both input and h5 to lowercase to enable comparability
//     console.log(filter);

//     parentCard = document.getElementsByClassName("flip-card"); // define element which should be searched and filtered out
//     console.log(parentCard);

//     for (var i = 0; i < parentCard.length; i++) { // run loop over parent array, i.e. 25 divs containing images
//         titulo = parentCard[i].getElementsByTagName("h5")[0]; // access h5 tag and store in variable
//         if (titulo.innerHTML.toLowerCase().indexOf(filter) > -1) { // set html text to lowercase to enable comparability
//             parentCard[i].style.display = ""; // show
//         } else {
//             parentCard[i].style.display = "none"; // hide
//         }
//     }
// }



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

// <
// script >
//     import Vue from 'vue'
// export default Vue.component('divComponent', {
//         render(h) {
//             return h("div", {
//                 style: {
//                     width: "100px",
//                     height: "100px",
//                     background: "red",
//                     color: "white",
//                     display: true
//                 },
//                 attrs: {
//                     id: "container"
//                 }
//             }, ["HELLO"])
//         }
//     })

//     <
//     /script>
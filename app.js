const app = Vue.createApp({
    //Data and Template
        data(){
            return {
                showbooks : 'true',
                books: [

                    {title: 'The vikings' , author: 'Edison Marshall' , img: 'assets/viking.jpg' , isFav: true}, 
                    {title: 'Scary House' , author: 'Sean Thomas' , img:'assets/sacry.jpg', isFav: true  },
                    {title: 'The Last wish', author: 'Anderjez SAp', img: 'assets/last.jpg', isFav: true}
                ],
                x :0,
                y: 0
            }
        },

    methods :{
        //Click Events

        // changeTitle(){
        //     this.title = 'The Lost Empire'
        // }

//    <-- conditional Rendering -->

        toggleshowbooks() {
            this.showbooks = !this.showbooks
        },

        // handleEvent(){
        //     console.log('event');
        // },

        handlemousemove(e){
            
            this.x = e.offsetX,
            this.y = e.offsetY

        },
        
        toggleFav(book){
            book.isFav = !book.isFav
        },

    },
    
    computed: {
        filteredBooks(){
            
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
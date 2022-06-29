Vue.createApp({
     data() {
     return {
     header : null, 
     firstName : "",
     lastName : "",
     isLogin: false,
     tickets: [],
     courses: [],
     merch: [],
     coursesFakes: []
    
     }
     },

     created() {
          axios
          .get("/api/client/current").then(api => {
               this.firstName = api.data.firstName
               this.lastName = api.data.lastName
               this.isLogin = true;
               this.tickets = api.data.tickets
               this.courses = this.tickets.filter(ticket => ticket.courseTickets.length != 0).map(ticket => ticket.courseTickets).map((course, index) => course.map(course => course.course)).flat()
               this.merch = this.tickets.filter(ticket => ticket.purchaseOrder.length != 0).map(ticket => ticket.purchaseOrder).map((merch, index) => merch.map(merch => merch.merch)).flat()
               this.coursesFakes = new Array(6 - this.courses.length).fill(1)
          })
     },
     
     mounted(){
     this.$nextTick(function () {
          this.header = document.querySelector(".nav");
          })

     },
     methods: {
     
          subscribeEmail(){
               const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
               })
               
               Toast.fire({
                    icon: 'success',
                    title: 'Successfully subscribed!'
               })
               },
               logout() {
                    axios
                      .post("/api/logout")
                      .then((response) => window.location.replace("./index.html"));
                  },

     },
     computed: {
          headershow(){
               if( this.header != null){
                    window.addEventListener("scroll", () => {
                    let header = this.header
                    let scrolltop = document.documentElement.scrollTop;
                    let top = header.offsetTop
                    if(top + 100 <= scrolltop){
                         header.style.background = "#000000ff"
                    }
                    else{
                         header.style.background = "rgba(0, 0, 0, 0.0001)"
                    }
                    });      
               }
          }
     },
}).mount("#app")
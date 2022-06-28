Vue.createApp({
     data() {
          return {
               header : null,
               courses: "",
               merchandises: [],
          }
     },

     created() {
     
     axios.get(`http://localhost:8080/api/merch`)
     .then(datos => {
          this.merchandises = datos.data
     })


     },
     
     mounted(){
     this.$nextTick(function () {
     this.header = document.querySelector(".nav");
     })

     },
     methods: {

          typeFilter(){
               let merchandisesType = this.merchandises
               let merchNew = []
               merchandisesType.forEach (merch => { 
                    if(!merchNew.includes(merch.type)){
                         merchNew.push(merch.type)
                    }  
               });
               console.log(merchNew)
          },
     
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
               }

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
// VUE INSTANCE
const app = new Vue({
    el: '#root',
    data: {
        email: [],
        numEmail: 10,
    },
    created(){
        this.genEmail();
    },
    methods: {
        /**
         * Generate random email
         */
        genEmail(){
            for(let i = 0; i < this.numEmail; i++){
                // API CALL
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(result => {
                    this.email.push(result.data.response);
                })
                .catch(error => {
                    alert(error);
                });
            }
        },
    }
});
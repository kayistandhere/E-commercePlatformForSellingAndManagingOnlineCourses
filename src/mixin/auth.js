export default {
    methods: {
        addAccessTokenToHeader(){
            const accessToken = localStorage.getItem('accessToken');
            if(accessToken){
                this.$request.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            }
        },
        removeAccessTokenToHeader(){
            delete this.$axios.defaults.headers.common['Authorization'];
        },
    },
};
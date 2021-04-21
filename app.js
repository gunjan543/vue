new Vue({
    el:'#vue-app',
    data:{
       name:'Shaun',
       job: 'Ninja',
       website: 'https://github.com/gunjan543/vue',
       websiteTag: '<a href="https://github.com/gunjan543/vue">The Website</a>'
    },
    methods:{
        greet:function(time){
            return 'Good '+time +" "+this.name
        }
    }
});
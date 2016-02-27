(function(exports){
    var Vue = require('vue');

    Vue.component('skills', require('./components/skills.component.js'));

    new Vue({
        el: '#app'
    })
})(window);

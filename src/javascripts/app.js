import skillsComponent from './components/skills.component.js';
import projectsComponent from './components/projects.component.js';

(function(exports){    
    var Vue = require('vue');

    Vue.component('skills', skillsComponent);
    Vue.component('projects', projectsComponent);

    new Vue({
        el: '#app'
    });
})(window);

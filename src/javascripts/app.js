import skillsComponent from './components/skills.component.js';
import projectsComponent from './components/projects.component.js';
import linksComponent from './components/links.component.js';
import anim from 'animations';

(function(exports){    
    var Vue = require('vue');

    Vue.config.debug = true;

    Vue.component('skills', skillsComponent);
    Vue.component('projects', projectsComponent);
    Vue.component('links', linksComponent);

    new Vue({
        el: '#app'
    });
})(window);

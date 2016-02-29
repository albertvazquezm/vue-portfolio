import skills from './components/skills.component.js';
import skillsData from '../data/skills.js';

(function(exports){    
    var Vue = require('vue');

    Vue.component('skills', {
        template : `
            <h2>Skills</h2>
            <ul v-for="skill in skills">
                <li>{{skill.name}}</li>
            </ul>
        `,
        props : [
            'filterType'
        ],
        data : () => {
            var self = this;
            var skills = skillsData.filter((skill) => {
                return skill.type === self.filterType;
            });
            console.log(skills);
            return {
                skills : skills
            }
        }
    });

    new Vue({
        el: '#app'
    });
})(window);

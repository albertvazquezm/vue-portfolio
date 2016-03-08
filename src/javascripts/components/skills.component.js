'use strict';

import skillsData from '../../data/skills.js';

module.exports =  {
    template : `
        <h2>{{title}}</h2>
        <ul v-for="skill in skills">
            <li>{{skill.name}}</li>
        </ul>
    `,
    props : [
        'filterType',
        'title'
    ],
    computed : {
        skills : function(){
            return skillsData.filter((skill) => {
                return skill.type === this.filterType;
            });
        }
    }
};


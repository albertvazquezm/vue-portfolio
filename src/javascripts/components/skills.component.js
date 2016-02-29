'use strict';

import skillsData from '../../data/skills.js';

module.exports =  {
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
};


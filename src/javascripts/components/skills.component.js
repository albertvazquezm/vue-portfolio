'use strict';

import skills from '../../data/skills.json';

var SkillsComponent = {
    template : `
        <div class="skills">
            <h2 class="subtitle is-4">{{title}}</h2>
            <ul v-for="skill in skills | orderBy 'level' -1">
                <li>
                    <span class="name">{{skill.name}}</span>
                    <span class="level">{{skill.level}}</span>
                </li>
            </ul>
        </div>
    `,
    props : [
        'filterType',
        'title'
    ],
    computed : {
        skills : function(){
            return skills.filter((skill) => {
                return skill.type === this.filterType;
            });
        }
    }
}

module.exports = SkillsComponent;


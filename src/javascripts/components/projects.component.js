'use strict';

import projectsData from '../../data/projects.js';

module.exports =  {
    template : `
        <h2>Projects</h2>
        <ul v-for="project in projects">
            <li>{{project.name}}</li>
        </ul>
    `,
    props : [
        
    ],
    data : () => {
        return {
            projects : projectsData
        }
    }
};


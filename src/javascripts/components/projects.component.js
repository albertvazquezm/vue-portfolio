'use strict';

import data from '../../data/projects.json';

module.exports =  {
    template : `
        <div class="projects">
            <article v-for="project in projects">
                <h3 class="subtitle is-5">{{project.role}}</h3>
                <span class="top-bullet">{{project.time}}</span>
                <div class="clearfix"></div>
                <span class="subtitle1">{{project.name}}</span>
                for
                <span class="subtitle2">{{project.client}}</span>
                <p class="description">{{project.description}}</p>
                <span v-for="skill in project.skills" class="tag is-success">
                    {{skill}}
                </span>
                <span v-for="library in project.libraries" class="tag is-warning">
                    {{library}}
                </span>
                <a href="{{project.url}}" target="_blank">{{project.url}}</a>
            </article>
        </div>
    `,
    props : [
        
    ],
    data : () => {
        return {
            projects : data
        }
    }
};


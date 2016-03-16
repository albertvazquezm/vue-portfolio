'use strict';

import data from '../../data/projects.json';

module.exports =  {
    template : `
        <div class="projects">
            <article v-for="project in projects">
                <h3 class="subtitle is-5">{{project.role}}</h3>
                <span class="top-bullet">{{project.time}}</span>
                <div class="is-clearfix"></div>
                <span class="subtitle1">{{project.name}}</span>
                for
                <span class="subtitle2">{{project.client}}</span>
                <div class="description">
                    <p class="description-block"><strong>My Role</strong><br>{{project.roleDescription}}</p>
                    <p class="description-block"><strong>Technology</strong><br>{{project.projectDescription}}</p>
                </div>
                <span v-for="skill in project.skills" class="tag is-success">
                    {{skill}}
                </span>
                <span v-for="library in project.libraries" class="tag is-warning">
                    {{library}}
                </span>
                <a v-if="project.url" href="{{project.url}}" target="_blank"><i class="fa fa-external-link"></i>{{project.url}}</a>
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

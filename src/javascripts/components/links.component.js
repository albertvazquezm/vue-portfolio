'use strict';

import links from '../../data/links.json';


var LinksComponent = {
    template : `
        <ul class="links">
            <li v-for="link in links">
                <a href="{{link}}">{{link}}</a>
            </li>
        </ul>
    `,
    props : [
        'choose'
    ],
    computed : {
        links : function(){
            return _getLinksSelected.call(this);
        }
    }
}

function _getLinksSelected(){
    this.choose = eval(this.choose);
    var pickedLinks = [];
    for (var key in links){
        if(this.choose.indexOf(key)){
            pickedLinks.push(links[key]);
        }
    }
    return pickedLinks;
}

module.exports = LinksComponent;


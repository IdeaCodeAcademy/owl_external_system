/** @odoo-module **/

import {registry} from "@web/core/registry";
import {Component, onWillStart} from "@odoo/owl";
import {loadCSS, loadJS,loadBundle} from "@web/core/assets";


class OwlExternalLib extends Component {
    setup() {
        onWillStart(async () => {
            await loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
            await loadCSS('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
            await loadCSS('https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.min.css');
            await loadJS('https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.umd.min.js');
            await loadBundle('owl_external_lib.assets_owl_external_lib');
        });
    }
}

OwlExternalLib.template = "owl_external_lib.OwlExternalLib";

// remember the tag name we put in the first step
registry.category("actions").add("owl_external_lib.OwlExternalLib", OwlExternalLib);
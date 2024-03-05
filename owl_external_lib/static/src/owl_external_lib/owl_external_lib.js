/** @odoo-module **/

import {registry} from "@web/core/registry";
import {Component, onWillStart} from "@odoo/owl";


class OwlExternalLib extends Component {
    setup() {
        onWillStart(async () => {});
    }
}

OwlExternalLib.template = "owl_external_lib.OwlExternalLib";

// remember the tag name we put in the first step
registry.category("actions").add("owl_external_lib.OwlExternalLib", OwlExternalLib);
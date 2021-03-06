/* src\components\Nav.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	action_destroyer,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	run_all,
	safe_not_equal,
	space
} from "../../_snowpack/pkg/svelte/internal.js";

import { link } from "../../_snowpack/pkg/svelte-routing.js";

function create_fragment(ctx) {
	let nav;
	let a0;
	let link_action;
	let t1;
	let a1;
	let link_action_1;
	let mounted;
	let dispose;

	return {
		c() {
			nav = element("nav");
			a0 = element("a");
			a0.textContent = "Home a";
			t1 = space();
			a1 = element("a");
			a1.textContent = "Test";
			attr(a0, "href", "./");
			attr(a1, "href", "test");
		},
		m(target, anchor) {
			insert(target, nav, anchor);
			append(nav, a0);
			append(nav, t1);
			append(nav, a1);

			if (!mounted) {
				dispose = [
					action_destroyer(link_action = link.call(null, a0)),
					action_destroyer(link_action_1 = link.call(null, a1))
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(nav);
			mounted = false;
			run_all(dispose);
		}
	};
}

class Nav extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Nav;
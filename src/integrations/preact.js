import { h, Component, render as preactRender } from 'preact';
import htm from '../htm';

export { h, Component };

export function render(tree, parent) {
	preactRender(tree, parent, parent.firstElementChild);
}

export const html = htm.bind(h);
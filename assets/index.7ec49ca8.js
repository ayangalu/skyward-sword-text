import {
	T as o,
	n as r,
	h as t,
	o as e,
	i as n,
	e as i,
	a as l,
	A as a,
} from 'https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/assets/vendor.17e0db4f.js';
var c = Object.defineProperty,
	d = Object.getOwnPropertyDescriptor;
const u = fetch('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/dump.json')
	.then((o) => o.json())
	.then((r) => o`<main-view .data=${r}></main-view>`);
let g = class extends t {
	render() {
		return o`${e(u, o`<span>Loading...</span>`)}`;
	}
};
g = ((o, r, t, e) => {
	for (var n, i = e > 1 ? void 0 : e ? d(r, t) : r, l = o.length - 1; l >= 0; l--)
		(n = o[l]) && (i = (e ? n(r, t, i) : n(i)) || i);
	return e && i && c(r, t, i), i;
})([r('fetch-data')], g);
var s = Object.defineProperty,
	m = Object.getOwnPropertyDescriptor,
	p = (o, r, t, e) => {
		for (var n, i = e > 1 ? void 0 : e ? m(r, t) : r, l = o.length - 1; l >= 0; l--)
			(n = o[l]) && (i = (e ? n(r, t, i) : n(i)) || i);
		return e && i && s(r, t, i), i;
	};
let b = class extends t {
	constructor() {
		super(...arguments), (this.removeBlur = (o) => o.currentTarget.classList.remove('blurry')), (this.data = {});
	}
	render() {
		return o`
			<aside>
				<sl-menu>
					${Object.keys(this.data).map(
						(r) => o`
							<sl-menu-label>${r}</sl-menu-label>
							${Object.keys(this.data[r]).map(
								(r) => o`<sl-menu-item
									@click=${() => {
										var o, t;
										return null ==
											(t = null == (o = this.shadowRoot) ? void 0 : o.querySelector(`#x${r.slice(0, -5)}`))
											? void 0
											: t.scrollIntoView();
									}}
									>${r}</sl-menu-item
								>`,
							)}
						`,
					)}
				</sl-menu>
			</aside>
			<div class="content">
				${Object.keys(this.data).map(
					(r) => o`
						<h1>${r}</h1>
						${Object.keys(this.data[r]).map(
							(t) => o`
								<h2 id=${`x${t.slice(0, -5)}`}>${t}</h2>
								<table>
									${this.data[r][t]
										.filter((o) => o.ja_JP)
										.map((r) => {
											var t, e, n;
											return o`
												<tr>
													<td>${r.label}</td>
													<td>${r.attribute}</td>
													<td lang="ja">${l(null != (t = r.ja_JP) ? t : a)}</td>
													<td lang="en">
														<div class="blurry" @click=${this.removeBlur}>
															${l(null != (e = r.en_GB) ? e : a)}
														</div>
													</td>
													<td lang="de">
														<div class="blurry" @click=${this.removeBlur}>
															${l(null != (n = r.de_DE) ? n : a)}
														</div>
													</td>
												</tr>
											`;
										})}
								</table>
							`,
						)}
					`,
				)}
			</div>
		`;
	}
};
(b.styles = n`
		:host {
			display: flex;
		}

		aside {
			position: fixed;
			overflow: auto;
			height: 100vh;
			width: 300px;
		}

		sl-menu-label::part(base) {
			color: hsl(0 0% 10%);
		}

		sl-menu-item::part(base) {
			color: hsl(0 0% 100%);
		}

		.content {
			margin-left: 300px;
			padding: 1rem;
			color: hsl(0 0% 100%);
		}

		table {
			margin-top: 1rem;
			width: 100%;
			border-collapse: collapse;
		}

		td {
			border: 1px solid hsl(0 0% 75%);
			padding: 0.5rem;
		}

		td[lang] {
			text-shadow: 1px 1px 2px hsl(0 0% 0%);
		}

		td[lang='ja'] {
			font-size: 1.4rem;
			line-height: 2;
		}

		.blurry {
			filter: blur(5px);
			cursor: pointer;
		}

		.player-name::before {
			content: 'リンク';
		}

		.numeric-placeholder::before {
			content: '＃';
		}

		.color-red,
		.color-cancel,
		.color-red-rupee {
			color: hsl(0 50% 60%);
		}

		.color-gold,
		.color-gold-rupee {
			color: hsl(60 50% 60%);
		}

		.color-blue,
		.color-blue-rupee {
			color: hsl(210 50% 60%);
		}

		.color-green,
		.color-green-rupee {
			color: hsl(120 50% 60%);
		}

		.color-yellow {
			color: hsl(30 50% 60%);
		}

		.color-purple {
			color: hsl(270 50% 70%);
		}

		.color-silver-rupee {
			color: hsl(0 0% 70%);
		}

		.color-baba-rupee {
			color: hsl(60 0% 40%);
		}

		.icon {
			display: inline-block;
			height: 1em;
			background-size: contain;
		}

		.icon-button-a {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/button-a.png');
			width: 0.95em;
		}

		.icon-button-b {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/button-b.png');
			width: 0.75em;
		}

		.icon-button-minus {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/button-minus.png');
			width: 0.725em;
		}

		.icon-button-plus {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/button-plus.png');
			width: 0.725em;
		}

		.icon-button-1 {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/button-1.png');
			width: 0.775em;
		}

		.icon-button-2 {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/button-2.png');
			width: 0.775em;
		}

		.icon-button-c {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/button-c.png');
			width: 0.9em;
		}

		.icon-button-z {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/button-z.png');
			width: 0.95em;
		}

		.icon-control-stick {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick.png');
			width: 0.925em;
		}

		.icon-control-stick-up {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick-up.png');
			width: 0.925em;
		}

		.icon-control-stick-down {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick-down.png');
			width: 0.925em;
		}

		.icon-control-stick-left {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick-left.png');
			width: 0.925em;
		}

		.icon-control-stick-right {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick-right.png');
			width: 0.925em;
		}

		@keyframes control-stick-vertical {
			0%,
			100% {
				background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick-up.png');
			}
			25%,
			75% {
				background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick.png');
			}
			50% {
				background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick-down.png');
			}
		}

		.icon-control-stick-vertical {
			animation: control-stick-vertical 2s infinite;
			width: 0.925em;
		}

		@keyframes control-stick-horizontal {
			0%,
			100% {
				background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick-left.png');
			}
			25%,
			75% {
				background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick.png');
			}
			50% {
				background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/control-stick-right.png');
			}
		}

		.icon-control-stick-horizontal {
			animation: control-stick-horizontal 2s infinite;
			width: 0.925em;
		}

		.icon-d-pad {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/d-pad.png');
			width: 0.95em;
		}

		.icon-d-pad-up {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/d-pad-up.png');
			width: 0.95em;
		}

		.icon-d-pad-down {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/d-pad-down.png');
			width: 0.95em;
		}

		.icon-d-pad-left {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/d-pad-left.png');
			width: 0.95em;
		}

		.icon-d-pad-right {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/d-pad-right.png');
			width: 0.95em;
		}

		.icon-arrow-up {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/arrow-up.png');
			width: 0.85em;
		}

		.icon-arrow-down {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/arrow-down.png');
			width: 0.85em;
		}

		.icon-arrow-left {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/arrow-left.png');
			width: 0.95em;
		}

		.icon-arrow-right {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/arrow-right.png');
			width: 0.95em;
		}

		.icon-pointer {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/pointer.png');
			width: 0.7em;
		}

		.icon-x-mark {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/x-mark.png');
			width: 0.7em;
		}

		.icon-insect-mark {
			background-image: url('https://raw.githubusercontent.com/tao-taku/skyward-sword-text/main/insect-mark.png');
			width: 0.975em;
		}
	`),
	p([i({ attribute: !1 })], b.prototype, 'data', 2),
	(b = p([r('main-view')], b));

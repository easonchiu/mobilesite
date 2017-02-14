import './style'

class Toast {
	static show(val, duration = 2000) {
		this.hide(false);

		let toast = document.createElement('div');
		toast.classList.add('x-toast');
		toast.id = 'j-x-toast';
		toast.innerHTML = `<div class="x-toast__inner"><p>${val}</p></div>`;

		let dom = document.getElementsByTagName('body')[0];
		dom.appendChild(toast);

		setTimeout(() => {
			toast.classList.add('x-toast--show');
		});

		clearTimeout(this._t);
		this._t = setTimeout(this.hide, duration);
	}
	static hide(animate = true) {
		let toast = document.getElementById('j-x-toast');
		if (toast) {
			if (animate) {
				toast.classList.remove('x-toast--show');
				toast.classList.add('x-toast--hide');
				setTimeout(() => {
					toast.remove();
				}, 200);
			} else {
				toast.remove();
			}
		}
	}
}

export default Toast
import $ from 'jquery';

class Modal {
	constructor() {

		this.openModalButton = $(".open-modal"); /* CTA button for Modal */
		this.modal = $(".modal");	/* Main modal div to reveal */
		this.closeModalButton = $(".modal__close") /* X - close button */

		this.events();
	}

	events() {
		// clicking the CTA open Modal button
		this.openModalButton.click(this.openModal.bind(this));

		// clicking the X close Modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		/* 27 == ESC key */
		if (e.keyCode == 27) {
			this.closeModal();
		}

	}

	openModal() {
		this.modal.addClass("modal--is-visible");

		return false; /* Override/skip the behaviour of link with href="#" scrolling to top */
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;
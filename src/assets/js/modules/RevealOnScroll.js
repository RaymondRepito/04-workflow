import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elements, offset) {
		/* We cannot reveal something not hidden */
		this.itemsToReveal = elements;
		/*this.itemsToReveal = $(".feature-item");*/

		/* This property must live above the methods if to 
		be accessible fromthe methods */
		this.offsetPercentage = offset;

		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that = this;
		console.log(that.offsetPercentage);

		this.itemsToReveal.each(function() {

			var currentItem = this;
			new Waypoint({
				/* element: DOM element we want to watch for */
				/* handler: What we want to happen to the DOM element */
				/* offset: at what point we want to happen */
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage

			});			

			/*alert("testing feature item");*/
		});
	}
}

export default RevealOnScroll;
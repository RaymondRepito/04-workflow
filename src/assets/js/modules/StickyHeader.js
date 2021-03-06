import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll2 from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");

		this.createHeaderWaypoint();
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();	/* Set event listener for refreshing Waypoint */
	}

	refreshWaypoints() {
		/* arg1 = event; load = on image load */
		/* arg2 = anonymous function on what we want to do */
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint ({
			/* this.headerTriggerElement is a jQuery object. element needs to be "JavaScript native DOM object" */
			/*  this.headerTriggerElement[0] is a "JavaScript native DOM object */
			/* First element in array of jQuery object is always a JS DOM object */
			element: this.headerTriggerElement[0],
			handler: function(direction) {

				if (direction=="down") {
					that.siteHeader.addClass("site-header--dark");	
				} else {
					that.siteHeader.removeClass("site-header--dark");	
				}
				
			}
		})

	}

	createPageSectionWaypoints() {

		var that = this;

		this.pageSections.each(function() {

			var currentPageSection = this;

			new Waypoint ({

				element: currentPageSection,
				handler: function(direction) {

					if (direction=="down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");

						/* Reset before setting the current link */
						that.headerLinks.removeClass("is-current-link");

						/* Set the current link */
						$(matchingHeaderLink).addClass("is-current-link");
					}

				},
				offset: "18%"
			});

			new Waypoint ({

				element: currentPageSection,
				handler: function(direction) {

					if (direction=="up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");

						/* Reset before setting the current link */
						that.headerLinks.removeClass("is-current-link");

						/* Set the current link */
						$(matchingHeaderLink).addClass("is-current-link");
					}

				},
				offset: "-40%"
			});
		});

		
		
	}
}

export default StickyHeader;
/* Already existing in node_modules when we npm install jquery --save-dev */
import $ from 'jquery';

class MobileMenu {
	constructor() {
		/*
		alert("Testing for MobileMenu.");
		*/

		/*******************************************************************
			DOm, event-handling, defining functionality
			SPAGHETTI CODE
		 *******************************************************************/
		/* This works even if <script src="assets/js/App.js"></script> is placed before </head> */
		/*
		$(function(){
			
			$(".site-header__menu-icon").click(function() {
				console.log("The top right icon was clicked");
			});
		});
		*/

		/* This works ONLY IF <script src="assets/js/App.js"></script> is placed before </body> */
		/*
		$(".site-header__menu-icon").click(function() {
			console.log("The top right icon was clicked");
		});*/
		/*******************************************************************/
		
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");

		/* This needs to be manually called. Not automatically called by JavaScript */
		this.events();
	}

	
	events() {
		/* what is 'this' "here" in 'events'?' */
		/*console.log(this);*/	

		/* v1: no bind */
		/*this.menuIcon.click(this.toggleTheMenu);*/

		/* v2: bind to literal string "Hello World" */
		/*this.menuIcon.click(this.toggleTheMenu.bind("Hello World"));*/

		/* v3: bind to literal string the class' 'this' object */
		this.menuIcon.click(this.toggleTheMenu.bind(this));

		
	}

	toggleTheMenu() {
		/* Without bind, 'this' refers to the object (i.e. this.MenuIcon) calling the 
		   function toggleMenu. We should use the JS feature 'bind' */
		/* what is 'this' "here" in 'toggleTheMenu'?' */
		/*console.log(this);*/

		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		/*console.log("The top right icon was clicked");*/

		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
		this.siteHeader.toggleClass("site-header--is-expanded");
	}
}

export default MobileMenu;
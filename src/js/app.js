import pagePreloader from './modules/pagePreloader';
import slickSliders from './modules/slider';
import pageHeader from './modules/pageHeader';
import educationList from './modules/educationList';
import pageNumber from './modules/pageNumber';
import skills from './modules/skills';
import aboutMe from './modules/aboutMe';
import htmlScroll from './modules/htmlScroll';
import portfolio from './modules/portfolio';
import inTouch from './modules/inTouch';
import mobileMenu from './modules/mobileMenu';

(function($){

	$(document).ready(function(){
		pagePreloader();
		pageHeader();
		aboutMe();
		educationList();
		pageNumber();
		skills();
		slickSliders();
		portfolio();
		inTouch();
		mobileMenu();
	});
	htmlScroll()

})(jQuery);


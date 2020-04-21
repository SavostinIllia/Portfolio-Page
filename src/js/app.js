import pagePreloader from './modules/pagePreloader';
import slickSliders from './modules/slider';
import pageHeader from './modules/pageHeader';
import educationList from './modules/educationList';
import pageNumber from './modules/pageNumber';
import skills from './modules/skills';
import aboutMe from './modules/aboutMe';

(function($){
	
	
	$(document).ready(function(){
		pagePreloader();
		pageHeader();
		aboutMe();
		educationList();
		pageNumber();
		skills();
		slickSliders();
	});


})(jQuery);
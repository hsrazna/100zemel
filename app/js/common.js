$(function() {

	if($('.ah-onearticles-search').length>0){
		$('.ah-onearticles-search').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}
		});
	}
	
});

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

$(function() {
	$(".az-menu-icon").click(function(e){
		$(this).next().slideToggle(0);
		$('html').one('click',function() {
	    $(".az-menu-icon").next().slideUp(0);
	  });
		e.stopPropagation();
		return false;
	});

	$(window).scroll(function(){
		if(window.matchMedia( "(max-width: 768px)" ).matches){
			$(".az-menu-icon").next().slideUp(0);
		}
	});
	
	function generateSelect(select) {
        var option = select.find('select option');
        if (select.find('.az-options').length > 0) {
            select.find('.az-options').remove();
        }

        var str = '<div class="az-options clearfix">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });

        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
        $(window).click(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
        select.find('select').on('focus', function(e) {
            this.blur();
            window.focus();
        });
        select.find('select').trigger('change');
    }
    $('.az-select').each(function(){
        var select = $(this);
        generateSelect(select);
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });

	jQuery("#az-slider").slider({
		min: parseInt($("input#minDist").val()),
		max: parseInt($("input#maxDist").val()),
		values: [parseInt($("input#startDist").val()),parseInt($("input#endDist").val())],
		range: true,
	    stop: function(event, ui) {
			jQuery("input#startDist").val(jQuery("#az-slider").slider("values",0)+" км.");
			jQuery("input#endDist").val(jQuery("#az-slider").slider("values",1)+" км.");
		},
		slide: function(event, ui){
			jQuery("input#startDist").val(jQuery("#az-slider").slider("values",0)+" км.");
			jQuery("input#endDist").val(jQuery("#az-slider").slider("values",1)+" км.");
		}
	}).draggable();

	jQuery("#az-slider2").slider({
		min: parseInt($("input#minCost").val()),
		max: parseInt($("input#maxCost").val()),
		values: [parseInt($("input#startCost").val()),parseInt($("input#endCost").val())],
		range: true,
	    stop: function(event, ui) {
			jQuery("input#startCost").val(jQuery("#az-slider2").slider("values",0)+" р.");
			jQuery("input#endCost").val(jQuery("#az-slider2").slider("values",1)+" р.");
		},
		slide: function(event, ui){
			jQuery("input#startCost").val(jQuery("#az-slider2").slider("values",0)+" р.");
			jQuery("input#endCost").val(jQuery("#az-slider2").slider("values",1)+" р.");
		}
	});

	$(".az-DistSpan").focus(function(){
		$(this).val("");
	});

	$(".az-DistSpan").keypress(function(event){
		if(event.which == 13 || event.keyCode == 13){
			$(this).trigger("blur");
			return false;
		}
	});

	$("#startDist").blur(function(){
		if($(this).val() == ""){
			$(this).val(jQuery("#az-slider").slider("values",0)+" км.");
		} else if(isNaN(parseInt($(this).val()))){
			$(this).val(jQuery("#az-slider").slider("values",0)+" км.");
		} else{
			var az_check_max_min = parseInt($(this).val());
			if(az_check_max_min>=parseInt($("input#minDist").val())&&az_check_max_min<=parseInt($("input#endDist").val())){
				$(this).val(parseInt($(this).val())+" км.");
				jQuery("#az-slider").slider("values", 0, parseInt($(this).val()));
			} else{
				$(this).val(jQuery("#az-slider").slider("values",0)+" км.");
			}
		}
	});

	$("#endDist").blur(function(){
		if($(this).val() == ""){
			$(this).val(jQuery("#az-slider").slider("values",1)+" км.");
		} else if(isNaN(parseInt($(this).val()))){
			$(this).val(jQuery("#az-slider").slider("values",1)+" км.");
		} else{
			var az_check_max_min = parseInt($(this).val());
			if(az_check_max_min>=parseInt($("input#startDist").val())&&az_check_max_min<=parseInt($("input#maxDist").val())){
				$(this).val(parseInt($(this).val())+" км.");
				jQuery("#az-slider").slider("values", 1, parseInt($(this).val()));
			} else{
				$(this).val(jQuery("#az-slider").slider("values",1)+" км.");
			}
		}
	});

$("#startCost").blur(function(){
		if($(this).val() == ""){
			$(this).val(jQuery("#az-slider2").slider("values",0)+" р.");
		} else if(isNaN(parseInt($(this).val()))){
			$(this).val(jQuery("#az-slider2").slider("values",0)+" р.");
		} else{
			var az_check_max_min = parseInt($(this).val());
			if(az_check_max_min>=parseInt($("input#minCost").val())&&az_check_max_min<=parseInt($("input#endCost").val())){
				$(this).val(parseInt($(this).val())+" р.");
				jQuery("#az-slider2").slider("values", 0, parseInt($(this).val()));
			} else{
				$(this).val(jQuery("#az-slider2").slider("values",0)+" р.");
			}
		}
	});

	$("#endCost").blur(function(){
		if($(this).val() == ""){
			$(this).val(jQuery("#az-slider2").slider("values",1)+" р.");
		} else if(isNaN(parseInt($(this).val()))){
			$(this).val(jQuery("#az-slider2").slider("values",1)+" р.");
		} else{
			var az_check_max_min = parseInt($(this).val());
			if(az_check_max_min>=parseInt($("input#startCost").val())&&az_check_max_min<=parseInt($("input#maxCost").val())){
				$(this).val(parseInt($(this).val())+" р.");
				jQuery("#az-slider2").slider("values", 1, parseInt($(this).val()));
			} else{
				$(this).val(jQuery("#az-slider2").slider("values",1)+" р.");
			}
		}
	});

	var reg_num = {};

	$(".change-region").eq(0).find("option").each(function(i){
		reg_num[$(this).val()] = i;
	});

	$(".change-region div[data-val]").click(function(){
		$("#az-obls .az-obl").slideUp(0);
		$("#az-obls .az-obl").eq(reg_num[$(this).attr('data-val')]).slideDown(0);
	});

	$(".change-region div[data-val]").click(function(){
	    $("#width_tmp_option").html($('#resizing_select option:selected').text());
	    $("#resizing_select").width($("#width_tmp_select").width()+5);  
	 });

	$("#width_tmp_option").html($('#resizing_select option:selected').text());
  $("#resizing_select").width($("#width_tmp_select").width()+5);

	$( "#tabs" ).tabs({ active: 0 });
	$( "#cat-tabs" ).tabs({ active: 0 });

	$('.az-file-input').change(function(e){
	  $("#logo-example-img").attr("src", URL.createObjectURL(e.target.files[0]));
	  $(this).siblings('.az-file-name').text($(this).val().substring($(this).val().lastIndexOf('\\')+1,$(this).val().length));
	});

$("#chooseGalleryImage").on('click', function(e) {
        e.preventDefault();
        $("#az-galary").find('.isNew').remove();
        var timestamp = new Date().valueOf();
        $("#az-galary").append('<input type="file" accept="image/*" name="village_photos[]" class="isNew" data-stamp="'+timestamp+'">');
        $("#az-galary").find('.isNew:last').on('change', function(e) {
            var fileList = e.target.files;
            if (fileList.length) {
                $("#az-galary").append(
                    '<div class="az-col-8">'+
                        '<div class="az-galery-box">'+
                            '<img src="'+URL.createObjectURL(e.target.files[0])+'" alt="Фотогалерея">'+
                            '<a href="#" class="az-del-gal delFileByStamp" data-stamp="'+timestamp+'"></a>'+
                        '</div>'+
                    '</div>'
                );
                $(this).removeClass('isNew');
            }
        });
        $("#az-galary").find('.isNew:last').click();
    });

    $('#az-galary').on('click', '.delFileByStamp', function() {
        var timestamp = $(this).attr('data-stamp');
        if (timestamp) {
            $('input[data-stamp="'+timestamp+'"]').remove();
            $(this).parents(".az-col-8").remove();
        }
        return false;
    });

    if($(".textarea-scrollbar").length>0){
	    $(".textarea-scrollbar").scrollbar();
    }

});

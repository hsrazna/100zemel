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
		$(".az-menu-icon").next().slideUp(0);
	});

	// $(window).click(function(){
	// 	if(){}
	// });

	$('.az-select').each(function(){
		var select = $(this);    
		var option = select.find('select option');
		var str = '<div class="az-options clearfix">';
		select.find('option').each(function(){
		  str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
		});
		str+= '</div>';
		select.html(select.html() + str);

		select.find('select').mousedown(function(){
		  return false;
		});
		select.mouseup(function(){
		  // select.find('select').focus();
		});

		// select.find('select').keyup(function(e){
		//     if (e.keyCode == 13 || e.keyCode == 32) {
		//         alert(1);
		//         // e.preventDefault();
		//         return false;
		//     }
		// });
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
			// jQuery("span#startDistSpan").text(jQuery("#az-slider").slider("values",0)+" км.");
			// jQuery("span#endDistSpan").text(jQuery("#az-slider").slider("values",1)+" км.");
		},
		slide: function(event, ui){
			jQuery("input#startDist").val(jQuery("#az-slider").slider("values",0)+" км.");
			jQuery("input#endDist").val(jQuery("#az-slider").slider("values",1)+" км.");
			// jQuery("span#startDistSpan").text(jQuery("#az-slider").slider("values",0)+" км.");
			// jQuery("span#endDistSpan").text(jQuery("#az-slider").slider("values",1)+" км.");
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
			// jQuery("span#startCostSpan").text(jQuery("#az-slider2").slider("values",0)+" р.");
			// jQuery("span#endCostSpan").text(jQuery("#az-slider2").slider("values",1)+" р.");
		},
		slide: function(event, ui){
			jQuery("input#startCost").val(jQuery("#az-slider2").slider("values",0)+" р.");
			jQuery("input#endCost").val(jQuery("#az-slider2").slider("values",1)+" р.");
			// jQuery("span#startCostSpan").text(jQuery("#az-slider2").slider("values",0)+" р.");
			// jQuery("span#endCostSpan").text(jQuery("#az-slider2").slider("values",1)+" р.");
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

	// $('#widget')
	// $("#az-slider").ionRangeSlider({
	//     type: "double",
	//     // grid: true,
	//     min: 0,
	//     max: 1000,
	//     from: 200,
	//     to: 800,
	//     // prefix: "$"
	// });

	// $(".az-submit input[type=reset]").click(function(){
	// 	jQuery("#az-slider").slider("values", 0, initialMinimumValue);
	// 	jQuery("#az-slider").slider("values", 1, initialMaximumValue);
	// 	jQuery("span#minCost2").text(jQuery("#az-slider").slider("values",0));
	// 	jQuery("span#maxCost2").text(jQuery("#az-slider").slider("values",1));
	// });

	var reg_num = {};//new Array();

	$(".change-region").eq(0).find("option").each(function(i){
		reg_num[$(this).val()] = i;
	});

	// alert(reg_num["Тверская область"]);

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



	$('.az-file-input').change(function(e){
	  $("#logo-example-img").attr("src", URL.createObjectURL(e.target.files[0]));
	  $(this).siblings('.az-file-name').text($(this).val().substring($(this).val().lastIndexOf('\\')+1,$(this).val().length));
	  // $(this).siblings('input[type="hidden"]').attr('value', $(this).val().substring($(this).val().lastIndexOf('\\')+1,$(this).val().length));
	});

	// var file_name = 1;

	$('.az-galary-input').change(function(e){
	  $("#az-galary").append('<div class="az-col-8">'+
										'<div class="az-galery-box">'+
											'<img src="'+URL.createObjectURL(e.target.files[0])+'" alt="галерея">'+
											'<a href="#" class="az-del-gal"></a>'+
										'</div>'+
									'</div>');
});

	$("body").on("click", ".az-del-gal", function(){
		$(this).parents(".az-galery-box").parent().remove();
		return false;
	})
	// $('.az-galary-input').change(function(e){
	//   $("#az-galary").after('<input class="az-galary-input" type="file" name="" id="galary-example">').append($(this).removeAttr("id").attr("name", "galary-item"+file_name));
	//   file_name++
	//   // $(this).siblings('.az-file-name').text($(this).val().substring($(this).val().lastIndexOf('\\')+1,$(this).val().length));
	//   // $(this).siblings('input[type="hidden"]').attr('value', $(this).val().substring($(this).val().lastIndexOf('\\')+1,$(this).val().length));
	// });

	// $(window).scroll(function(){
	// 		if(window.matchMedia( "(max-width: 1200px)" ).matches){
	// 	    if($(window).scrollTop()>100){
	// 	        $('.az-header-top').addClass('az-mob-menu-fix');
	// 	    }else{
	// 	        $('.az-header-top').removeClass('az-mob-menu-fix');
	// 	    }
	// 	    if($(window).scrollTop()>200){
	// 	        $('.az-header-top').addClass('az-mob-menu-fix2');
	// 	    }else{
	// 	        $('.az-header-top').removeClass('az-mob-menu-fix2');
	// 	    }
	// 	  } else {
	// 	  	$('.az-header-top').removeClass('az-mob-menu-fix').removeClass('az-mob-menu-fix2');
	// 	  }
	// });
});

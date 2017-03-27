$(function() {
	$(".az-menu-icon").click(function(){
		$(this).next().slideToggle(0);
	});

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
		max: $("input#maxDist").val(),
		values: [$("input#startDist").val(),$("input#endDist").val()],
		range: true,
	    stop: function(event, ui) {
			jQuery("input#startDist").val(jQuery("#az-slider").slider("values",0));
			jQuery("input#endDist").val(jQuery("#az-slider").slider("values",1));
			jQuery("span#startDistSpan").text(jQuery("#az-slider").slider("values",0)+" км.");
			jQuery("span#endDistSpan").text(jQuery("#az-slider").slider("values",1)+" км.");
		},
		slide: function(event, ui){
			jQuery("input#startDist").val(jQuery("#az-slider").slider("values",0));
			jQuery("input#endDist").val(jQuery("#az-slider").slider("values",1));
			jQuery("span#startDistSpan").text(jQuery("#az-slider").slider("values",0)+" км.");
			jQuery("span#endDistSpan").text(jQuery("#az-slider").slider("values",1)+" км.");
		}
	});

	jQuery("#az-slider2").slider({
		min: parseInt($("input#minCost").val()),
		max: $("input#maxCost").val(),
		values: [$("input#startCost").val(),$("input#endCost").val()],
		range: true,
	    stop: function(event, ui) {
			jQuery("input#startCost").val(jQuery("#az-slider2").slider("values",0));
			jQuery("input#endCost").val(jQuery("#az-slider2").slider("values",1));
			jQuery("span#startCostSpan").text(jQuery("#az-slider2").slider("values",0)+" р.");
			jQuery("span#endCostSpan").text(jQuery("#az-slider2").slider("values",1)+" р.");
		},
		slide: function(event, ui){
			jQuery("input#startCost").val(jQuery("#az-slider2").slider("values",0));
			jQuery("input#endCost").val(jQuery("#az-slider2").slider("values",1));
			jQuery("span#startCostSpan").text(jQuery("#az-slider2").slider("values",0)+" р.");
			jQuery("span#endCostSpan").text(jQuery("#az-slider2").slider("values",1)+" р.");
		}
	});

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
});

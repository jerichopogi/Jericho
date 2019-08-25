(function( $ ) {
	"use strict";

	jQuery(document).ready(function($){
		
		var handle = $( "#custom-handle" );
		$( "#slider" ).slider({
		  create: function() {			 
			handle.text( $( this ).slider( "value" ) );
			handle.text( $('#myfixed_opacity').val() );
			handle.css('left', $('#myfixed_opacity').val() + '%')
		  },
		  slide: function( event, ui ) {
			$('#myfixed_opacity').val(ui.value);
			handle.text( ui.value );
		  }
		});
		jQuery(
		  '<div class="pt_number"><div class="pt_numberbutton pt_numberup">+</div><div class="pt_numberbutton pt_numberdown">-</div></div>'
		).insertAfter("input.mysticky-number1");

		jQuery(".mystickynumber1").each(function() {

			var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find(".pt_numberup"),
			btnDown = spinner.find(".pt_numberdown"),
			min = input.attr("min"),
			max = input.attr("max"),
			valOfAmout = input.val(),
			newVal = 0;

			btnUp.on("click", function() {

				var oldValue = parseFloat(input.val());

				if (oldValue >= max) {
				  var newVal = oldValue;
				} else {
				  var newVal = oldValue + 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
				console.log(newVal);
			});
			btnDown.on("click", function() {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
				var newVal = oldValue;
				} else {
				var newVal = oldValue - 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
		});


		$(".confirm").on( 'click', function() {
			return window.confirm("Reset to default settings?");
		});

		var flag = 0;
		$( "#mystickymenu-select option" ).each(function( i ) {
			
			if ($('select#mystickymenu-select option:selected').val() !== '' ) {
				flag = 1;
			}
			if( $('select#mystickymenu-select option:selected').val() == $(this).val() ){
				$('#mysticky_class_selector').show();
			}else {
				$('#mysticky_class_selector').hide();
			}
		});
		if ( flag === 0 ) {
			$('#mysticky_class_selector').show();
			$("select#mystickymenu-select option[value=custom]").attr('selected', 'selected');
		}
		
		$("#mystickymenu-select").on( 'change', function() {
			if ($(this).val() == 'custom' ) {
				$('#mysticky_class_selector').show();
			}else {
				$('#mysticky_class_selector').hide();
			}

		});
		/*02-08-2019 welcom bar js*/
		$( '.mysticky-welcomebar-action' ).on( 'change', function(){
			var mysticky_welcomebar_action = $( this ).val();
			if ( mysticky_welcomebar_action == 'close_bar' ) {
				$( '.mysticky-welcomebar-redirect' ).hide();
			} else {
				$( '.mysticky-welcomebar-redirect' ).show();
			}
		} );
		//$( '#mysticky_welcomebar_expirydate' ).datepicker(  );
		//$( "#mysticky_welcomebar_expirydate" ).datepicker( "option", "dateFormat", 'mm/dd/yy' );

		var page_option_content = "";
	    page_option_content = $( '.mysticky-welcomebar-page-options-html' ).html();
	    $( '.mysticky-welcomebar-page-options-html' ).remove();

	    $( '#create-rule' ).on( 'click', function(){
	        var append_html = page_option_content.replace(/__count__/g, '1', page_option_content);
	        $( '.mysticky-welcomebar-page-options' ).append( append_html );
			$( this ).remove();
	    });
	    $( '.sticky-header-menu ul li a' ).on( 'click', function(){
	    	if ( $( "#sticky-header-welcome-bar" ).is( ":visible" ) ) {
	    		check_for_preview_pos();
	    	}
	    } );
		jQuery(window).scroll(function(){
			if ( $( "#sticky-header-welcome-bar" ).is( ":visible" ) ) {
	    		check_for_preview_pos();
	    	}
		});
		/* welcome bar live preview */
		/* Apply Wp Color Picker */
		var myOptions = {
			change: function(event, ui){
				var color_id = $(this).attr('id');
				var slug = $(this).data('slug');
				
				var color_code = ui.color.toString();				
				if ( color_id === 'mysticky_welcomebar_bgcolor'){
					$('.mysticky-welcomebar-fixed').css('background-color', color_code );
				}
				if ( color_id === 'mysticky_welcomebar_bgtxtcolor'){
					$('.mysticky-welcomebar-fixed .mysticky-welcomebar-content p').css('color', color_code );
				}
				if ( color_id === 'mysticky_welcomebar_btncolor'){
					$('.mysticky-welcomebar-btn a').css('background-color', color_code );
				}
				if ( color_id === 'mysticky_welcomebar_btntxtcolor'){
					$('.mysticky-welcomebar-btn a').css('color', color_code );
				}
			}
	    };
		$('.mysticky-welcomebar-setting-wrap .my-color-field').wpColorPicker(myOptions);

		$( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_x_desktop]"]' ).on( 'change', function(){
			if( $( this ).prop( "checked" ) == true ) {
				$( '.mysticky-welcomebar-fixed' ).addClass( 'mysticky-welcomebar-showx-desktop' );
			} else {
				$( '.mysticky-welcomebar-fixed' ).removeClass( 'mysticky-welcomebar-showx-desktop' );
			}
		} );
		$( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_x_mobile]"]' ).on( 'change', function(){
			if( $( this ).prop( "checked" ) == true ) {
				$( '.mysticky-welcomebar-fixed' ).addClass( 'mysticky-welcomebar-showx-mobile' );
			} else {
				$( '.mysticky-welcomebar-fixed' ).removeClass( 'mysticky-welcomebar-showx-mobile' );
			}
		} );

		$( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_btn_desktop]"]' ).on( 'change', function(){
			if( $( this ).prop( "checked" ) == true ) {
				$( '.mysticky-welcomebar-fixed' ).addClass( 'mysticky-welcomebar-btn-desktop' );
			} else {
				$( '.mysticky-welcomebar-fixed' ).removeClass( 'mysticky-welcomebar-btn-desktop' );
			}
		} );
		$( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_btn_mobile]"]' ).on( 'change', function(){
			if( $( this ).prop( "checked" ) == true ) {
				$( '.mysticky-welcomebar-fixed' ).addClass( 'mysticky-welcomebar-btn-mobile' );
			} else {
				$( '.mysticky-welcomebar-fixed' ).removeClass( 'mysticky-welcomebar-btn-mobile' );
			}
		} );

		$( 'select[name="mysticky_option_welcomebar[mysticky_welcomebar_font]"]' ).on( 'change', function(){
			var myfixed_font_val = $( this ).val();
			$( 'head' ).append( '<link href="https://fonts.googleapis.com/css?family='+ myfixed_font_val +':400,600,700" rel="stylesheet" type="text/css" class="sfba-google-font">' );
			$( '.mysticky-welcomebar-fixed' ).css( 'font-family', myfixed_font_val );
		} );

		$( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_fontsize]"]' ).on( 'keyup click', function(){
			var mysticky_welcomebar_fontsize_val = $( this ).val();
			$( '.mysticky-welcomebar-fixed p' ).css( 'font-size', mysticky_welcomebar_fontsize_val + 'px' );
			$( '.mysticky-welcomebar-btn a' ).css( 'font-size', mysticky_welcomebar_fontsize_val + 'px' );
		} );

		$( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_bar_text]"]' ).on( 'keyup', function(){
			var mysticky_bar_text_val = $( this ).val();
			$( '.mysticky-welcomebar-content p' ).text( mysticky_bar_text_val );
		} );

		$( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_btn_text]"]' ).on( 'keyup', function(){
			var mysticky_btn_text_val = $( this ).val();
			$( '.mysticky-welcomebar-btn a' ).text( mysticky_btn_text_val );
		} );

		$( '.mysticky-welcomebar-submit input#submit' ).on( 'click', function(e){
			if ( $( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_enable]"]' ).prop( 'checked' ) == false && $( 'input#save_welcome_bar' ).val() == '' ) {
				e.preventDefault();
				$( "#mysticky-welcomebar-save-confirm" ).dialog({
					resizable: false,
					modal: true,
					draggable: false,
					height: 'auto',
					width: 600,
					buttons: {
						"Yes, show it on my site": {
							click:function () {
								$( 'input[name="mysticky_option_welcomebar[mysticky_welcomebar_enable]"]' ).prop( 'checked', true );
								$( '.mysticky-welcomebar-submit input#submit' ).trigger('click');
								$( this ).dialog('close');
							},
							text: 'Yes, show it on my site',
	                    	class: 'green-btn'
						},
						"Just save and keep it off": function () {
							$( 'input#save_welcome_bar' ).val('1');
							$( '.mysticky-welcomebar-submit input#submit' ).trigger('click');
							$( this ).dialog( 'close' );
						}
					}
				});
			}
			//return false;
		} );

	});
	$( window ).load( function(){
	    $( '.mysticky-welcomebar-url-options' ).each( function(){
	        $( this ).trigger( 'change' );
	    });
	});
	function check_for_preview_pos() {
		if($(".show-on-apper").length && $(".mysticky-welcomebar-setting-right").length) {
			var topPos = $(".show-on-apper").offset().top - $(window).scrollTop() - 650;
			if (topPos < 0) {
				topPos = Math.abs(topPos);
				jQuery(".mysticky-welcomebar-setting-right").css("margin-top", ((-1)*topPos)+"px");
			} else {
				jQuery(".mysticky-welcomebar-setting-right").css("margin-top", "0");
			}
		}
	}

})(jQuery);
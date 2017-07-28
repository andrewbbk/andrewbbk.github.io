$(document).ready(function(e) {


	$('.close').click(
		function(){
		$('.page-title_aside').hide(300);	
		}

		
		);



	$('.my-head_menu-icon').click(
		function(){
		$('.page-title_aside').show(300);	

		}

		);



	$('.list-menu li').click(
		function(){
			$('.page-title_aside').hide(300);
		}

		);


	$('.my-info_button').mouseenter(
		function(){
			$('.tooltip').show(300);
		}


		);

		$('.my-info_button').mouseout(
		function(){
			$('.tooltip').hide(300);
		}


		);






});


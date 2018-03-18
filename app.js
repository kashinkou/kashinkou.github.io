/*

*/
$(function(){
	$('img').attr('src','http://media.blizzard.com/wow/media/wallpapers/bosses/lich-king/lich-king-800x600.jpg');
	$('#button').on('click', function(){
		$('body').css('background-color', 'black');
		//$('img').attr('src','http://media.blizzard.com/wow/media/wallpapers/bosses/lich-king/lich-king-800x600.jpg');
	});
	$('#input').on('change', function() {
	var val;
	val = $('#input').val();
	$('.content').text(val);
	});
})


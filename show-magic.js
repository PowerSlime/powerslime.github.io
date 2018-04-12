$('.magic').find('.image-container').css({cursor: 'pointer'});

$('.magic').on('click', '.image-container', function() {
	var image = $(this).closest('.item-container');
	var paragraph = image.find('p')
	var old_text = paragraph.text();
	var new_text = paragraph.data('custom-text');

	if (image.hasClass('magic_clicked')) {
		image.removeClass('magic_clicked');
		image.find('img').animate(
			{opacity: 0},
			200
		);
	} else {
		image.addClass('magic_clicked');
		image.find('img').animate(
			{opacity: 1},
			200
		);
	}

	paragraph.text(new_text);
	paragraph.data('custom-text', old_text);
});

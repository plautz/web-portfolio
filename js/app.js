// jQuery 3.0+ equivalent to $(document).ready(fn)
$(updatePictureModalSize);
$(init);

/**
 * Initializes all event handlers
 * @return void
 */
function init() {

	// Initialize side nav for mobile
	$(".button-collapse").sideNav({
		edge: 'right',
		menuWidth: 200,
		closeOnClick: true,
		draggable: true
	});

	// Initialize all modals
	$('.modal').modal({
		dismissible: true,
		in_duration: 300,
		out_duration: 300,
		starting_top: '5%',
		ending_top: '10%',
	});

	// All modals close when opened and clicked again
	$('.modal').click(function() {
		$(this).modal('close');
	});

	// Truncate collapsible text when not in view
	$('.collapsible li').click(function() {
		var clicked = this;
		$('.collapsible li').each(function(i) {
			if ($(this) != $(clicked))
				$(this).children('.collapsible-header').addClass('truncate');
			else
				$(this).children('.collapsible-header').removeClass('truncate');
		});
	});

	// Bounce dat splash image
	$('#splash-img').mouseenter(function() {
		if (!$(this).hasClass('spinning')) {
			effect($(this), 'bounce', 3, 3);
		}
	})

	// Spin dat splash image
	$('#splash-img').click(function() {
		if (!$(this).hasClass('spinning')) {
			$img = $(this);

			$img.addClass('spin-me spinning');

			setTimeout(function() {
				$img.removeClass('spin-me spinning');
			}, 2000);
		}
	})

	// Shake dat nav image
	$('#nav-image').mouseenter(function() {
		effect($(this), 'shake', 2, 2);
	});

	// Change my picture's size for medium/small screens
	$(window).resize(function() {
		updatePictureModalSize();
	});
}

function updatePictureModalSize() {
	var w = $(window).width();

	if ($(window).width() < 625) {
		$('#pic-modal').css('height', 'auto');
		$('#pic-modal').css('width', '80%');
	} else {
		$('#pic-modal').css('height', '900px');
		$('#pic-modal').css('width', '600px');
	}
}

function effect($element, effect, times, distance) {
	$element.effect(effect, {
		times: times,
		distance: distance
	});
}

function restartGif(selector, src) {
	$(selector).prop('src', src + '?' + Math.random());
}

function goHome() {
	location.assign('index.html');
}

function checkContactForm() {
	name = $('#name').val();
	email = $('#email').val();
	subject = $('#subject').val();
	message = $('#message').val();

	email_valid = email.match(/^\S+@\S+$/) !== null ? true : false;

	if (name.length && subject.length && message.length && email_valid)
		$('#msg-confirm').modal('open');
	else
		$('#msg-error').modal('open');
}

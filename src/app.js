//toggle main offcanvas
$('.wrap > .content > .menu-btn:first-child').on('click', function() { $('.wrap').toggleClass('open'); });

$('.tabs > div:first-child').on('click', function (e) {
	var index = $(e.target).index();
	$(this).next().children().removeClass('active').eq(index).addClass('active');
	$(this).children().removeClass('active').eq(index).addClass('active');
});

$('.my-flipcard').on('click', function (e) { $(e.currentTarget).toggleClass('flip'); });

$('.oc-1 button').on('click', function (e) { $('.oc-1').toggleClass('open'); });
$('.oc-2 button').on('click', function (e) { $('.oc-2').toggleClass('open'); });
$('.oc-3 .toggle-top').on('click', function (e) { $('.oc-3').toggleClass('open-top'); });
$('.oc-3 .toggle-bottom').on('click', function (e) { $('.oc-3').toggleClass('open-bottom'); });

var Start = Start || {};

Start.showForm = function () {
	var save = function () {
		$.cookie('resolution', $form.find('[name=resolution]').val());
		$.cookie('quality',    $form.find('[name=quality]'   ).val());
		$.cookie('engine',     $form.find('[name=engine]'    ).val());
		$.cookie('texture',    $form.find('[name=texture]'   ).attr('checked') ? 1 : 0);
		$.cookie('light',      $form.find('[name=light]'     ).attr('checked') ? 1 : 0);
	};
	var $form = $('div.form');
	$form.find('div').hide();
	$form.find('[name=run-game]').click(function () {
		save();
		moveTo({
			type : 'game'
		});
	});
	$form.find('[name=run-editor]').click(function () {
		save();
		moveTo({
			type : 'editor',
			w : $form.find('[name=w]').val(),
			h : $form.find('[name=h]').val()
		});
	});
	save();
	var showType = function () {
		if ($(this).val() == 'editor') {
			$form.children(".editor-params").slideDown();
			$form.children(".game-params").slideUp();
			$form.find(".game-params .params").slideUp();
		} else {
			$form.children(".editor-params").slideUp();
			$form.children(".game-params").slideDown();
		}
	};
	$form.find("[name=type]").change(showType).change();
}
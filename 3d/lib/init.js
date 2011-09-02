$.keyboard({
	preventDefault : true
});

var Croft = function () {
	return $_GET['tr'] && 'f358130105f10a910fdbd6781aea5d62' ==
		$.md5(prompt ('Лара отказывается идти туда без оружия.')) &&
		confirm("Вы действительно хотите, чтобы Лара сделала это за вас?");
};

$(function () {
	if ($_GET['type']) {
		var method = Croft() ? 'tombRaiderMaze' : 'standartMaze';
		if ($_GET['type'] == 'editor') {
			Start.mapEditor($_GET['code']);
		} else if ($_GET['code']) {
			Start[method]($_GET['code']);
			$('body').append(
				$('<a>trimIt!</a>').attr('href', 'http://tr.im/marklet?url=' + encodeURIComponent(location.href))	
			);
		} else {
			Start[method](
				mazes[$_GET['lab'] * 1] || mazes[0]
			);
		}
		$('body').append(
			$('<br /><a>На главную</a>').attr('href', './')	
		);
	} else {
		Start.showForm();
	}
});
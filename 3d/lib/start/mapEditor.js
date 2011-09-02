var Start = Start || {};

Start.mapEditor = function (code) {
	var maze = new Maze;
	(typeof code == 'string') ? maze.fromString(code) :
		maze.mapEditor($_GET['w'] || 8, $_GET['h'] || 6);
	maze.mapOutput().getCell(1, 1).setActive();
	$('div.main').html('Стрелочками - двигаемся, awsd - ставим стены. <br />z - старт(зеленый). x - финиш(красный). enter - пройти');
	var arrows = {37:'left',38:'top',39:'right',40:'bottom'};
	$
		.keyboard('(arrows)', function (e) {
			var dir = arrows[e[0].keyCode];
			var nb  = maze.diff.active.getNeighbour(dir);
			if (nb) {
				nb.setActive();
			}
		})
		.keyboard('[a|w|d|s], shift+(arrows)', function (e, bind) {
			var dir = (bind.keys.group == 1) ? arrows[e[1].keyCode] :
				{65:'left',87:'top',68:'right',83:'bottom'}[e[0].keyCode];
			maze.diff.active.changeWall(dir);
		})
		.keyboard('z', function () {
			maze.diff.active.setDiff('start');
		})
		.keyboard('x', function () {
			maze.diff.active.setDiff('finish');
		})
		.keyboard('enter', function () {
			try {
				moveTo({
					'type' : 'game',
					'code' : maze.getCode()
				});
			} catch (e) {
				alert({
					'EmptyStart'  : 'Вы не указали начало',
					'EmptyFinish' : 'Вы не указали конец',
					'StartFinishEquals' : 'Начало и конец совпадают'
				}[e] || e)
			}
		});
}

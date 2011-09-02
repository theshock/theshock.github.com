<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Maze</title>
		<link href="styles.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" src="js.js"></script>
	</head>
	<body>
<?php if (1): ?>
		<div class="main">
			<canvas id="canvas"></canvas>
		</div>
<?php else: ?>
		<div class="form">
			<select name="type">
				<option value="game"  >Игра</option>
				<option value="editor">Редактор</option>
			</select>
			<div class="editor-params">
				<input type="text" name="w" value="15" class="size" /> &times; <input type="text" name="h" value="10" class="size" /> <br />
				<input name="run-editor" value="Создать карту!" type="submit" />
			</div>
			<div class="game-params">
				<select name="engine">
					<?php if ( 1 || !preg_match('/MSIE/i',$_SERVER['HTTP_USER_AGENT'])) : ?>
					<option value="Canvas" selected="selected">Canvas</option>
					<? endif; ?>
					<option value="Html"  >Html</option>
				</select>
				<select name="resolution">
					<option value="320x160" >Очень низкое разрешение (320x160)</option>
					<option value="480x240" >Низкое разрешение (480x240)</option>
					<option value="720x360" >Среднее разрешение (720x360)</option>
					<option value="1000x500" selected="selected" >Высокое разрешение (1000x500)</option>
					<option value="1200x600">Очень высокое разрешение (1200x600)</option>
					<option value="1600x800">Наивысшее разрешение (1600x800)</option>
				</select>
				<select name="quality">
					<option value="10">Просто жесть</option>
					<option value="5" >Очень низкое качество</option>
					<option value="4" >Низкое качество</option>
					<option value="3" >Среднее качество</option>
					<option value="2" selected="selected">Высокое качество</option>
					<option value="1" >Наивысшее качество</option>
				</select>
				<label for="texture">
					<input type="checkbox" name="texture" id="texture" checked="checked" /> Текстуры
				</label>
					<?php if ( 1 || !preg_match('/MSIE/i',$_SERVER['HTTP_USER_AGENT'])) : ?>
				<label for="light">
					<input type="checkbox" name="light" id="light" checked="checked" /> Объемный свет
				</label>
					<? endif; ?>
				<input name="run-game" value="Шпилить!" class="submit" type="submit" />
			</div>

		</div>
<?php endif; ?>
	</body>
</html>

<?php
	$s = microtime(1);
	header('Content-Type:application/x-javascript');
	$files = array_merge(
		glob('./lib/jquery/*.js'),
		glob('./lib/classes/*.js'),
		glob('./lib/extend/*.js'),
		glob('./lib/output/*.js'),
		glob('./lib/canvas/*.js'),
		glob('./lib/rayCaster/*.js'),
		glob('./lib/start/*.js'),
		glob('./lib/*.js')
	);

    $src = '';
	foreach ($files as $js) {
		$src .= "// $js \n";
		$src .= file_get_contents($js) . "\n\n";
	}

    echo $src, '// ' . (microtime(1) - $s);

// test
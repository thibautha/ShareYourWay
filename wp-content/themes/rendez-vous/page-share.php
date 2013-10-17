<!DOCTYPE html>

<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php wp_title(); ?></title>

	<meta name="description" content="A website about sharing your trips.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style/write.css">
	
	<?php wp_head(); ?>
</head>
<body>
    <header>
        <h1>Partagez votre histoire</h1>
    </header>
    <form autocomplete="off">
        <fieldset>
        </fieldset>
    </form>
    <footer>
        <?php wp_footer(); ?>
    </footer>
</body>
</html>

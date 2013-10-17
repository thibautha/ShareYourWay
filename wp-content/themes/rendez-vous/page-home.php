<!DOCTYPE html>

<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php wp_title(); ?></title>

	<meta name="description" content="A website about sharing your trips.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style/reset.css">
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style/home.css">
	
	<?php wp_head(); ?>
</head>
<body>
    <section id="home-nav">
        <?php the_content(); ?>
    </section>
    
    <a class="fb-share" href="#" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'); return false;" title="Share on Facebook">Share on Facebook</a>
</body>
</html>

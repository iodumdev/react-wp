<?php
/*
 * API configuration file
 */

function menu_endpoint(){

	$res = [];
	$menu_array = wp_get_nav_menu_items('top menu');

	foreach ($menu_array as $item){

		array_push($res, array(

				'title'	=> $item->title,
				'ID'	=> $item->ID,
				'url'	=> parse_url($item->url, PHP_URL_PATH),
		));
	}
	
	return $res;

}

function post_endpoint( $args ){

	$slug = urldecode($args['id']);

	$post = get_page_by_path( $slug );

	
	return $post;

}


add_action('rest_api_init', function(){
	register_rest_route(
		'components/v1', '/menu',
		array(
			'methods'	=> 'GET',
			'callback'	=> 'menu_endpoint',
		)
	);
});

add_action('rest_api_init', function(){
	register_rest_route(
		'components/v1', '/post/(?P<id>.+)',
		array(
			'methods'	=> 'GET',
			'callback'	=> 'post_endpoint',
		)
	);
});
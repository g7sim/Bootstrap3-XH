<?php    

/* function Bt3Menu($node, $attributes){
	GLOBAL $XH_LINKS;

	if( $node == 'a' ){
		$format = $XH_LINKS;
		$search = array('{$href_text}','{$attr}','{$label}','{$title}');

		if( in_array('has-submenu',$attributes['class']) ){
			$format = '<a {$attr} class="has-submenu" href="{$href_text}" title="{$title}">{$label}<b class="caret"></b></a>';
		}
		return str_replace( $search, $attributes, $format );
	}
}

*/
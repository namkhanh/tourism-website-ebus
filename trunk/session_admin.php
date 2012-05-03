<?php
if (!(isset($_SESSION['login']) && ($_SESSION['login']))) {
	if (!($_SESSION['username']=='inte' && isset($_SESSION['username'])))
	header('Location: index.html');
}
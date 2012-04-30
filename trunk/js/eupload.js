$(function() {

	$('#UploadEbookImg')
			.uberuploadcropper(
					{
						// ---------------------------------------------------
						// uploadify options..
						// ---------------------------------------------------
						'debug' : true,
						'action' : 'upload.php',
						'params' : {},
						'allowedExtensions' : [ 'jpg', 'jpeg', 'png', 'gif' ],
						// 'sizeLimit' : 0,
						// 'multiple' : true,
						// ---------------------------------------------------
						// now the cropper options..
						// ---------------------------------------------------
						'aspectRatio' : 1,
						'allowSelect' : false, // can reselect
						'allowResize' : true, // can resize selection
						'setSelect' : [ 0, 0, 200, 200 ], // these are the
						// dimensions of the
						// crop box
						// x1,y1,x2,y2
						// 'minSize': [ 100, 100 ], //if you want to be able to
						// resize, use these
						// 'maxSize': [ 100, 100 ],
						// ---------------------------------------------------
						// now the uber options..
						// ---------------------------------------------------
						'folder' : 'uploads/', // only used in uber, not passed
						// to server
						'cropAction' : 'crop.php', // server side request to
						// crop image
						'onComplete' : function(imgs, data) {
							var $PhotoPrevs = $('#ImgPrevs');

							for ( var i = 0, l = imgs.length; i < l; i++) {
								$PhotoPrevs
										.html('<img width ="300" height="200" src="uploads/'
												+ imgs[i].filename
												+ '?d='
												+ (new Date()).getTime()
												+ '" />');
								$PhotoPrevs
										.append('<input type="hidden" name="newImg" value="uploads/'
												+ imgs[i].filename
												+ '?d='
												+ (new Date()).getTime()
												+ '" />');
							}
						}
					});
});
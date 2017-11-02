const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');


imagemin(['src/img/*.{jpg,png}'], 'build/img', {
	plugins: [
		imageminMozjpeg(),
		imageminPngquant({quality: '65-80'})
	]
}).then(files => {
	console.log(files[0].path);
});
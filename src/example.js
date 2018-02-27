import imgs from './index';

console.log(imgs);
function createImg(src) {
    var img = document.createElement('img');
    img.src = src;
    document.body.appendChild(img);
}
window.onload = () => {
    createImg(imgs.home.img1);
    createImg(imgs.home.img2);
};

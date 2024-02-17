window.addEventListener('load', changeColor);

function changeColor () {
  let red = document.getElementById('red-slider').value;
  let green = document.getElementById('green-slider').value;
  let blue = document.getElementById('blue-slider').value;
  let rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';

  let hex = rgbToHex(rgb);

  let color = document.getElementById('color-square');
  color.style.backgroundColor = rgb;

  document.getElementById('red-value').innerHTML = red;
  document.getElementById('green-value').innerHTML = green;
  document.getElementById('blue-value').innerHTML = blue;
  document.getElementById('rgb-value').innerHTML = rgb;
  document.getElementById('hex-value').innerHTML = hex;
}

document.getElementById('red-slider').addEventListener('input', changeColor);
document.getElementById('green-slider').addEventListener('input', changeColor);
document.getElementById('blue-slider').addEventListener('input', changeColor);

document.querySelector('.rgb-copy-icon').addEventListener('click', function() {
  var rgbValue = document.querySelector('#rgb-value').innerText;
  navigator.clipboard.writeText(rgbValue)
    .then(() => {
      alert(`RGB copied to clipboard: ${rgbValue}`);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
});

document.querySelector('.hex-copy-icon').addEventListener('click', function() {
  var hexValue = document.querySelector('#hex-value').innerText;
  navigator.clipboard.writeText(hexValue)
    .then(() => {
      alert(`HEX copied to clipboard: ${hexValue}`);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
});

function rgbToHex(rgb) {
  var rgbArray = rgb.match(/\d+/g);
  var hex = "#" + ((1 << 24) + (+rgbArray[0] << 16) + (+rgbArray[1] << 8) + +rgbArray[2]).toString(16).slice(1);
  return hex;
}
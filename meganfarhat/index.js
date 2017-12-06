let title = document.querySelector('h1.text-align-center')
let titleStr = title.innerText
title.innerText = ""
const numColors = 3;

const getSpan = (str, index) => {
  let span = document.createElement('span');
  let colorIndex = index % numColors;
  span.innerText = str;
  span.setAttribute('class', `letter${colorIndex}`);
  return span;
}

titleStr.split(' ').forEach(word => {
  let spans = word.split('').map(getSpan);
  spans.forEach(span => title.appendChild(span));
  title.append('\n');
});

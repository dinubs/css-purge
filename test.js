const cssPurge = require('./lib/css-purge');

const css = `
h1 {
  color: red;
  font-weight: bold;
}

h1, h2 {
  color: purple;
}

h1 {
  color: black;
  position: absolute;
}
`;

cssPurge.purgeCSS(css, {

}, function(error, result){
  if (error) {
    console.log(error);
  } else {
    console.log('Output CSS: ',  result);
  }
})

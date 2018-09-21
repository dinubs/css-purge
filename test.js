const cssPurge = require('./lib/css-purge');

const css = `
h1 {
  color: red;
}

h1, h2 {
  color: purple;
}

h1 {
  color: black;
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

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let multiStyle = function() {
  let args = arguments;
  let style = arguments[0];
  let out = {};

  for (var p in args) {
    if (args.hasOwnProperty(p)) {
      if (args[p] !== style) {
        out = Object.assign(out, style[args[p]]);
      }
    }
  }

  return out;
}

let stylex = function(style) {
  return Object.assign({}, style);
}

let movilYes = [];
let movilNo = [];

let movil = function(yes, no) {
  movilNo.push(no);
  movilYes.push(yes);
  checkResize();
}

function checkResize() {
  let mediaQuery = window.matchMedia('(min-width: 650px)');
  if (!mediaQuery.matches) {
    movilYes.forEach((f) => {
      f();
    });
  } else {
    movilNo.forEach((f) => {
      f();
    });
  }
}

window.addEventListener('resize', (event) => {
  checkResize();
});

export {
  isNumber,
  multiStyle,
  movil,
  stylex
};

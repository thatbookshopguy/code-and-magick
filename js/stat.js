const MIN_X = 100;
const MIN_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const TEXT_COLOR = `#000`;
const TEXT_FONT = `16px PT Mono`;
const COL_WIDTH = 40;
const COL_GAP = 50;
const COL_COLOR_PLAYER = `rgba(255, 0, 0, 1)`;
const COL_COLOR = `rgba(37, 116, 169, `;
const MIN_OPACITY = 0.4;
const COL_MAX_HEIGHT = 150;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let renderText = function (ctx, x, y, text) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText(text, x, y);
};

let renderColumn = function (ctx, x, y, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, COL_WIDTH, height);
};

let getMaxElem = function (arr) {
  return Math.max.apply(null, arr);
};

let getColHeight = function (arr, i) {
  let percent = getMaxElem(arr) / 100;
  let height = arr[i] / percent;
  let colHeight = Math.floor(height * COL_MAX_HEIGHT / 100);
  return colHeight;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, MIN_X + 10, MIN_Y + 10, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, MIN_X, MIN_Y, `#fff`);
  renderText(ctx, MIN_X + 40, MIN_Y + 30, `Ура вы победили!`);
  renderText(ctx, MIN_X + 40, MIN_Y + 50, `Список результатов:`);
  for (let i = 0; i < names.length; i++) {
    let x = (MIN_X + 60) + i * (COL_WIDTH + COL_GAP);
    let opacity = Math.random() + MIN_OPACITY;
    let name = names[i];
    let time = Math.floor(times[i]);
    let height = getColHeight(times, i);
    let y = COL_MAX_HEIGHT - height + (MIN_Y + 90);
    let colColor;
    if (name !== `Вы`) {
      colColor = COL_COLOR + opacity + `)`;
    } else {
      colColor = COL_COLOR_PLAYER;
    }

    renderColumn(ctx, x, y, height, colColor);
    renderText(ctx, x, 270, name);
    renderText(ctx, x, y - 10, time);
  }
};

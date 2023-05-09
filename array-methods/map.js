const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const arr = prices.map(map, prices);
console.log('sales', arr);
function map(prices) {
  const P = {
    price: prices,
    salePrice: prices / 2,
  };
  return P;
}

const dollar = prices.map(format, prices);
console.log('money', dollar);

function format(prices) {
  const J = '$' + prices.toFixed(2);
  return J;
}

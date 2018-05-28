export default {
  short: function (number) {
    const roundedNumber = Math.ceil(number * 100) / 100;

  if (roundedNumber >= 1000000000) return `${(roundedNumber / 1000000000).toFixed(1)}G`;
  if (roundedNumber >= 1000000) return `${(roundedNumber / 1000000).toFixed(1)}M`;
  if (roundedNumber >= 1000) return `${(roundedNumber / 1000).toFixed(1)}K`;

  return roundedNumber;
  }
}

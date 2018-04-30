module.exports = function keyish() {
  const args = Array.prototype.slice.apply(arguments)
  return args.join('~')
}

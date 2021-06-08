function exportedFunc() {
  console.log('-----  exported func');
}

function noExportFunc() {
  console.log('--- no no no');
}

module.exports = {
  exportedFunc,
}

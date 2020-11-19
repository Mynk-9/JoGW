const fs = require('fs');

function servePage(res, path) {
  const page = fs.createReadStream(path);
  res.status(200);
  page.pipe(res);
  page.on('end', () => {
    res.end();
    page.destroy();
  });
}

module.exports = servePage;

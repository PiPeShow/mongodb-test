const pdf = require('html-pdf');

const html = '<h1>Hello World</h1>'; // Your HTML content
const options = { format: 'Letter' };

pdf.create(html, options).toFile('./hello.pdf', (err, res) => {
  if (err) return console.log(err);
  console.log(res);
});
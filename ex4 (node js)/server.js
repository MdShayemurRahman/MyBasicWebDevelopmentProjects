const express = require ('express'); //create an express server..
const app = express();
const PORT = 3300; //define port. process.env.PORT||3000 is an standarised format.

app.get('/json', (req, res) => {
    data = [
        {"Monday": 0},
        {"Tuesday": 1},
        {"Wednesday": 2},
        {"Thursday": 3},
        {"Friday": 4},
        {"Saturday": 5},
        {"Sunday": 6}
    ]
    
    //res.json(data);
    res.send(data);
    console.log(data);
});

app.get('/html', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1>Days of the week!</h1>');
    res.write('<table border="1"><tr><th><td>Index</td><td>Name</td></th></tr>');
    res.write('<tr><th><td>0</td><td style="border: 1px solid">Monday</td></th></tr>');
    res.write('<tr><th><td>1</td><td>Tuesday</td></th></tr>');
    res.write('<tr><th><td>2</td><td>Wednesday</td></th></tr>');
    res.write('<tr><th><td>3</td><td>Thursday</td></th></tr>');
    res.write('<tr><th><td>4</td><td>Friday</td></th></tr>');
    res.write('<tr><th><td>5</td><td>Saturday</td></th></tr>');
    res.write('<tr><th><td>6</td><td>Sunday</td></th></tr>');
    res.end('</table></body></html>');
});

app.get('/html/0', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1>Days of the Week</h1>');
    res.write('<table border="1"><tr><th>Name</th><th>Index</th></tr>');
    res.write('<tr><td>Monday</td><td>0</td></tr>');
    res.end('</table></body></html>');
});
app.get('/html/1', (req, res) => {
   res.write('<html><head></head><body>');
   res.write('<h1>Days of the Week</h1>');
   res.write('<table border = "1"><tr><th>Name</th><th>Index</th></tr>');
   res.write('<tr><td>Tuesday</td><td>1</td></tr>');
   res.end('</table></body></html>');
});
app.get('/html/2', (req, res) => {
   res.write('<html><head></head><body>');
   res.write('<h1>Days of the Week</h1>');
   res.write('<table border = "1"><tr><th>Name</th><th>Index</th></tr>');
   res.write('<tr><td>Wednesday</td><td>2</td></tr>');
   res.end('</table></body></html>');
});
app.get('/html/3', (req, res) => {
   res.write('<html><head></head><body>');
   res.write('<h1>Days of the Week</h1>');
   res.write('<table border = "1"><tr><th>Name</th><th>Index</th></tr>');
   res.write('<tr><td>Thursday</td><td>3</td></tr>');
   res.end('</table></body></html>');
});
app.get('/html/4', (req, res) => {
   res.write('<html><head></head><body>');
   res.write('<h1>Days of the Week</h1>');
   res.write('<table border = "1"><tr><th>Name</th><th>Index</th></tr>');
   res.write('<tr><td>Friday</td><td>4</td></tr>');
   res.end('</table></body></html>');
});
app.get('/html/5', (req, res) => {
   res.write('<html><head></head><body>');
   res.write('<h1>Days of the Week</h1>');
   res.write('<table border = "1"><tr><th>Name</th><th>Index</th></tr>');
   res.write('<tr><td>Saturday</td><td>5</td></tr>');
   res.end('</table></body></html>');
});
app.get('/html/6', (req, res) => {
   res.write('<html><head></head><body>');
   res.write('<h1>Days of the Week</h1>');
   res.write('<table border = "1"><tr><th>Name</th><th>Index</th></tr>');
   res.write('<tr><td>Sunday</td><td>6</td></tr>');
   res.end('</table></body></html>');
});

app.listen(PORT, () => {
    console.log(`server listening to port ${PORT}`);
});
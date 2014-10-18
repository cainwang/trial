var request = require('request');

function doRequest(path, json, method) {
    method = method || 'GET';
    var options = {
        method: method,
        url: 'http://localhost:5984/' + path,
        json: json
    };

    request(options, function(err, res, body) {
        if (err) {
            throw Error(err);
        }

        console.log(body);
    });
}

function createBookDB() {
    doRequest('books', 'PUT');
}

function findAllBooks() {
    doRequest('books', 'GET');
}

function addBook(name, author, text) {
    doRequest('books/33?rev=1-5528ec14fa79d178e84a46da0ca63157', {
        name: name,
        author: author,
        text: text
    }, 'PUT');
}

function findBook(id) {
    doRequest('books/' + id);
}

//createBookDB();
addBook('Catherine', 'Cain', 'I stand for the light.');
//findAllBooks();
//findBook(33);

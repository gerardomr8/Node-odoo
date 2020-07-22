var Odoo = require('odoo-xmlrpc');

var odoo = new Odoo({
    url: "localhost",
    port: puerto,
    db: "base de datos",
    username: 'correo con el que te logeaste odoo',
    password: 'contraseña con la que te logeaste en odoo'
});

//leer registros, esta funcion leera los clientes que son de tipo compañia y tipo cliente.
//
odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([['is_company', '=', true],['customer', '=', true]]); //Si cambiamos 'customer' por supplier buscara los clientes que son de tipo compañia y tipo proveedor
    inParams.push(0);  //offset
    inParams.push(1);  //Limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search', params, function (err, value) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push(value); //ids
        var params = [];
        params.push(inParams);
        odoo.execute_kw('res.partner', 'read', params, function (err2, value2) {
            if (err2) { return console.log(err2); }
            console.log('Result: ', value2);
        });
    });
});
var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "cpt_TRS",
		password: "oauth:ec24amaubemcys6a0dgj2pqdliv7jw",
	},
	channels: ['#gaules',] //ADICIONA OS CANAIS AQ COM '#NOME'
};
                
var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});

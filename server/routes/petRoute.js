const querystring = require("querystring");
const { Curl } = require("node-libcurl");
const terminate = curlTest.close.bind(curlTest);

const curlTest = new Curl();

curlTest.setOpt(Curl.option.URL, "https://reqres.in/api/users");
curlTest.setOpt(Curl.option.POST, true);
curlTest.setOpt(
	Curl.option.POSTFIELDS,
	querystring.stringify({
		name: "section",
		job: "webdev",
	})
);
curlTest.on("end", function (statusCode, data, headers) {
	console.info("Status code " + statusCode);
	console.info("***");
	console.info("Our response: " + data);
	console.info("***");
	console.info("Length: " + data.length);
	console.info("***");
	console.info("Total time taken: " + this.getInfo("TOTAL_TIME"));

	this.close();
});
curlTest.on("error", terminate);

curlTest.perform();



var http = require('http');
var parse = require('csv-parse');



http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
str = "47,Democratic,Law,Beard,Cancer,Extrovert"
name="Filbert Hankerdoodle";




function fillTraining(){


  parser.write("51,Democratic,Law,Nothing,Aquarius,Extrovert\n");
  parser.write("57,Independent,Military,Nothing,Aquarius,Introvert\n");
  parser.write("58,Dem-rep,Law,Nothing,Aries,Introvert\n");
  parser.write("43,Republican,Law,Moustache,Scorpio,Extrovert\n");
  parser.write("56,Republican,Law,Nothing,Aquarius,Introvert\n");
  parser.write("55,Republican,Geology,Nothing,Leo,Extrovert\n");
  parser.write("61,Republican,Law,Nothing,Cancer,Extrovert\n");
  parser.write("56,Republican,Law,Both,Leo,Introvert\n");
  parser.write("56,Republican,Business,Nothing,Cancer,Extrovert\n");
  parser.write("61,Democratic,Farmer,Nothing,Taurus,Introvert\n");
  parser.write("57,Democratic,History,Nothing,Capricorn,Introvert\n");
  parser.write("63,Republican,Military,Nothing,Libra,Introvert\n");
  parser.write("62,Democratic,Nothing,Nothing,Pisces,Extrovert\n");
  parser.write("44,Democratic,Law,Nothing,Gemini,Extrovert\n");
  parser.write("65,Republican,Business,Nothing,Scorpio,Introvert\n");
  parser.write("66,Democratic,Law,Nothing,Taurus,Extrovert\n");
  parser.write("57,Democratic,Nothing,Nothing,Capricorn,Introvert\n");
  parser.write("49,Democratic,Law,Nothing,Sagittarius,Extrovert\n");
  parser.write("51,Independent,Law,Nothing,Aries,Introvert\n");
  // Close the readable stream
  parser.end();
}

  var output = [];
  // Create the parser
  var parser = parse();
  // Use the writable stream api
  parser.on('readable', function(){
    while(record = parser.read()){
      output.push(record);
    }
  });
  // Catch any error
  parser.on('error', function(err){
    console.log(err.message);
  });
  // When we are done, test that the parsed output matched what expected
  parser.on('finish', function(){
    console.log(changeToVals(output));
     output = changeToVals(output);
     console.log(name);
    predict(output);

  });
  // Now that setup is done, write data to the stream
  parser.write(str);
  parser.end();

ratings = ['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no','no','yes', 'yes','yes', 'yes','yes','no', 'no', 'no', 'no', 'no']
function changeToVals(arr){
    for (var i = 0; i < arr.length; i++) {


    if (arr[i][1] === "Republican") {
      arr[i][1] = 0;
    }
    if (arr[i][1] === "Democratic") {
      arr[i][1] = 1;
    }
    if (arr[i][1] === "Independent") {
      arr[i][1] = 2;
    }
    if (arr[i][1] === "Dem-rep") {
      arr[i][1] = 3;
    }
    if (arr[i][2] === "Law") {
      arr[i][2] = 0;
    }
    if (arr[i][2] === "History") {
      arr[i][2] = 1;
    }
    if (arr[i][2] === "Military") {
      arr[i][2] = 2;
    }
    if (arr[i][2] === "Geology") {
      arr[i][2] = 3;
    }
    if (arr[i][2] === "Business") {
      arr[i][2] = 4;
    }
    if (arr[i][2] === "Nothing") {
      arr[i][2] = 5;
    }
    if (arr[i][2] === "Farmer") {
      arr[i][2] = 6;
    }
    if (arr[i][3] === "Beard") {
      arr[i][3] = 0;
    }
    if (arr[i][3] === "Moustache") {
      arr[i][3] = 1;
    }
    if (arr[i][3] === "Nothing") {
      arr[i][3] = 2;
    }
    if (arr[i][3] === "Both") {
      arr[i][3] = 3;
    }
    if (arr[i][5] === "Introvert") {
      arr[i][5] = 0;
    }
    if (arr[i][5] === "Extrovert") {
      arr[i][5] = 1;
    }
    if (arr[i][4] === "Aquarius") {
      arr[i][4] = 0;
    }
    if (arr[i][4] === "Aries") {
      arr[i][4] = 1;
    }
    if (arr[i][4] === "Scorpio") {
      arr[i][4] = 3;
    }
    if (arr[i][4] === "Leo") {
      arr[i][4] = 4;
    }
    if (arr[i][4] === "Cancer") {
      arr[i][4] = 5;
    }
    if (arr[i][4] === "Taurus") {
      arr[i][4] = 6;
    }
    if (arr[i][4] === "Capricorn") {
      arr[i][4] = 7;
    }
    if (arr[i][4] === "Libra") {
      arr[i][4] = 8;
    }
    if (arr[i][4] === "Pisces") {
      arr[i][4] = 9;
    }
    if (arr[i][4] === "Gemini") {
      arr[i][4] = 10;
    }
    if (arr[i][4] === "Sagittarius") {
      arr[i][4] = 11;
    }

  }
  return arr;
}

function predict(output){
  var options = {
    "method": "POST",
    "hostname": "president-api.eu-gb.mybluemix.net",
    "port": null,
    "path": "/predict",
    "headers": {
      "authorization": "OreGaOchinchin:patje",
      "content-type": "application/json"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(JSON.stringify({ person: output}));
  req.end();
}


function train(output){
  var options = {
    "method": "POST",
    "hostname": "president-api.eu-gb.mybluemix.net",
    "port": null,
    "path": "/train",
    "headers": {
      "authorization": "OreGaOchinchin:patje",
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "1d47817f-2066-4b0d-10bb-25dd992ebf3c"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(JSON.stringify({ training_data: output, labels: ratings }));
  req.end();
}

exports.handler = function(event, context, callback) {
  const rndm = Math.floor(Math.random() * 1000 + 1);
  callback(null, {
    statusCode: 200,
    body: rndm
  });
};

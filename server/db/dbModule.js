

module.exports = async (mongoose, uri) => {
  mongoose.Promise = global.Promise;
  await mongoose.connect(
    uri,
    {useMongoClient: true},
    () => console.log(`1/5 - DB connection initialized: ${uri}`)
  );
}

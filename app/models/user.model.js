module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      mobile: String,
      email:String,
      adderss:{
        street:String,
        locality:String,
        city:String,
        pincode:String,
        coordinatesType:String,
        coordinates:[number],
      }
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const user = mongoose.model("user", schema);
  return user;
};

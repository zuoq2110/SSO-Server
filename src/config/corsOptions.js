
export const corsOptions = {
  origin: function (origin, callback) {
    // Cho phép pass qua mọi request origin.
    return callback(null, true)
  },

  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,

  // CORS sẽ cho phép nhận cookies từ request
  credentials: true
}

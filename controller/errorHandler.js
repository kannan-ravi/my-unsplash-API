const errorHandler = (err, req, res, next) => {
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500; // ! Server Error
  res.status(status)

  res.json({ message: err.message, isError: true})
}

export default errorHandler
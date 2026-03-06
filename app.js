const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  console.log("Header API Key:", apiKey); // Debug log

  if (!apiKey) {
    return res.status(401).json({ message: "API key required" });
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: "Invalid API key" });
  }

  next();
};

module.exports = apiKeyMiddleware;

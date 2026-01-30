import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "No token Found!" });
    }
    const validToken =  jwt.verify(token, process.env.JWT_SECRET);
    if (!validToken) {
      return res.status(400).json({ message: "No valid token found!" });
    }
    // console.log(validToken);
    req.userId = validToken.userId;
    next();
  } catch (error) {
    return res.status(500).json({ message: "IS AUTH ERROR" });
  }
};

export default isAuth;

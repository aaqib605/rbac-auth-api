const roleAuth = (req, res, next) => {
  const userRole = req.user.role;

  if (userRole === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error(
      "You are not authorized to delete a goal. You must be an admin to do this."
    );
  }
};

module.exports = { roleAuth };

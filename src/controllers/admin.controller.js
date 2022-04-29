

exports.get_admin = async (req, res, next) => {
  try {
    const user = res.locals.user;

    res.render('admin/index', {
      user: user
    })
  } catch (error) {
    next(error)
  }
  
}
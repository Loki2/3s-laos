

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

exports.get_Organize = async (req, res, next) => {
  try {
    res.render('admin/organize')
  } catch (error) {
    next(error)
  }
}
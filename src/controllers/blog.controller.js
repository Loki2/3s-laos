

exports.get_blogs = async (req, res, next) => {
  try {
    const user = res.locals.user;

    res.render('admin/blog/index')
  } catch (error) {
    next(error)
  }
  
}
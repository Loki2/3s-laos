const Service = require("../models/Service");
const mkdirp = require("mkdirp");


exports.get_services = async (req, res, next) => {
  try {
    const user = res.locals.user;
    const services = await Service.find({}).sort({ createdAt: -1 });
    res.render('admin/service/index', {
      user: user,
      services: services
    })
  } catch (error) {
    next(error)
  }
  
}


exports.get_createServices = async (req, res, next) => {
  try {
    res.render('admin/service/create')
  } catch (error) {
    next(error);
  }
}

exports.post_createServices = async (req, res, next) => {
  try {
    const imageFile = typeof req.files.serviceImage !== 'undefined' ? req.files.serviceImage.name : "";
    const { name_lao, name_eng, desc, icon, status} = req.body;

    console.log(req.body)

    const service = new Service({
      name_lao: name_lao,
      name_eng: name_eng,
      desc: desc,
      image: imageFile,
      icon: icon,
      status: status
    });

    await service.save(function(error) {
      if(error) return console.log(error);

      mkdirp.sync('./public/uploads/images/services/' + service._id);

      if(imageFile != "") {
        const servImage = req.files.serviceImage;
        const path = './public/uploads/images/services/' + service._id + '/' + imageFile;

        servImage.mv(path, function(error){
          return console.log(error)
        })
      }
    });

    res.redirect('/admin/services');
  } catch (error) {
    next(error)
  }
}

exports.get_updateServices = async (req, res, next) => {
  try {
    const {id} = req.params;

    const service = await Service.findById({ _id: id });

    res.render('admin/service/edit', {
      id: service._id,
      name_lao: service.name_lao,
      name_eng: service.name_eng,
      desc: service.desc,
      icon: service.icon,
      status: service.status
    })
  } catch (error) {
    next(error);
  }
}

exports.post_updateServices = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Service.update({ _id: id}, req.body);

    res.redirect('/admin/services')
    
  } catch (error) {
    next(error);
  }
}

exports.get_deleteServices = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Service.findByIdAndRemove(id);

    res.redirect('/admin/services')
    
  } catch (error) {
    next(error);
  }
}
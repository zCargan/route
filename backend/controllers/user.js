const User = require("../models/user");



exports.createUser = (req, res, next) => {
    const user = new User({
      ...req.body
    });
    user.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.getOneUser = (req, res, next) => {
    User.findOne({
      _id: req.params.id
    }).then(
      (thing) => {
        res.status(200).json(thing);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
exports.modifyUser = (req, res, next) => {
    const user = new User({
      _id: req.params.id,
      nom : req.body.nom,
      prenom : req.body.prenom,
      pseudonyme : req.body.pseudonyme,
      age : req.body.age,
      email : req.body.email,
      password : req.body.password,
      objectifs : req.body.objectifs,
    });
    User.updateOne({_id: req.params.id}, user).then(
      () => {
        res.status(201).json({
          message: 'User updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
exports.getAllUser = (req, res, next) => {
    User.find().then(
      (users) => {
        res.status(200).json(users);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getOneMail = (req, res, next) => {
    User.findOne({ email : req.body.email})
    .then(response => {
      if(!response){
        return res.send("Ok")

      }
      else {
        return res.send('Not ok')
      };
    });
  };

  exports.getOneUsername = (req, res, next) => {
    User.findOne({ username: req.body.username })
    .then(response => {
      if(!response){
        return res.send("ok")
      }
      else {
        return res.send("not ok")
      }
    })
  }

  exports.login = (req, res ,next) => {
    User.findOne({ email: req.body.email})
    .then(response => {
        if(!response){
          console.log("Utilisateur non trouvé !")
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        if (req.body.mdp == response.password) {
          res.cookie('Id', response._id.toString(), {
              maxAge: 500000,
              // expires works the same as the maxAge
              secure: false, // mettre l'attribut à true une fois que le site est en HTTPS
              // httpOnly: true,
              sameSite: 'lax'
          });
          console.log('Cookie :' + req.signedCookie)
          return res.status(200).json(response);
      }
        else{
          console.log("Mot de passe incorrecte")
          return res.status(401).json({ error: 'Mot de passe incorrecte !' });
      }

    })
  }

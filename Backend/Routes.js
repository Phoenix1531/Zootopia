const express = require("express");
const bcrypt = require("bcryptjs");
const zoo = require("./schema.js");
// const zoovalidate = require("./zoovalidate.js");
const Users = require("./UserSchema.js");
const uservalidate = require("./UserValidate.js");
const jwt = require("jsonwebtoken");

const router = express.Router();

// const validatezoo = (req, res, next) => {
//   let { error } = zoovalidate.validate(req.body);
//   if (error) {
//     res.status(404).send(error.details[0].message);
//   } else {
//     next();
//   }
// };
// const validateUser = (req, res, next) => {
//   let { error } = uservalidate.validate(req.body);
//   if (error) {
//     res.status(404).send(error.details[0].message);
//   } else {
//     next();
//   }
// };

router.get("/", async (req, res) => {
  try {
    const data = await zoo.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const zoos = await zoo.findById(req.params.id);
    res.json({ data: zoos });
  } catch (err) {
    res.status(404).json({ error: "zoo not found" });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const zoos = new zoo({
    type:req.body.type,
    biome:req.body.biome,
    name:req.body.name,
    description:req.body.description,
    scientific_name:req.body.scientific_name,
    term_for_young:req.body.term_for_young,
    lifespan:req.body.lifespan,
    mass:req.body.mass,
    speed:req.body.speed,
    gestation_period:req.body.gestation_period,
    higher_classification:req.body.higher_classification,
    collective_noun:req.body.collective_noun,
    fun_fact:req.body.fun_fact
  });

  try {
    const savedzoo = await zoos.save();
    res.json(savedzoo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/register",  async (req, res) => {
  try {
    const olduser = await Users.findOne({ email: req.body.email });
    if (olduser) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const encryptedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword,
      });
      const saveduser = await user.save();
      res.json(saveduser);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.json({ status: "error", message: "User not Found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const payload = { userId: user._id, email };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res
        .status(201)
        .json({ message: "Login successful", username: user.name, token });
    } else {
      res.json({ status: "error", message: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
});
router.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const userEmail = user.email;
    Users.findOne({ email: userEmail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ error: "error", data: error });
      });
  } catch {
    (err) => console.log(err);
  }
});
router.post("/users", async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// router.patch("/:id", async (req, res) => {
//   try {
//     const zooItem = await zoo.findById(req.params.id);
//     if (!zooItem) {
//       return res.status(404).json({ error: "zoo not found" });
//     }
//     zooItem.likes += 1;
//     const updatedzoo = await zooItem.save();
//     res.json(updatedzoo);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

router.delete("/:id", async (req, res) => {
  try {
    const deletedzoo = await zoo.findByIdAndDelete(req.params.id);
    if (!deletedzoo) {
      return res.status(404).json({ error: "zoo not found" });
    }
    res.json({ message: "zoo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

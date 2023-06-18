/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */

// const User = require('../Model/User');

// module.exports = {
//   getprofile : (req,res)=>{
//     try{
//         User.findOne({_id:req.id}).then((result)=>{
//            if(result){
//             const data = {
//                 // eslint-disable-next-line no-underscore-dangle
//                 _id:result._id,
//                 full_name: result.full_name,
//                 dob: result.dob,
//                 phone_number: result.phone_number,
//                 email: result.email,
//                 security_question:result.security_question,
//                 address: result.address,
//                 city: result.city,
//                 state: result.state,
//                 zip_code: result.zip_code,
//                 country: result.country,
//             }
//             res.json(data);
//            }
//         });
//     }catch{
//         // eslint-disable-next-line no-console
//         console.log('error')
//     }

// },
// }
const moment = require('moment');
const User = require('../Model/User');

const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.id });
    if (user) {
      const formattedDOB = moment(user.dob).format('MMMM Do, YYYY');
      const data = {
        _id: user._id,
        full_name: user.full_name,
        dob: formattedDOB,
        phone_number: user.phone_number,
        email: user.email,
        security_question: user.security_question,
        address: user.address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
        country: user.country,
      };
      res.json(data);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error while retrieving user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getProfile
};






const Company = require("../models/Company");

exports.postReview = async (req, res) => {
    try {
        company_name = req.body.company_name,
            pros = req.body.pros,
            cons = req.body.cons,
            rating = req.body.rating;

        Company.create({
            company_name,
            pros,
            cons,
            rating
        })
        res.json({
            message: "Company review added successfully"
        })
    } catch (err) {
        console.log(err);
    }
}

exports.getReview = async (req, res) => {
    try {
        let name = req.query.name;
        console.log(name);
        let result = await Company.findAll({
            where: {
                company_name: name
            }
        })
        console.log(result)
        res.json({
            result
        })

    } catch (error) {
        console.log(error);
    }
}

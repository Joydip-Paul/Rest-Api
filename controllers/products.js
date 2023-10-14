const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "Joydip Paul" })
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({
        id: "01",
        msg: "Joydip Paul Jishu"
    })
};

module.exports = {
    getAllProducts,
    getAllProductsTesting
};
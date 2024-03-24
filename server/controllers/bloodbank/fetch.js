import BloodBank from "../../models/bloodbank.js";

const Fetchbloodbank = async (req, res) => {
    try {
        const bloodbank = await BloodBank.find({});
        res.json({ bloodbank });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default Fetchbloodbank;

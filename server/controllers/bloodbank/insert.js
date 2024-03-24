import BloodBank from "../../models/bloodbank.js"


const Insertblookbank = async(req, res) => {
    try {
        const name = req.body.name
        const number = req.body.number
        const address = req.body.address
        const img = req.body.img

        console.log(req.body)

        const bloodbank = new BloodBank({
            name: name,
            number: number,
            address: address,
            img: img
        });

        bloodbank.save()
        
        res.send({ success: true, message: "New details added successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default Insertblookbank
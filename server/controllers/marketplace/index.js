import Marketplace from "../../models/marketplace.js"


const Insertmarketplace = async(req, res) => {
    try {
        const name = req.body.name
        const number = req.body.number
        const address = req.body.address
        const role = req.body.role
        const img = req.body.img

        console.log(req.body)
    

        const marketplace = new Marketplace({
            name: name,
            number: number,
            address: address,
            role: role,
            img: img
        });

        marketplace.save()
        
        res.send({ success: true, message: "New doctor added successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default Insertmarketplace
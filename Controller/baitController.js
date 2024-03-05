import prisma from "../db/db.config.js";

export const createBait = async(req, res) =>{
    const {title, size, color, quantity, user_id} = req.body

    const newBait = await prisma.bait.create({
        data:{
            title: title,
            size: size,
            color: color,
            quantity:quantity,
            user_id: user_id
        }
    })
    return res.json({status:200, data: newBait, message:"Bait created"})
}

export const showBait = async (req, res) => {
    const bait_id = req.params.id;

    const bait = await prisma.bait.findFirst({
        where:{
            id: Number(bait_id)
        }
    })

    return res.json({status: 200, data: bait});
}

export const fetchBait = async (req, res) => {
    const baits = await prisma.bait.findMany({})

    return res.json({status: 200, data: baits})
}
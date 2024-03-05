import prisma from "../db/db.config.js"

export const createTrophy = async(req, res) => {
    const {name, weight, lenght, bait_id} = req.body

    const newTrophy = await prisma.trophy.create({
        data:{
            bait_id: bait_id,
            name: name,
            weight: weight,
            lenght: lenght
        }
    })
    return res.json({status: 200, data: newTrophy, message:"Trophy created"})
}

export const trophyList = async (req, res) => {
    const trophyes = await prisma.trophy.findMany({});

    return res.json({status:200, data:trophyes}) 
}

export const showTrohy = async (req, res) => {
    const trophyId = req.params.id;

    const trophy = await prisma.trophy.findFirst({
        where:{
            id: Number(trophyId)
        }
    })
    return res.json({status: 200, data: trophy})
}
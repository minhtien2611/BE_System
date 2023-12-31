const WishList = require("../model/wishList.model");
const wishListHelper = require("../helper/wishList.helper");

const createWishlist = async (req, res) => {
    const newData = {
        user: req.user,
        wishListItem: {
            product: req.body.product,
            color: req.body.color,
            version: req.body.version,
            isLiked: req.body.isLiked
        }
    }
    console.log("pass data", newData)
    try {
        await wishListHelper
            .createWishlist(newData)
            .then((result) => {
                return res.status(200).json({ result: true, data: result });
            })
            .catch((error) => {
                return res.status(500).json({ result: false, message: error });
            });
    } catch (error) {
        return res.status(500).json({ result: false, message: error });
    }
};


const viewWishList = async (req, res) => {
    const user = req.user;
    console.log("sss", user)
    try {
        await wishListHelper
            .viewWishList(user)
            .then((result) => {
                return res.status(200).json({ result: true, data: result });
            })
            .catch((error) => {
                return res.status(500).json({ result: false, message: error });
            });
    } catch (error) {
        return res.status(500).json({ result: false, message: error });
    }
};

const deleteProduct = async (req, res) => {
    const data = {
        user: req.user,
        product: req.body.product,
        color: req.body.color,
        version: req.body.version,
    }
    console.log(data)
    try {
        await wishListHelper
            .deleteProduct(data)
            .then((result) => {
                return res.status(200).json({ result: true, data: result });
            })
            .catch((error) => {
                return res.status(500).json({ result: false, message: error });
            });
    } catch (error) {
        return res.status(500).json({ result: false, message: error });
    }
};


module.exports = {
    createWishlist: createWishlist,
    viewWishList: viewWishList,
    deleteProduct: deleteProduct
};
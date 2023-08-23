import express from 'express';
import { registerController, loginController, testController, forgotPasswordController, updateProfileController, orderStatusController, getAllOrdersController, getOrdersController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();

//routing
//register\\Method post

router.post("/register", registerController);

//login ||POST

router.post("/login", loginController);

//Forgot Password
router.post("/forgot-password", forgotPasswordController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user rout auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected Admin rout auth
router.get('/admin-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

// update profile
router.put('/profile', requireSignIn, updateProfileController)

//orders
router.get('/orders', requireSignIn, getOrdersController)

//All orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

// orders updatestatus 
router.get('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)

export default router;
import { Router } from "express";
import { CouponController } from "./controllers/CouponController";
import { StoreContoller } from "./controllers/StoreController";

const routes = Router();

//Rotas das Lojas
routes.post('/store', new StoreContoller().create);
routes.delete('/store/:idStore', new StoreContoller().delete);
routes.get('/store', new StoreContoller().list);

//Rotas dos cupons
routes.post('/coupon/:idStore/create', new CouponController().create);
routes.delete('/coupon/:idCoupon', new CouponController().delete);
routes.get('/coupon', new CouponController().list);

export default routes;

import { ReviewController } from "@/controllers/review.controller";
import { EoMiddleware } from "@/middleware/eo.middleware";
import { Router } from "express";

export class ReviewRouter {
    private router: Router;
    private reviewController: ReviewController;
    private reviewMiddleware: EoMiddleware;

    constructor() {
        this.reviewController = new ReviewController();
        this.reviewMiddleware = new EoMiddleware();
        this.router = Router()
        this.initializeRouter()
    }

    private initializeRouter(): void {
        this.router.post('/:id' ,this.reviewMiddleware.verifyToken ,this.reviewController.createReview)
        this.router.get('/get', this.reviewController.getReview)
    }

    getRouter(): Router {
        return this.router;
    }
}
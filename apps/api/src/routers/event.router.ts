import { EventController } from "@/controllers/event.controller";
import { Router } from "express";

export class EventRouter {
    private router: Router;
    private eventController: EventController;

    constructor() {
        this.eventController = new EventController();
        this.router = Router()
        this.initializeRouter()
    }

    private initializeRouter(): void {
        this.router.get('/', this.eventController.getEvent)
    }

    getRouter(): Router {
        return this.router;
    }
}
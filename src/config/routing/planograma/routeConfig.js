import PlanogramList from "../pages/PlanogramList";
import PlanogramDetail from "../pages/PlanogramDetail";
import CreatePlanogram from "../pages/CreatePlanogram";

const routes = [
  {
    path: "/lg/dashboard/planogram",
    component: PlanogramList,
  },
  {
    path: "/lg/dashboard/planogram/:id",
    component: PlanogramDetail,
  },
  {
    path: "/lg/dashboard/planogram/create",
    component: CreatePlanogram,
  },
];

export default routes;

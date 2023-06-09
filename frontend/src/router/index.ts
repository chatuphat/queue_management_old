import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Login from "../views/Login.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Card from "../views/CardView.vue";
import Blank from "../views/BlankView.vue";
import Doctorslot from "../views/DoctorslotView.vue";
import Dashborddoctor from "../views/DashborddoctorView.vue";
import Doctormanagement from "../views/DoctormanagementView.vue";
import Appointment from "../views/AppointmentView.vue";
import Appointmentadd from "../views/AppointmentaddView.vue"
import Version from "../views/VersionView.vue";
import NotFound from "../views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  {
    path: "/doctorslot",
    name: "Doctorslot",
    component: Doctorslot,
  },
  {
    path: "/dashborddoctor",
    name: "Dashborddoctor",
    component: Dashborddoctor,
  },

  {
    path: "/doctormanagement",
    name: "Doctormanagement",
    component: Doctormanagement,
  },
  {
    path: "/version",
    name: "Version",
    component: Version,
  },
  {
    path: "/appointment",
    name: "Appointment",
    component : Appointment
  },
  {
    path: "/appointmentadd",
    name: "Appointmentadd",
    component: Appointmentadd
  },

  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

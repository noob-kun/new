import { createRouter, createWebHistory } from "vue-router";
import Fileupload from '../components/Fileupload.vue'
import Sidebar from '../components/dropdown.vue'
import Login from '../components/Login.vue'
import Download from '../components/Download.vue'
import  CKEditor  from  "../components/CKEditor.vue";
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            component: Sidebar
        },
        {
            path:'/Login',
            component:Login
        },
        {
            path:'/CKEditor',
            component:CKEditor
        },
        {
            path:'/Fileupload',
            component:Fileupload
        },
        {
            path: '/Download',
            component:Download
        },
       
    ]
})
export default router;
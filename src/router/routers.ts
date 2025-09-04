import {createRouter, createWebHashHistory} from "vue-router"
import Home from "@/views/Home.vue"
import author from "@/views/author.vue"
import creatorBenefits from "@/views/creatorBenefits.vue"
import interactiveCommunity from "@/views/interactiveCommunity.vue"
import Copyright from "@/views/Copyright.vue"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/author",
            component:author
        },
        {
            path:"/creatorBenefits",
            component:creatorBenefits
        },
        {
            path:"/interactiveCommunity",
            component:interactiveCommunity

        },
        {
            path:"/Copyright",
            component:Copyright
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router
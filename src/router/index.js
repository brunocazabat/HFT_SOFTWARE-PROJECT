// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'
import {
    layout,
    route,
} from '@/util/routes'
import store from '../store/index.js'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash }
        if (savedPosition) return savedPosition

        return { x: 0, y: 0 }
    },
    routes: [
        route('LoginView', null, '', false),
        route('SignUpView', 'SignUp', '/signup', false),
        route('Error', null, '*', false),
        route('ForgotPasswordView', 'ForgotPassword', '/forgotpassword', false),
        layout('Default', [
            route('MachineDetail', null, '/machineDetail/:machineId'),
            route('Dashboard', null, 'dashboard'),
            route('MachineList', null, 'machinelist'),
            route('Settings', null, 'settings'),
            route('AdminSettings', null, 'adminsettings'),
            route('ChangeEmail', null, 'changeemail'),
            route('ChangePassword', null, 'changepassword'),
            route('BugReport', null, 'bugreport'),
            route('ErrorConnectionLost', null, '*/connectionlost'),
            route('ErrorNoDataFound', null, '*/nodatafound'),
        ]),
    ],
})

router.beforeEach((to, from, next) => {
    console.log('Current Token: ' + store.get('app/authenticationToken'))
    if (!store.get('app/authenticationToken') && to.meta.requiresLogin) return next({ name: 'LoginView' })
    else return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router

import About from './pages/About';
import NotFoundPage from './pages/NotFound';

import MySchedule from './pages/schedule/MySchedule';
import GroupSchedule from './pages/schedule/GroupSchedule'
import ViewEvent from './pages/schedule/ViewEvent'
import CreateEvent from './pages/schedule/CreateEventMobile'
import SignUp from './pages/Authentication/signup.vue';
import CreateGroup from './pages/Group/creategroup.vue';
import Enroll from './pages/Schedule/Enroll';
import Home from './pages/Home.vue';

import Panel from './pages/Component/Panel';
import Profile from './pages/User/Profile';
import MyGroup from './pages/Group/MyGroup';
import Group from './pages/Group/Group';
import Login from './pages/Authentication/Login';

import {auth} from './firebase';
import f7Vue from './main';

const AuthGuard = (e, page) => {
  if (auth.currentUser) {
      // f7Vue.$f7.views.main.router.navigate({url: '/my-schedule/'})
  }
  else {
      f7Vue.$f7.views.main.router.navigate({url: '/startup'})
  }
}

export default [
  {
    path: '/',
    component : Home,
  },
  {
    path: '/enroll-group/',
    component : Enroll,
  },
  {
    path: '/create-group/',
    component : CreateGroup,
  },
  {
    path: '/signup/',
    component : SignUp
  },
  {
    path: '/about/',
    component: About,
  },
  {
    path :'/my-schedule/',
    component: MySchedule,
    // on: {
    //   pageBeforeIn: AuthGuard
    // }
  },
  {
    path :'/group/:groupId/schedule/event/:eventId/',
    component: ViewEvent,
  },
  {
    path: '/panel/',
    component: Panel,
  },
  {
    path: '/profile/',
    component: Profile,
  },
  {
    path: '/my-group/',
    component: MyGroup
  },
  {
    path: '/group/:groupId/',
    component: Group
  },
  {
    path: '/group/:groupId/schedule/',
    component: GroupSchedule
  },
  {
    path: '/login/',
    component: Login
  },
  {
    path: '/group/:groupId/schedule/create-event/',
    component: CreateEvent
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

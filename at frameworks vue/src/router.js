import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import DetailPost from './components/DetailPost';
import EditPost from './components/EditPost';
import notfound from './components/notfound';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'posts',
            component: Posts
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        },
        {
          path: '/add',
          name: 'addPost',
          component: AddPost
        },{
            path: '/posts/:id',
            name: 'detailPost',
            component: DetailPost,
            children: [
                {
                    path: 'edit',
                    name: 'edit-post',
                    component: EditPost
                }
            ]
        }
    ]
});
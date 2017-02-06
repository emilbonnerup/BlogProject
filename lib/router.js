Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', function () {
    this.render('postsList');
});

Router.route('/home', {name: 'postsList'});

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'submitPost'});

Router.route('/archive', {name: 'archive'});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
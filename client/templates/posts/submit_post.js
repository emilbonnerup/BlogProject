Template.submitPost.events({

    'submit form': function (e) {
        e.preventDefault();
            var title = $(e.target).find('[name=postTitle]').val();
            var content = $(e.target).find('[name=postContent]').val();
            var imgName =  $(e.target).find('[name=imgName]').val();
            

        router.go('postPage',Meteor.call('insertPost', title, content, imgName));
    }
});
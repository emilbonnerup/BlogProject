Meteor.methods({
    insertPost: function( title, content, imgName ){
        check( title, String ),
        check(content, String),
        check(imgName, String);

        var post = {
            title: title,
            owner: Meteor.userId(),
            // Note: here we have a blank space to account for our editor's loading state.
            markdown: content,
            imgPath: "/"+imgName,
        };

        try {
            var postId = Posts.insert(post);
            return postId;
        } catch( exception ) {
            return exception;
        }
    }
});
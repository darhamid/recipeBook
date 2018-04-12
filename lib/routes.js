if (Meteor.isClient) {
    Accounts.onLogin(function(){
        FlowRouter.go("recipe-book");
    });
    
    Accounts.onLogout(function(){
        FlowRouter.go("home");
    });
}

FlowRouter.triggers.enter([function( context, redirect) {
    if(!Meteor.userId()) {
        FlowRouter.go("home");
    }
}]);

FlowRouter.route('/', {
    name : 'home',
    action() { 
        if( Meteor.userId() ) {
            FlowRouter.go('recipe-book')
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name : 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main : "Recipes"});
    }
});
FlowRouter.route('/recipe/:id', {
    name : 'recipe-detail',
    action() { 
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main : "RecipeDetail"});
    }
});

FlowRouter.route('/menu', {
    name : 'menu',
    action() { 
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main : "Menu"});
    }
});

FlowRouter.route('/shopping-list', {
    name : 'shopping-list',
    action() { 
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main : "ShoppingList"});
    }
});
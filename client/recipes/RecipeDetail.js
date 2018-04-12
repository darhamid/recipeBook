Template.RecipeDetail.onCreated(function() {
    var self = this;
    self.autorun(function(){
        const recipeId = FlowRouter.getParam("id");
        self.subscribe('recipeDetail', recipeId );
    });
});

Template.RecipeDetail.helpers({ 
    recipe : () => {
        const recipeId = FlowRouter.getParam("id");
        return Recipes.findOne({_id : recipeId});
    }
});

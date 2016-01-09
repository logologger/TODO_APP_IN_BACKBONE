var Todo=Backbone.Model.extend({
  defaults:{
    
    task:" ",
    completed:false,
    date:new Date(),
    title:""
    
    
  },
  
 toggle:function()
 {
   this.save({
        completed:!this.get('completed')
     });
 }

});
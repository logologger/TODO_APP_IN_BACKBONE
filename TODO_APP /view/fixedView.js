var fixedView=Backbone.View.extend({
  
  template:_.template($('#todoApp').html()),
  render:function()
  {
    
    this.$el.html(this.template());
    return this;
    
    
  },

 events:{
   'keypress #task_box':'createTodoOnEnter'
   
   
 },
 createTodoOnEnter:function(e)
 {
   
   //console.log("key is pressed");
   if(e.which==13)
   {
     console.log("Pressed Enter Key ");
     /*todolist.add(*/this.newAttributes();/*);*/
     console.log($('#task_box').val());//this.$('#input_task').val('');
    new_task=this.$('#task_box').val();  
    $('#task_box').val('');
    $('#title_box').val('');
    approuter.navigate("all",{trigger:true});
    approuter.navigate("pending",{trigger:true});
    approuter.navigate("completed",{trigger:true});
    approuter.navigate("all",{trigger:true});
 //  console.log(todolist);
   //for(var i=0;i<todolist.length;i++)
   //{
    // console.log(todolist.models[i].attributes.task);
     
  // }
     
   }
   
   
   
 },
 newAttributes:function()
 {
   
   todolist_to_be_saved_to_storage=new Todo(
      {
     
     task:this.$('#task_box').val(),
     completed:false,
     title:this.$('#title_box').val(),
     date:new Date()
     
     
   });
   todolist.add(todolist_to_be_saved_to_storage);
    todolist_to_be_saved_to_storage.save();
    
   /*return {
     
     task:this.$('#task_box').val(),
     completed:false
     
     
   };*/
   
   
 }
  
  
});
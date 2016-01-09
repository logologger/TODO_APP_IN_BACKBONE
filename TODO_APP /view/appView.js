var AppView=Backbone.View.extend({
  
  el:'#all_tasks',
  
  initialize:function()
  {
    
    // console.log(this.$('#task_box').val());
   // this.input=this.$('#task_box').val();
   todolist.on('add',this.addAll,this);
   todolist.on('reset',this.addAll,this);
   todolist.fetch();
   
  //  $('#task_box').val('');
    
  },
  
  addAll:function()
  {

  // console.log(new_task);
    //console.log("model data changed");
    // var todoItem=new Todo({
      
    //   task:new_task
      
    // });
   
 this.addItem(todolist_to_be_saved_to_storage);
    
    
  },
  render:function()
  {
    
    console.log("in render of appView");
    this.collection.each(this.addItem,this);
    // approuter.navigate("all",{trigger:true});
    return this;
  },
 addItem:function(todoItem)
 {
   
   var todoView=new TodoView({
     
     model:todoItem
     
   });
  
   console.log("in addItem came");
   this.$el.append(todoView.render().el);
  
   
 }
  
  
  
  
  
});
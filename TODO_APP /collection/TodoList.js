var TodoList=Backbone.Collection.extend({
  model:Todo,
  localStorage:new Store('Session'),
  remaining:function()
  {
        
    var todolist_pending=new TodoList();//this is thw wrong approach as soon you instaniate a todolist 
    //you will call the initialize function of AppView this.todolist.on('add') one
    //console.log(todolist[0]);
    // _.each(todolist,function(todoo)
    // {
      //console.log(this.todoo);
      for(var i=0;i<todolist.length;i++)
      {
      if(todolist.models[i].attributes.completed===false)
              {
                todolist_pending.add(todolist.models[i].attributes);
             }
      }
    //});
    return todolist_pending;
  },
  completed:function()
  {
    var todolist_completed=new TodoList();
    for(var i=0;i<todolist.length;i++)
    {
      
        if(todolist.models[i].attributes.completed===true)
              {
                todolist_completed.add(todolist.models[i].attributes);
             }
      
      
    }
    
    return todolist_completed;
    
    
    
    
    
  }
 
});
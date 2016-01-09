var appRouter=Backbone.Router.extend({
  
  routes:{
    'pending':'pending_task_show',
    'completed':'completed_task_show',
    'all':'all_task_show',
    '*path':'defaultRoute'

  },
  pending_task_show:function()
  {
    console.log("pending task router");
    
              $('#all_tasks').html('');
              // if(appView)
              // {
              //   console.log("appView");
              // appView.remove();
              // }
              // if(completeView)
              // {
              //   completeView.remove();
              // console.log("complte view");
                
              // }
              
              pendingView=new AppView({
            
            collection:todolist.remaining()
            
          });
          
          pendingView.render();
   
    
  },
  completed_task_show:function()
  {
     //   appView.remove();
    console.log("completed show router");
    
                  $('#all_tasks').html('');
                  
                   completeView=new AppView({
                
                collection:todolist.completed()
                
              });
              
              completeView.render();
    
    
  },
  all_task_show:function()
  {
   // appView.remove();
    console.log("all task show router");
                 $('#all_tasks').html('');
                 appView=new AppView({
              
              collection:todolist
              
            });
            
            appView.render();
 },
  defaultRoute:function()
    {
      
       console.log("default router");
             //     $('#all_tasks').html('');
            //     var appView=new AppView({
              
            //   collection:todolist
              
            // });
            
            // appView.render();
      
    }
  
});
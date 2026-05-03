const todoForm= document.getElementById('todoForm'); 
const todoContainer= document.getElementById('todoContainer'); 
const todoItemControl= document.getElementById('todoItem');
const addTodoBtn = document.getElementById('addTodoBtn');
const updateTodoBtn= document.getElementById('updateTodoBtn');
const changeTheme=document.getElementById('changeTheme');
const bodyTheme= document.getElementById('bodyTheme');
const cl =console.log;

let todoArr = [ 
         
       { 
        todoItem:'JS and CSS', 
        todoId:'qwer12-sd32-asd21'
       },

       { 
        todoItem:'HTML and CSS', 
        todoId:'q12-sd32-asd21'
       } ,
       { 
        todoItem:'SASS and CSS', 
        todoId:'qwer2-sd32-asd21'
       }
 
    ]





    function createArr(arr){ 
        let result ='';    
        
        arr.forEach(ele=>{ 
            result +=`<li id='${ele.todoId}' class="list-group-item d-flex justify-content-between mt-3">
                      <Strong>${ele.todoItem}</Strong>
                        <div>
                          <i onclick="onEdit(this) "class="fa-solid fa-pen-to-square  text-primary"></i>   
                          <i onclick="onRemove(this)"  class="fa-solid fa-trash  text-danger"></i>
                        </div> 
                     </li>`
        })

        todoContainer.innerHTML=result;
    }

    createArr(todoArr); 



function onTodoSubmit(eve){ 
    // first line of code must be preventDefault()
   eve.preventDefault();    
    cl(eve);
 let todo_obj ={ 
         todoItem:todoItemControl.value,
         todoId:Date.now().toString() 
    }
 
    todoArr.push(todo_obj); 
    // createArr(todoArr); //this will recreate array again 
    let li = document.createElement('li '); 
    li.className =`li 
                      id='${todo_obj.todoId}'
                    class="list-group-item d-flex justify-content-between mt-3`; 
    li.innerHTML =`<Strong>${todo_obj.todoItem}</Strong>
                      <div>
                        <i  onclick="onEdit(this)" class="fa-solid fa-pen-to-square fa-2x text-primary"></i>   
                        <i onclick="onRemove(this )" class="fa-solid fa-trash fa-2x text-danger"></i>
                      </div> 
                    `
     let ul = document.querySelector('ul'); 
     ul.append(li);

      todoForm.reset(); 

}

function onRemove(ele){ 
        cl(ele); //ele will <i></i> because of this keeyword in this case it will not give event 
  let remove_id = ele.closest('li').id; 
   let getIndex =todoArr.findIndex(ele=>ele.todoId===remove_id); 
  
    let removedId =  todoArr.splice(getIndex,1); 
       cl(removedId);
    ele.closest('li').remove(); 
    
    Swal.fire({
            icon: "success",
            title: `${removedId[0].todoItem} deleted successfully....`,
            showConfirmButton:true ,
            timer: 3500
           });
   
}
let Edit_id

function onEdit(ele){
      cl(ele); 
       Edit_id =ele.closest('li').id 
       let Edit_obj =todoArr.find(ele=>ele.todoId===Edit_id) //it will return first element 
       todoItemControl.value = Edit_obj.todoItem; 
       addTodoBtn.classList.add('d-none'); // it returns DOMTokenList
       updateTodoBtn.classList.remove('d-none');



}

function onChange(ele){  
     cl(ele);
        bodyTheme.classList.toggle('active');
}


changeTheme.addEventListener('click',onChange)
todoForm.addEventListener('submit',onTodoSubmit)


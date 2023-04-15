const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

var arrfield=[];
// -------------------------------------------
//---------------------------------------------
const addInput = $('.add-input').addEventListener('click', function(){
    // console.log('đây là chức năng thên input');
    renderInputFields()
    
})
const addTextarea = $('.add-textarea').addEventListener('click', function(){
    // console.log('đây là chức năng thêm textarea');
    renderTextareaField()

});
const addButton = $('.add-button').addEventListener('click', function(){
    // console.log('đây là chức năng thêm button');
    renderButtonField()

})
// const btnControll = $$('.btn');
// btnControll.forEach(element => {
//     element.addEventListener('click',function(e){ 
//         // console.log(e)
//     })
// });
// -------render field---------------------




// console.log(fields.input.name);
function renderInputFields(e){
    let field = document.createElement("div");
    field.className = "field_form inputf"
    field.innerHTML = ` 
    <div class="heading_field">
        <h2 class="title-field">input field</h2>
        <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div class="body_form">
        <div class="row">
            <label>Type</label>
           
            <select name="type" class="input-type" value="">
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="button">button</option>
                <option value="checkbox">checkbox</option>
                <option value="email">email</option>
                <option value="date">date</option>
                <option value="password">password</option>
            </select>
        </div>
        <div class="row">
            <label>Label</label>                  
            <input type="text" class="input-label">
        </div>
        <div class="row">
            <label>Name</label>
             <input type="text" class="input-name">
        </div>
        <div class="row">
            <label>ID</label>
             <input type="text" class="input-id">
        </div>
        <div class="row">
            <label>Placeholder</label>
             <input type="text" class="input-placeholder">
        </div>
        <div class="row">
            <label>Require</label>
             <input type="checkbox" class="input-require">
        </div>
    </div>`
    $('.container-field').appendChild(field)
    removeField()
}
function renderTextareaField(e){
    let field = document.createElement('div');
    field.className = "field_form textareaf"
    field.innerHTML =`
    <div class="heading_field">
            <h2 class="title-field">textarea field</h2>
            <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <div class="body_form">
    <div class="row">
        <label>id</label>                  
        <input type="text" class="textarea-id">
    </div>
    <div class="row">
        <label>Name</label>
         <input type="text" class="textarea-name">
    </div>
    <div class="row">
        <label>Rows</label>
         <input type="number" class="textarea-rows">
    </div>
    <div class="row">
        <label>Cols</label>
         <input type="number" class="textarea-cols">
    </div>`
    $('.container-field').appendChild(field)
    removeField()

}
function renderButtonField(e){
    let field = document.createElement('div');
    field.className = "field_form buttonf"
    field.innerHTML=`
    <div class="heading_field">
        <h2 class="title-field">Button field</h2>
        <i class="fa-solid fa-circle-xmark"></i>
        </div>
    <div class="body_form">
    <div class="row">
        <label>Name</label>
        <input type="text" class="button-name">
    </div>
    <div class="row">
        <label>value</label>
        <input type="text" class="button-value">
    </div>
    <div class="row">
        <label>Type</label>
    <select name="type" class="select-button-type" value="">
        <option value="submit">Submit</option>
        <option value="reset">Reset</option>
        <option value="button">Button</option>
    </select>
    </div>
    <div class="row">
        <label>disable</label>
         <input type="checkbox" class="button-disable">
    </div>
    </div>`
    $('.container-field').appendChild(field)
    removeField()

} 


// ------------------------------------------------------------
function removeField(){
    var btnRemove = $$('.heading_field i')
        btnRemove.forEach(element => {
           element.addEventListener('click',function(e){
            this.parentElement.parentElement.remove()
           }) 
        });
    

}
// removeField()


// ----------------------------------------------------------------------
function getdata(){

    $('.save-data').addEventListener('click', function(){
        var arr=[];
            // nhapf()
        let data = $$('.field_form');
        data.forEach(element =>{
            // console.log(element)
            arr.push(element.className);
        })
        console.log(arr);
        
    })
}
getdata();
// function inputF(){
//     var fieldInput ={};
//     var inputType = $('.input-type').value;
//     var inputLabel = $('.input-label').value;
//     var inputName = $('.input-name').value;
//     var inputId = $('.input-id').value;
//     var inputPlaceholder = $('.input-placeholder').value;
//     var inputRequire = $('.input-require').value;


//     fieldInput.type = inputType;
//     fieldInput.label = inputLabel;
//     fieldInput.name = inputName;
//     fieldInput.id = inputId;
//     fieldInput.placeholder = inputPlaceholder;
//     fieldInput.require = inputRequire;

// }
// function textareaF(){

//     textareafield.id ='textarea-id',
//     textareafield.name= '  textarea-name',
//     textareafield.rows= '  textarea-rows',
//     textareafield.cols= 'textarea-cols',
// }
// function buttonF(){
     
// }
 
// var   inputfield= {}
// var   textareafield = {}
// var   buttonfield ={
//     buttonfield.name = 'button-name',
//     buttonfield.value = 'button-value',
//     buttonfield.type ='button-disable',
//     buttonfield.disable = false,
// }
window.onload = function () {
    var form = document.getElementById("form");
    var input = document.getElementById("input");
    var btn = document.getElementById("add-btn");
    var list = document.getElementById("list");
    var left_ele = document.getElementById("left-ele");
    var id = 1;



    btn.addEventListener("click", addTodoItem);


    function addTodoItem() {
        if (input.value === "") {
            alert("Please Enter Some Text");
        }
        else {
            var text = input.value;

            var item = `<li id="li-${id}"> 
                                <input id="box-${id}" class="checkboxes" type="checkbox">
                                ${text}
                                <button id="remove_btn" type="button" class="btn"> - </button>
                             </li>`;
            list.insertAdjacentHTML('beforeend', item);

            left_ele.innerHTML = id + " tasks left";
            id++;
            form.reset();
        }

    }
}
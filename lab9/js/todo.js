$(function(){
    getTasks();

    $('#btnAdd').click(function(){
        var tasks=getLocalTasks();

        tasks.push($('#txtTask').val());
        saveTasks(tasks);
    });

    $('#btnDelete').click(function(){
        var tasks=getLocalTasks();

        tasks.shift();
        saveTasks(tasks);
    });

});

function getTasks() {
    $.ajax({
        url: 'api/tasks',
        dataType: 'json',
        type: 'get',
        success: function(resp) {
            populateTasks(resp.tasks);
        }
    });
}

function saveTasks(tasks) {
    $.ajax({
        url: 'api/tasks',
        data: {tasks: tasks},
        dataType: 'json',
        type: 'post',
        success: function(resp) {
            populateTasks(tasks);
        }
    });
}

function populateTasks(tasks) {
    $('#lstTasks').empty();

    for (var i=0; i<tasks.length;i++) {
        var liEl=$('<li>', {
            text: tasks[i]
        })
        $('#lstTasks').append(liEl);
    }
}

function getLocalTasks() {
    var tasks=[];
    $('#lstTasks>li').each(
        function(idx, el){
            tasks.push(el.innerText)
    });
    return tasks;
}

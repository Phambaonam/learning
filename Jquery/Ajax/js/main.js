// main.js

$(function() {
    $.ajax({
        url: 'https://cdn.xgqfrms.xyz/json/honor.json',
        dataType: 'json',
        success: function(data) {
            populateWithCourses(data.courses.completed);
            hide();
        }
    });
    function populateWithCourses(courses) {
        var $badges = $('#badges');
        courses.forEach(function(course) {
            $div = $('<div />', {
                'class': 'course'
            }).appendTo($badges);
            $('<h3 />', {
                text: course.title
            }).appendTo($div);
            $('<img />', {
                src: course.badge
            }).appendTo($div);
            $('<a />', {
                'class': 'btn btn-primary',
                target: '_blank',
                href: course.url,
                text: 'See Course'
            }).appendTo($div);
        });
    }
    function hide(){
        // var hl = document.getElementById('hl');
        // hl.style.display = "none";
        var hideLoad = document.getElementById('hideLoad');
        var state = "showTure";
        if (state === "showTure") {
            hideLoad.classList.remove('showTure');
            hideLoad.classList.add("hidenTure");
            console.log(`state = "showTure"`);
            hideLoad.style.display = "none";
            // ??? .classList bugs ??? 
        } else {
            //state = "showTure";
            console.log(`state = "hidenTure"`);
        }
    }
});

/*
# DOM & ES6 

querySelector() & querySelectorAll() 

```js

const ES6 = () => {
    const abc = { language: "english"};
    let xyz = `xyz === ${abc}`;
    console.log(xyz);
    let newxyz = `newxyz === ${abc.length}`;
    console.log(newxyz);
}

ES6();

const ES7 = () => {
    const abc = { language: "english"};
    let xyz = `xyz === ${abc}`;
    console.log(xyz);
    let newxyz = `newxyz === ${abc.language}`;
    console.log(newxyz);
}

ES7();

```


*/

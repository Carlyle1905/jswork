var college = [
    ["计设院","电气","汽修"]
];
var major = [
    ["软件技术"],["1905"],["1906"]
    ["电气自动"],["1901"],["1902"]
    ["汽修牛批"],["1907"],["1908"]
];
function addCollegeOpt(text,value){
    var college = document.getElementById("college");
    var opt = document.createElement("option");
    opt.text = text;
    opt.value = value;
    city.options.add(opt);
}
function addmajorOpt(text,value){
    var major = document.getElementById("major");
    var opt = document.createElement("option");
    opt.text = text;
    opt.value = value;
    county.options.add(opt);
}
function addCollege(value){
   
    var college = document.getElementById("college");

    var major = document.getElementById("major");

    var classoh = document.getElementById("classoh");
 
    college.options.length = 1;
    major.options.length = 1;

    for(var i = 0 ; i< college[value].length; i++){
        addCollegeOpt(college[value][i],i);
    }
}
function addmajor(value){
    var college = document.getElementById("college");
    var major = document.getElementById("major");
    var classoh = document.getElementById("classoh");
    p_value = college.value;
    major.options.length = 1;
    for(var i = 0;i<major[p_value][value].length;i++){
        addCountyOpt(major[p_value][value][i],i);
    }
}

  
    

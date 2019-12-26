document.getElementById('upload').onclick = function (){
    var form = document.getElementById('form');
    var fd = new FormData(form);
    var bar = document.getElementById('bar');//进度条
    var per = document.getElementById('per');//百分比
    var down = document.getElementById('download');//地址
    var xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(e){
        var num = Math.floor(e.loaded / e.total * 100);
        bar.style.width = num + '%';
        per.innerHTML = num + '%';
    };
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status < 200 || xhr,status >= 300&& xhr.status !== 304){
                throw new Error('upload failed,server error');
            }
            var name = xhr.responseText;
            if(name == ''){
                throw new error('file save failed');
            }
            let reg = /^http(s)?:\/\/(.*?)\//
            let downurl = xhr.responseURL.match(reg)[0]+name.slice(2,name.length-1)
            down.innerHTML = 'upload success'
        }
    }
}
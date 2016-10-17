//封装原生ajax.
function ajax(opts) {
                    var xmlhttp=new XMLHttpRequest();
                    xmlhttp.onreadystatechange=function() {
                    if(xmlhttp.readyState===4) {
                        if((xmlhttp.status>=200&&xmlhttp.status<300)||xmlhttp.status===304) {
                            var data=JSON.parse(xmlhttp.responseText);
                            opts.success(data);
                        }else {
                            alert('出错啦')
                        }
                    }
                }
                    var dataStr='';
                    for(var key in opts.data) {
                        dataStr+=key+'='+opts.data[key]+'&';
                    }
                    dataStr=dataStr.substr(0,dataStr.length-1);
                    if(opts.type.toLowerCase()==='get') {
                        xmlhttp.open(opts.type,opts.url+'?'+dataStr,true);
                        xmlhttp.send()
                    }
                    if(opts.type.toLowerCase()==='post') {
                        xmlhttp.open(opts.type,opts.url,true);
                        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xmlhttp.send(dataStr);
                    }
                }
//封装hasClass,removeClass,addClass
function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('\\b' + cls + '\\b'));
}

function addClass(ele, cls) {
  if (ele.length && ele.length > 0) {
    for (var i = 0; i < ele.length; i++) {
      singleAddClass(ele[i], cls);
    }
  } else {
    singleAddClass(ele, cls);
  }
}

function removeClass(ele, cls) {
  if (ele.length && ele.length > 0) {
    for (var i = 0; i < ele.length; i++) {
      singleRemoveClass(ele[i], cls);
    }
  } else {
    singleRemoveClass(ele, cls);
  }
}

function singleAddClass(ele, cls) {
  if (hasClass(ele, cls)) return;
  ele.className += ' ' + cls;
}

function singleRemoveClass(ele, cls) {
  ele.className = ele.className.replace(new RegExp('\\b' + cls + '\\b', 'g'), '');
}
//正则表达式，用于检测用户名，密码格式是否正确。

//合法的用户名, 3~10个字符，只能是字母，数字，下划线
function isLegalUsername(str){
    return /^[A-Za-z_0-9]{3,10}$/.test(str);
}

//合法的密码, 6-15个字符，至少包括大写，小写，下划线，数字两种
function isLegalPassword(str){
    if(str.length < 6 || str.length > 16){
        return false;
    }
    //如果包含上述四种以外的字符，false
    if(/[^A-Za-z_0-9]/.test(str)){
        return false;
    }

    //如果全为大写、小写、下划线、数字, false
    if( /(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str) ){
        return false;
    }
    return true;
}

function isLegalPhone(str){
    return /^1[3-9]\d{9}$/.test(str);
}
import axios from 'axios';
const Colin = {
    setLS(name, obj) {
        if(typeof obj === 'object') {
            obj = JSON.stringify(obj);
        }
        localStorage.setItem(name, obj)
    },
    getLS(key) {
        var data;
        try {
            var obj = localStorage.getItem(key);
            data = JSON.parse(obj)
        } catch(e) {
            data = obj;
        }
        return data
    },
    setSS(name, obj) {
        if(typeof obj === 'object') {
            obj = JSON.stringify(obj);
        }
        sessionStorage.setItem(name, obj)
    },
    getSS(key) {
        var data;
        try {
            var obj = sessionStorage.getItem(key);
            data = JSON.parse(obj)
        } catch(e) {
            data = obj;
        }
        return data
    },
    setCookie: function(name, val, lifeCircle) {
        //name传入的键名  val传入的键值  lifeCircle cookie生命周期(过期时间=cookie的设置时间+lifeCircle)
        var oDate = new Date(); //时间对象
        oDate.setDate(new Date().getDate() + lifeCircle);
        document.cookie = name + "=" + val + ";expires=" + oDate + ";path=/;domain=.pingan.com.cn";
    },
    getCookie: function(name) {
        //name 为想要取到的键值的键名
        var reg = /\s/g;
        var result = document.cookie.replace(reg, "");
        var resultArr = result.split(";");
        for(var i = 0; i < resultArr.length; i++) {
            var nameArr = resultArr[i].split("=");
            if(nameArr[0] == name) {
                return nameArr[1];
            }
        }
    },
    removeCookie: function(name) {
        //name为想要删除的Cookie的键名
        var oDate = new Date(); //时间对象
        oDate.setDate(new Date().getDate() - 1);
        document.cookie = name + "=123;expires=" + oDate + ";path=/;domain=.pingan.com.cn";
    },
    scriptLazyLoad(url) {
        return new Promise((reslove, reject) => {
            var script = document.createElement('script');
            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
            script.onload = () => {
                reslove()
            }
            script.onerror = () => {
                reslove('error')
            }
        })
    },
    serializeData(obj, traditional) {
        function serialize(params, obj, traditional, scope) {
            var type, array = obj instanceof Array,
                hash = false
            for(var key in obj) {
                var value = obj[key]
                type = typeof value
                if(scope) key = traditional ? scope :
                    scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
                    // handle data in serializeArray() format
                if(!scope && array) params.add(value.name, value.value)
                    // recurse into nested objects
                else if(type == "array" || (!traditional && type == "object"))
                    serialize(params, value, traditional, key)
                else params.add(key, value)
            }
        }
        var params = []
        params.add = function(key, value) {
            if(typeof value == 'function') return
            if(value == null) value = ""
            this.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
        }
        serialize(params, obj, traditional)
        return params.join('&').replace(/%20/g, '+')
    },
    updateStoreAndSS(key,state,options){
        let keys=key.split('.'),new_key='state';
        keys.forEach((ele,i)=>{
             new_key+="['"+ele+"']";
        })
        new_key=eval(keys);
        new_key=Object.assign({},new_key,options);
        Colin.setSS('state',state)
    },
    ajax(url,data='',method='post'){
           return axios({
                method:method,
                url:url,
                data:data,
                header:{'token': state.userInfo.token}
           })
    }

}
export default Colin;
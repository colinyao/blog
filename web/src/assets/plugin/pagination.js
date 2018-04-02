'use strict';
(function(myClass) {
    if (typeof define === 'function' && define.amd) {
        define(function() { return myClass }); //define调用时，会自动执行函数
    } else if (typeof exports === 'object') {
        module.exports = myClass;
    } else {
        root.Pagination = myClass;
    }
})(function() {
    var Pagination = function(options) {
        var defaultOptions = {
            total: 0,
            current: 1,
            maxBtnLength: 7,
            btnText: false,
            border: false,
            background: true,
            defaultColor: '#333',
            currentColor: '#008acd',
            disableColor: '#cacaca'
        }
        this.options = merge(defaultOptions, options);
        this.listener = {
            'prev': [], //监听上一页
            'next': [], //监听下一页
            'change': [] //监听页码变化
        }
        this.init();
    }
    Pagination.prototype = {
        constructor: Pagination,
        initStatus:false,
        init() {
            if (this.options.total > 1&& !this.initStatus) {
                this.createELe();
                this.bindEvent()
                this.initStatus=true;
            }
        },
        createELe() {
            var that = this,
                 container = document.createDocumentFragment(),
                 ul = document.createElement('ul'),
                 leftBtn = [{ text:this.options.btnText?'<上一页':'<', className: 'prevBtn' }],
                 rightBtn = [{ text: this.options.btnText?'下一页>':'>', className: 'nextBtn' }],
                 pageList = [].concat(leftBtn, this.sortPageBtn(), rightBtn);
                 ul.style.display='inline-block;'
            pageList.forEach(function(ele) {
                ul.appendChild(that.createBtn(ele))
            })
            container.appendChild(ul)
            if (this.options.container.hasChildNodes()) {
                this.options.container.removeChild(this.options.container.childNodes[0])
            }
            this.options.container.appendChild(container)
        },
        sortPageBtn() {
            var pageList = [],
                 start = { text: 1, className: 'pageBtn' },
                 end = { text: this.options.total, className: 'pageBtn' },
                 current = this.options.current;
            if (this.options.total > this.options.maxBtnLength) {
                var restBtnNum = this.options.maxBtnLength - 2;
                var startLine = current - Math.floor(restBtnNum / 2);
                var endLine = +current + (restBtnNum - Math.floor(restBtnNum / 2));
                if (startLine < 2) {
                    startLine = 2;
                    endLine = 2 + restBtnNum;
                } else if (endLine > this.options.total) {
                    startLine = this.options.total - restBtnNum;
                    endLine = this.options.total
                }
                var index = startLine;
                while (index < endLine) {
                    if (current > 4 && startLine > 2 && startLine === index) {
                        pageList.push({ text: '...', className: 'prevLineBtn' })
                    } else if (current < this.options.total - 3 && index === endLine - 1) {
                        pageList.push({ text: '...', className: 'nextLineBtn' })
                    } else {
                        pageList.push({ text: index, className: 'pageBtn' })
                    }
                    index++
                }
            } else if (this.options.total <= this.options.maxBtnLength) {
                var index = 2;
                while (index < this.options.total) {
                    pageList.push({text:index,className:'pageBtn'})
                    index++
                }
            }
            return [].concat(start, pageList, end);
        },
        createBtn(btn) {
            var ele = document.createElement('li'),
                 style = '-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;margin:0 5px;cursor:pointer;font-size:14px;line-height:2;text-align:center;border-radius:3px;padding:0 5px;min-width:30px;box-sizing:border-box;';
            ele.innerHTML = btn.text;
            if (this.options.border) {
                style += 'border:1px solid #333;'
            } else if (this.options.background) {
                style += 'background:#eee;'
            }
            //判断是否可以前进或后退
            if ((this.options.current == 1 && btn.className === 'prevBtn') || (this.options.current == this.options.total && btn.className === 'nextBtn')) {
                style += 'color:' + this.options.disableColor + ';cursor:default;'
                if (this.options.border) {
                    style += 'border-color:' + this.options.disableColor + ';'
                }
            }
            if (btn.text == this.options.current) {
                ele.className=btn.className + ' active';
                style += 'color:' + this.options.currentColor + ';'
                if (this.options.border) {
                    style += 'border-color:' + this.options.currentColor + ';'
                } else if (this.options.background) {
                    style += 'color:#fff;background:' + this.options.currentColor + ';'
                }
            } else {
                ele.className=btn.className;
            }
            ele.style = style
            return ele;
        },
        bindEvent() {
            var that = this;
            function click(e) {
                var target = e.target || e.scrElement,
                     className = target.className,
                     prevCurrent = +that.options.current,
                     current='';
                switch (className) {
                    case 'prevBtn':
                        current=prevCurrent-1;
                        if (current >= 1) {
                            that.options.current = current;
                        }else{
                             return false;
                        }
                        break;
                    case 'nextBtn':
                        current=prevCurrent+1;
                        if (current <= that.options.total) {
                            that.options.current = current;
                        }else{
                             return false;
                        }
                        break;
                    case 'prevLineBtn':
                        var restBtnNum = that.options.maxBtnLength - 2;
                        current = prevCurrent - Math.ceil(restBtnNum / 2);
                        if (current < 1) {
                            that.options.current = 1;
                        } else if (current > that.options.total - restBtnNum) {
                            that.options.current = that.options.total - restBtnNum + 1;
                        } else {
                            that.options.current = current
                        }
                        break;
                    case 'nextLineBtn':
                        var restBtnNum = that.options.maxBtnLength - 2;
                        current = prevCurrent + Math.ceil(restBtnNum / 2);
                        if (current > that.options.total) {
                            that.options.current = that.options.total;
                        } else if (current < restBtnNum) {
                            that.options.current = restBtnNum
                        } else {
                            that.options.current = current
                        }
                        break;
                    case 'pageBtn':
                        that.options.current=current=target.innerHTML;

                        break;
                    default:
                        break;
                }
                if(that.options.current!=prevCurrent){
                   that.createELe();
                   that.trigger('change', current)
                }

            }
            this.options.container.addEventListener('click', click);
        },
        addListener(event, fn) {
            if (this.listener[event]) {
                this.listener[event].push(fn)
            }
        },
        trigger(event) {
            var args = [].slice.call(arguments, 1),
                that = this;
            if (this.listener[event]) {
                that.listener[event].forEach(function(fn) {
                    fn.apply(fn, args)
                })
            }
        },
        update(ops){
             this.options = merge(this.options , ops);
             this.init()
        }
    }
    function merge() {
        var objs = [].slice.apply(arguments),
            len = objs.length,
            newObj = {},
            _newObj = {};
        if (len) {
            for (var i in objs[0]) {
                newObj[i] = objs[0][i]
            }
            objs.shift()
            if (objs.length) {
                _newObj = merge.apply(this, objs)
                for (var i in _newObj) {
                    newObj[i] = _newObj[i]
                }
            }
        }
        return newObj;
    }
    return Pagination;
}())

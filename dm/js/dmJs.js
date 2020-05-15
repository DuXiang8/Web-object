
    //轮播图js代码
    
    const oDiv = document.querySelector('.banner');

    class Loop {
        constructor(ele) {
            this.ele = ele;
            this.oUl = ele.querySelector('ul');
            this.oOl = ele.querySelector('ol');
            this.oUlli = ele.querySelectorAll('ul li');
            // this.oOlli = ele.querySelectorAll('ol li');
            this.oOl = ele.querySelector('ol');
            this.oD = ele.querySelector('.od');
            this.liwidth = parseInt(window.getComputedStyle(this.oUlli[0]).width);
            this.time = 0;
            this.index = 1;
            this.bool = true;
        }


        //1.定义方法1 , 运动函数 在其他的方法中调用
        move(ele, obj, callback) {
            for (let type in obj) {
                let oldval = parseInt(window.getComputedStyle(ele)[type]);
                let time = setInterval(function () {
                    let val = (obj[type] - oldval) / 5;
                    val = val > 0 ? Math.ceil(val) : Math.floor(val);
                    oldval += val;
                    ele.style[type] = oldval + 'px';
                    if (oldval == obj[type]) {
                        clearInterval(time);
                        callback();
                    }
                }, 100)
            }
        }

        //2定义方法2 , 设定焦点
        setLi() {
            let str = '';
            this.oUlli.forEach(function (val, key) {
                if (key === 0) {
                    str += `<li name="olli" class="active" index="${key + 1}"></li>`;
                } else {
                    str += `<li name="olli" index="${key + 1}"></li>`;
                }
            });
            this.oOl.innerHTML = str;
        }

        //3.定义方法3 , 复制标签
        copyLi() {
            let f = this.oUlli[0];
            let l = this.oUlli[this.oUlli.length - 1];

            let first = f.cloneNode(true);
            let last = l.cloneNode(true);

            this.oUl.appendChild(first);
            this.oUl.insertBefore(last, f);

            this.oUl.style.width = ((this.oUlli.length + 2) * this.liwidth) + 'px';
            this.oUl.style.left = -this.liwidth + 'px';
        }

        //定义方法4 自动轮播
        autoLoop() {
            this.time = setInterval(() => {
                this.index++;
                this.move(this.oUl, { left: -this.index * this.liwidth }, () => {
                    this.moveEnd();
                });
                this.dex();
            }, 4000);
        }

        //定义方法5 , 运动终止时,执行的函数
        moveEnd() {
            this.bool = true;
            if (this.index == this.oUlli.length + 1) {
                this.index = 1;
                this.oUl.style.left = (-this.index * this.liwidth) + 'px';
            } else if (this.index == 0) {
                this.index = this.oUlli.length;
                this.oUl.style.left = (-this.index * this.liwidth) + 'px';
            }
        }

        //方法6.设定焦点按钮样式,按钮与图片一起动 在其他方法中调用
        dex() {
            // let oUlli = this.ele.querySelectorAll('ul li');
            let oOlli = this.ele.querySelectorAll('ol li');
            this.oUlli.forEach(function (v, k) {
                oOlli[k].className = '';
            });
            if (this.index == this.oUlli.length + 1) {
                oOlli[0].className = 'active';
            } else if (this.index == 0) {
                oOlli[4].className = 'active';
            } else {
                oOlli[this.index - 1].className = 'active';
            }
        }



        //定义方法7 , 鼠标移入移出
        stopLoop() {
            this.ele.addEventListener('mouseover', () => {
                clearInterval(this.time);
            });
            this.ele.addEventListener('mouseout', () => {
                this.autoLoop();
            });
        }

        //定义方法8,焦点按钮切换
        focus() {
            let oOlli = this.ele.querySelectorAll('ol li');
            this.oOl.addEventListener('click', (e) => {
                if (e.target.getAttribute('name') === 'olli') {
                    if (this.bool !== true) {
                        return;
                    }
                    this.bool = '随便';
                    oOlli.forEach(function (v, k) {
                        oOlli[k].className = '';
                    });
                    oOlli[e.target.getAttribute('index') - 1].className = 'active';
                    //直接跳转 随便点
                    // oUl.style.left = -(e.target.getAttribute('index')) * 600 + 'px';
                    //有过渡效果
                    this.index = e.target.getAttribute('index') - 0;
                    this.move(this.oUl, { left: -this.index * this.liwidth }, ()=>{
                        this.moveEnd();
                    });
                }
            });
        }
        


        //定义方法9 , 左右切换
        leftRight() {
            this.oD.addEventListener('click', (e) => {
                if (this.bool !== true) {
                    return;
                }
                this.bool = '随便';
                if (e.target.getAttribute('name') == 'left') {
                    this.index--;
                    this.move(this.oUl, { left: -this.index * this.liwidth }, ()=>{
                        this.moveEnd();
                    });
                    this.dex();
                } else if (e.target.getAttribute('name') == 'right') {
                    this.index++;
                    this.move(this.oUl, { left: -this.index * this.liwidth }, ()=>{
                        this.moveEnd();
                    });
                    this.dex();
                }

            });
        }


        //定义方法10 , 页面隐藏
        hidden() {
            document.addEventListener('visibilitychange',  () =>{
                if (document.visibilityState === 'hidden') {
                    clearInterval(this.time);
                } else if (document.visibilityState === 'visible') {
                    this.autoLoop();
                }
            });
        }


    }
    const obj = new Loop(oDiv);
    obj.setLi();
    obj.copyLi();
    obj.autoLoop();
    obj.stopLoop();
    obj.focus();
    obj.leftRight();
    obj.hidden();


    //
    

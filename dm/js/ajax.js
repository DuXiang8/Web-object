$.ajax({
    url: 'https://api-gw.damai.cn//search.html',
    data: {
        cat: 1,
        destCity: '全国',
        _ksTS: 1588342097671_101
    },
    dataType: 'jsonp',
    success: function (res) {
        console.log(res);
        const arr = res.data;
        console.log(arr);

        // console.log( typeof(arr[0].formattedPriceStr));
        var a = arr[1].formattedPriceStr;
        var b = a.split('-');


        let str = '';
        str = `
    
        <div class="top">
            <p>演唱会</p>
            <a href="./pages/dmList.html?ctl=演唱会">查看全部</a>
        </div>

        <div class="bottom">
            <div class="left">
                    <a href="./pages/dmDetails.html?id=${arr[0].id}">
                        <img src="${arr[0].verticalPic}" alt="">
                    </a>
                    <div class="left-box">
                        <a href="./pages/dmDetails.html?id=${arr[0].id}">
                            <p>${arr[0].name}</p>
                            <p>￥${b[0]}<span>起</span></p>
                        </a>
                    </div>
                </div>
                <div class="right">
                    <ul class="clear">`;
        if (str !== '') {
            arr.splice(0, 1);
            arr.forEach(function (item) {
                str += `<li>
            <div class="li-left">
                <a href="./pages/dmDetails.html?id=${item.id}"><img src="${item.verticalPic}" alt=""></a>
            </div>
            <div class="li-right">
                <a href="./pages/dmDetails.html?id=${item.id}">
                    <p>${item.name}</p>
                    <p>${item.venueName}</p>
                    <p>${item.showTime}</p>
                    <div>￥${item.formattedPriceStr.split('-')[0]}<span>起</span></div>
                </a>
            </div>
        </li>`;
            })
        }
        str += `</ul>
    </div>
</div>
`;
        $('.column1').html(str);
    }
})


//二次请求
$.ajax({
    url: 'https://api-gw.damai.cn//search.html',
    data: {
        cat: 3,
        destCity: '全国',
        _ksTS: 1588379015638_115
    },
    dataType: 'jsonp',
    success: function (res) {

        const arr = res.data;

        var a = arr[1].formattedPriceStr;
        var b = a.split('-');

        let str2 = '';
        str2 = `
    
        <div class="top">
            <p>话剧歌剧</p>
            <a href="./pages/dmList.html?ctl=话剧歌剧">查看全部</a>
        </div>

        <div class="bottom">
            <div class="left">
                    <a href="./pages/dmDetails.html?id=${arr[0].id}">
                        <img src="${arr[0].verticalPic}" alt="">
                    </a>
                    <div class="left-box">
                        <a href="./pages/dmDetails.html?id=${arr[0].id}">
                            <p>${arr[0].name}</p>
                            <p>￥${b[0]}<span>起</span></p>
                        </a>
                    </div>
                </div>
                <div class="right">
                    <ul class="clear">`;
        if (str2 !== '') {
            arr.splice(0, 1);
            arr.forEach(function (item) {
                str2 += `<li>
            <div class="li-left">
                <a href="./pages/dmDetails.html?id=${item.id}"><img src="${item.verticalPic}" alt=""></a>
            </div>
            <div class="li-right">
                <a href="./pages/dmDetails.html?id=${item.id}">
                    <p>${item.name}</p>
                    <p>${item.venueName}</p>
                    <p>${item.showTime}</p>
                    <div>￥${item.formattedPriceStr.split('-')[0]}<span>起</span></div>
                </a>
            </div>
        </li>`;
            })
        }
        str2 += `</ul>
    </div>
</div>
`;
        $('.column2').html(str2);
    }
})


//三次请求
$.ajax({
    url: 'https://api-gw.damai.cn//search.html',
    data: {
        cat: 6,
        destCity: '全国',
        _ksTS: 1588379015640_129
    },
    dataType: 'jsonp',
    success: function (res) {

        const arr = res.data;

        var a = arr[1].formattedPriceStr;
        var b = a.split('-');

        let str3 = '';
        str3 = `
    
        <div class="top">
            <p>体育比赛</p>
            <a href="./pages/dmList.html?ctl=体育">查看全部</a>
        </div>

        <div class="bottom">
            <div class="left">
                    <a href="./pages/dmDetails.html?id=${arr[0].id}">
                        <img src="${arr[0].verticalPic}" alt="">
                    </a>
                    <div class="left-box">
                        <a href="./pages/dmDetails.html?id=${arr[0].id}">
                            <p>${arr[0].name}</p>
                            <p>￥${b[0]}<span>起</span></p>
                        </a>
                    </div>
                </div>
                <div class="right">
                    <ul class="clear">`;
        if (str3 !== '') {
            arr.splice(0, 1);
            arr.forEach(function (item) {
                str3 += `<li>
            <div class="li-left">
                <a href="./pages/dmDetails.html?id=${item.id}"><img src="${item.verticalPic}" alt=""></a>
            </div>
            <div class="li-right">
                <a href="./pages/dmDetails.html?id=${item.id}">
                    <p>${item.name}</p>
                    <p>${item.venueName}</p>
                    <p>${item.showTime}</p>
                    <div>￥${item.formattedPriceStr.split('-')[0]}<span>起</span></div>
                </a>
            </div>
        </li>`;
            })
        }
        str3 += `</ul>
    </div>
</div>
`;
        $('.column3').html(str3);
    }
})


//四次请求
$.ajax({
    url: 'https://api-gw.damai.cn//search.html',
    data: {
        cat: 100,
        destCity: '全国',
        _ksTS: 1588379015643_143
    },
    dataType: 'jsonp',
    success: function (res) {

        const arr = res.data;
        console.log(arr);

        var a = arr[1].formattedPriceStr;
        var b = a.split('-');

        let str4 = '';
        str4 = `
    
        <div class="top">
            <p>儿童亲子</p>
            <a href="JavaScript:;">查看全部</a>
        </div>

        <div class="bottom">
            <div class="left">
                    <a href="./pages/dmDetails.html?id=${arr[0].id}">
                        <img src="${arr[0].verticalPic}" alt="">
                    </a>
                    <div class="left-box">
                        <a href="./pages/dmDetails.html?id=${arr[0].id}">
                            <p>${arr[0].name}</p>
                            <p>￥${b[0]}<span>起</span></p>
                        </a>
                    </div>
                </div>
                <div class="right">
                    <ul class="clear">`;
        if (str4 !== '') {
            arr.splice(0, 1);
            arr.forEach(function (item) {
                str4 += `<li>
            <div class="li-left">
                <a href="./pages/dmDetails.html?id=${item.id}"><img src="${item.verticalPic}" alt=""></a>
            </div>
            <div class="li-right">
                <a href="./pages/dmDetails.html?id=${item.id}">
                    <p>${item.name}</p>
                    <p>${item.venueName}</p>
                    <p>${item.showTime}</p>
                    <div>￥${item.formattedPriceStr.split('-')[0]}<span>起</span></div>
                </a>
            </div>
        </li>`;
            })
        }
        str4 += `</ul>
    </div>
</div>
`;
        $('.column4').html(str4);
    }
})
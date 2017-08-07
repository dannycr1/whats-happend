// Shared Page Constructor
bubleApp.factory("Page", function () {
    function Page() {
        this.pageBubleList = [];
        this.maxPageHeight = 310;
        this.currentPageHeight = 0;

        // this.addBuble = function (buble) {
        //     if (this.currentPageHeight + buble.bubleHeight + 1 < this.maxPageHeight)
        //     { return true }
        //     else { return false }
        // }

    }
    return Page;
});




// need to add index
bubleApp.factory("pages", function (Page, bubles) {
    var pageArr = [];

    var addBubleToPage = function (pageIndex, buble) {
        pageArr[pageIndex].pageBubleList.push(buble);
    }



    var addPage = function () {
        pageArr.push(new Page);
        console.log("\n\n Add new page: " + JSON.stringify(pageArr.length))
        return (pageArr.length - 1)

    }


    var setCurrentPageHeight = function (index, value) {
        pageArr[index].currentPageHeight = value;
    }

    var getCurrentPageHeight = function (index) {
        return pageArr[index].currentPageHeight;
    }

    var getMaxPageHeight = function (index) {
        return pageArr[index].maxPageHeight;
    }

    var getpageBubleList = function (index) {
        return pageArr[index].pageBubleList;
    }
    var add = function (page) {
        pageArr.push(page);
    }

    var update = function (index, page) {
        pageArr[index] = page;
    }

    var remove = function (index) {
        pageArr.splice(index, 1);
    }

    var load = function () {
        pageArr.push(new Page())
    }

    var getAll = function () {
        return pageArr;
    }

    var get = function (index) {
        return pageArr[index];
    }

    var removeAll = function () {
        pageArr = [];
    }

    var buildPages = function () {
        var pageIndex = 0;
        var bubleArr = bubles.getAll();
        var bublePages = [];
        addPage();
        setCurrentPageHeight(pageIndex, 0);
        var len = bubles.getAll().length;
        for (var i = 0; i < len; i++) {
            if (getCurrentPageHeight(pageIndex) + bubles.getHeight(i) + 1 > getMaxPageHeight(pageIndex)) {
                console.log("-------new page -------------");
                console.log("getCurrentPageHeight: )" + JSON.stringify(getCurrentPageHeight(pageIndex)));
                console.log("bubles.getHeight(i))" + JSON.stringify(bubles.getHeight(i)));
                console.log("new current " + JSON.stringify(getCurrentPageHeight(pageIndex) + bubles.getHeight(i) + 1));
                console.log("getMaxPageHeight" + JSON.stringify(getMaxPageHeight(pageIndex)));

                {
                    bublePages[pageIndex] = getpageBubleList(pageIndex);
                    // console.log("bublePages " + JSON.stringify($scope.bublePages[pageIndex]));
                    // console.log("bublelength " + JSON.stringify($scope.bublePages[pageIndex].length));
                }


                pageIndex++;
                addPage(pageIndex);
                setCurrentPageHeight(pageIndex, 0);
            }

            console.log("-------Exist page -------------");
            console.log("getCurrentPageHeight " + JSON.stringify(getCurrentPageHeight(pageIndex)));
            console.log("bubles.getHeight(i)   " + JSON.stringify(bubles.getHeight(i)));
            console.log("new current " + JSON.stringify(getCurrentPageHeight(pageIndex) + bubles.getHeight(i) + 1));
            console.log("getMaxPageHeight " + JSON.stringify(getMaxPageHeight(pageIndex)));

            console.log("buble number" + i + " from length " + len);

            addBubleToPage(pageIndex, bubleArr[i]);
            setCurrentPageHeight(pageIndex, getCurrentPageHeight(pageIndex) + bubles.getHeight(i) + 1);
            
        }
        return bublePages;

    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        addBubleToPage: addBubleToPage,
        addPage: addPage,
        setCurrentPageHeight: setCurrentPageHeight,
        getCurrentPageHeight: getCurrentPageHeight,
        getMaxPageHeight: getMaxPageHeight,
        getpageBubleList: getpageBubleList,
        buildPages: buildPages

    }
})
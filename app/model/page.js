// Shared Page Constructor
bubleApp.factory("Page", function () {
    function Page() {
        this.pageBubleList = [];
        this.maxPageHeight = 290;
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
bubleApp.factory("pages", function (Page) {
    var pageArr = [];

    var addBubleToPage = function (pageIndex, buble) {
        //        if (addBubleToPage[length - 1].addBuble(bubleIndex) == "true") {
        if (true) {
            //             pageArr.push(new Page);
            //console.log("buble " + buble);
            pageArr[pageIndex].pageBubleList.push(buble);
            console.log("pageArr " + JSON.stringify(pageArr));
            //console.log("pageBubleList " + JSON.stringify(pageArr[pageIndex].pageBubleList));
        }
        else {
            pageArr.push(new Page());
            console.log("Crete new page:" + pageArr[length])
            index++;
        }
    }



    var addPage = function () {
        pageArr.push(new Page);
        console.log("pages: " + JSON.stringify(pageArr))
        return (pageArr.length - 1)

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

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        addBubleToPage: addBubleToPage,
        addPage: addPage

    }
})
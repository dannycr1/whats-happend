// Shared Page Constructor
bubleApp.factory("Page", function () {
    function Page() {
        this.pageBubleList = [];
        this.maxPageHeight = 290;
        this.currentPageHeight = 0;

        this.addBuble = function (buble) {
            if (this.currentPageHeight + buble.bubleHeight + 1 < this.maxPageHeight)
            { return true }
            else { return false }
        }

    }
    return Page;
});




// need to add index
bubleApp.factory("pages", function (Page) {
    var pageArr = [];

    var addBubleToPage = function (pageIndex ,bubleIndex) {
        var index = pageIndex;

        {
            // if (addBubleToPage[length - 1].addBuble(bubleIndex) == "true") {
            if (true) {
                pageArr.push(new Page);
                console.log("pageArr " + JSON.stringify(pageArr));
                console.log("pageBubleList " + JSON.stringify(pageArr[index].pageBubleList));
                pageArr[0].pageBubleList.push(bubleIndex);
                console.log("pageBubleList " + JSON.stringify(pageArr[index].pageBubleList));
                //  this.currentPageHeight += pageBubleList[i].sizebubleHeight + 1;
                //  console.log("adding buble" + buble + " size" + pageBubleList[i].sizebubleHeight)
            }
            else {
                pageArr.push(new Page());
                console.log("Crete new page:" + pageArr[length])
                index++;

            }
        }

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
        addBubleToPage: addBubleToPage

    }
})
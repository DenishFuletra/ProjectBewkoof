var datamen = [
    {
        "image": "https://images.bewakoof.com/t320/big-herbal-weed-lightweight-adjustable-strap-men-slider-333615-1655749605-1.jpg",

        "name": "Titan Neo Iv Analog Silver Dial Men's Watch-1802SL01 / 1802SL01",

        "price": "1500",

        "StrikePrice": "2000",

        "size": "L",

        "Qty": "1"

    },
    {
        "image": "https://m.media-amazon.com/images/I/71pVPpqzqwL._AC_UL320_.jpg",

        "name": "AAA Crystal 18k Rose Gold Stylish Jewellery for Women and Girls",

        "price": "179",

        "StrikePrice": "2000",

        "size": "L",

        "Qty": "1"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71pVPpqzqwL._AC_UL320_.jpg",

        "name": "AAA Crystal 18k Rose Gold Stylish Jewellery for Women and Girls",

        "price": "179",

        "StrikePrice": "2000",

        "size": "L",

        "Qty": "1"
    }
];
// localStorage.setItem("data",JSON.stringify(datamen));
var data = JSON.parse(localStorage.getItem("data")) || [];
var logindata = JSON.parse(localStorage.getItem("loginData"));
username(logindata);
addcart(data);
function addcart(data) {
    document.querySelector("#final").innerText = null
    data.map(function (elem, index) {
        var div4 = document.createElement("div");

        // div4 code
        div4.setAttribute("class", "button");

        var size = document.createElement("p");
        size.innerText = "Size :" + " " + elem.size;
        // console.log(size);

        var Qty = document.createElement("p");
        var increment = document.createElement("span");
        increment.innerText = "+";
        increment.setAttribute("id", "increment")
        var decrement = document.createElement("span");
        decrement.innerText = "-"
        decrement.setAttribute("id", "decrement")

        var subQty = document.createElement("span");
        subQty = elem.Qty;

        Qty.append(decrement, subQty, increment);

        console.log(Qty);

        increment.addEventListener("click", function () {
            increaseQty(elem);
        })
        decrement.addEventListener("click", function () {
            decreaseQty(elem, index);
        })
        div4.append(size, Qty);
        var div3 = document.createElement("div");

        var name = document.createElement("h1");
        name.innerText = elem.name;
        var price = document.createElement("h2");
        var fprice = document.createElement("span");
        fprice.innerText = "₹" + elem.Qty * elem.price;
        var sprice = document.createElement("span");
        sprice.innerText = "₹" + elem.Qty * elem.StrikePrice;
        sprice.style.textDecoration = "line-through";
        sprice.style.marginLeft = "20px";
        var saverupees = document.createElement("p");
        saverupees.innerText = "You saved ₹" + elem.Qty * (elem.StrikePrice - elem.price);

        price.append(fprice, sprice);
        // console.log(price);

        div3.append(name, price, saverupees, div4);
        // console.log(div3);

        // div2 code
        var div2 = document.createElement("div");
        var image = document.createElement("img");
        image.setAttribute("id", "productimg");
        image.src = elem.image;

        div2.append(div3, image);
        // console.log(div2);

        // div5 code
        var div5 = document.createElement("div");
        div5.setAttribute("class", "remove");

        var remove = document.createElement("p");
        remove.innerText = "Remove";
        remove.addEventListener("click", function () {
            removeItem(index);
        })

        var moveWishlist = document.createElement("p");
        moveWishlist.innerText = "Move to Wishlist";

        div5.append(remove, moveWishlist);

        var hline = document.createElement("hr");
        hline.style.opacity = "0.2";

        var div1 = document.createElement("div");
        div1.setAttribute("id", "cartitem")
        div1.append(div2, hline, div5);

        document.querySelector("#final").append(div1);
    });

    var totalitem = data.length;
    document.querySelector("#tItem").innerText = totalitem;
    totalprice(data);
}

function removeItem(index) {
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    addcart(data);
}

function changeQty(elem) {
    elem.Qty = document.querySelector("select").value;
    // console.log(elem.Qty);
    localStorage.setItem("data", JSON.stringify(data));
    addcart(data);
}

function increaseQty(elem) {
    var qty = +elem.Qty + 1;
    elem.Qty = qty;
    localStorage.setItem("data", JSON.stringify(data));
    addcart(data);
}
function decreaseQty(elem, index) {

    var qty = +elem.Qty - 1;
    if (qty == 0) {
        data.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(data));

    } else {
        elem.Qty = qty;
        localStorage.setItem("data", JSON.stringify(data));

    }
    addcart(data);
}

function totalprice() {
    var mrp = 0;
    var bag = 0;

    //    console.log(+mrp);

    data.map(function (elem) {
        mrp = +mrp + elem.Qty * elem.StrikePrice;
        bag = +bag + elem.Qty * (elem.StrikePrice - elem.price);


    })
    // console.log(bag);
    document.querySelector("#totalMRP").innerText = "₹" + mrp;
    document.querySelector("#bagDiscount").innerText = "₹" + bag;
    document.querySelector("#subtotal").innerText = "₹" + (mrp - bag);
    document.querySelector("#total").innerText = "₹" + (mrp - bag);
    document.querySelector("#bagDiscount1").innerText = "₹" + bag;
}

function username(logindata) {
    logindata.map(function (elem) {
        document.querySelector("#username").innerText = elem.name;
    });

};
function coupenCode() {
    var promo = "bewkoof20";
    var received = document.querySelector("#coupen").value;
    var bag = document.querySelector("#bagDiscount").innerText;
    var total = document.querySelector("#total").innerText;
    total = total.slice(1);
    bag = bag.slice(1);



    if (received === promo) {
        total = Math.floor((total * 80) / 100);
        bag = Math.floor((bag * 120) / 100);
        document.querySelector("#bagDiscount").innerText = "₹" + bag;
        document.querySelector("#subtotal").innerText = "₹" + (total);
        document.querySelector("#total").innerText = "₹" + (total);
        document.querySelector("#bagDiscount1").innerText = "₹" + bag;
        alert("Congralution you got 10% discount");
    }

}







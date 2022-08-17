
jQuery(document).ready(function ($) {

    $(".removeFromCartBtn").on("click", function (e) {
        e.preventDefault();
        var btn = $(this);
        $.ajax({
            url:remove_from_cart_url,
            data:{ _token:toke, product_id:btn.attr('data-product-id'), product_name:btn.attr('data-product-name'), product_qty:0, update:true },
            type:"POST",
            dataType:"json",
            success:function (rez) {
                if(rez.success){
                    $("#cartCountDisplay").text(rez.cart_item_count);
                    window.location.href = "/cart";
                }
            }
        })
    });

    $(".product-qty").on("change keyup", function (e) {

        var inpt = $(this);

        $.ajax({
            url:update_cart_url,
            data:{ _token:toke, product_id:inpt.attr('data-product-id'), product_name:inpt.attr('data-product-name'), product_freq:inpt.attr('data-product-freq'), product_qty:inpt.val(), update:true },
            type:"POST",
            dataType:"json",
            success:function (rez) {
                if(rez.success){
                    $("#cartCountDisplay").text(rez.cart_item_count);
                    window.location.href = "/cart";
                }
            }
        })
    });

});


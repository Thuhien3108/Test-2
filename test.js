function displayProduct() {
    // Lấy giá trị từ form
    var productName = document.getElementById("product-name").value;
    var oldPrice = document.getElementById("product-old-price").value;
    var newPrice = document.getElementById("product-new-price").value;
    var imageUrl = document.getElementById("product-image").value;
    var productCode = document.getElementById('product-code').value;

    // Tạo HTML cho sản phẩm
    const productCard = `
        <div class="card">
             <h2> Sản Phẩm <h2>
            <img src="${imageUrl}" class="card-img-top" alt="Hình ảnh sản phẩm">
              <h5 class="card-title">${productName} - ${productCode}</h5>
            <p class="card-text">
                Giá cũ: <del>${oldPrice} VND</del><br>
                Giá mới: ${newPrice} VND
            </p>
            <button type="button">Đặt Mua</button>
        </div>
    `;

    // Thêm sản phẩm vào danh sách sản phẩm
    var productList = document.getElementById("product-list");
    productList.innerHTML += productCard;

    // Giữ nguyên giá trị trong các trường nhập liệu
    document.getElementById("product-name").value = productName;
    document.getElementById("product-old-price").value = oldPrice;
    document.getElementById("product-new-price").value = newPrice;
    document.getElementById("product-image").value = imageUrl;
    document.getElementById("product-code").value = productCode;
}
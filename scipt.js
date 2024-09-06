function sortNumbers() {
    // Lấy dữ liệu từ khung nhập
    let input = document.getElementById('inputData').value;

    // Chuyển chuỗi thành mảng các số
    let numbers = input.split(',').map(Number);

    // Sắp xếp mảng các số theo thứ tự tăng dần
    numbers.sort(function(a, b) {
        return a - b;
    });

    // Hiển thị kết quả
    document.getElementById('outputResult').innerText = 'Kết quả: ' + numbers.join(', ');
}

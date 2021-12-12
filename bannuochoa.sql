-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 12, 2021 lúc 02:49 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bannuochoa`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `price` float NOT NULL,
  `importprice` float NOT NULL,
  `image` varchar(1000) NOT NULL,
  `description` varchar(10000) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `name`, `price`, `importprice`, `image`, `description`, `quantity`) VALUES
(1, 1, 'Giorgio Armani Acqua Di Gio Pour Homme For Men', 200000, 500000, 'Ảnh', 'Giorgio Armani tạo ra hương nước hoa Giorgio Armani Acqua Di Gio được lấy cảm hứng từ những gì tinh túy nhất. Chai nước hoa được chính thức tung lên thị trường vào năm 1996 và vẫn được sử dụng rộng rãi tới bây giờ.\r\n\r\nNhà sáng chế Alberto Morillas lấy cảm hứng từ vẻ đẹp của vùng đất Pantellerie. Hương thơm không phân biệt bất kỳ giới tính nào. Sự tự do, hoà hợp giữa vị mặn ngọt của biển và nắng, gió ấm áp từ tinh không. Hương nước hoa đầy ánh nắng mặt trời Địa Trung Hải nóng như thiêu đốt mơn trơn trên làn da. Chai nước hoa bùng nổ sự nam tính trong con người bạn.', 100),
(2, 2, 'Giorgio Armani Acqua Di Gio Pour Homme For Men', 200000, 2000000, 'ảnh', 'Giorgio Armani tạo ra hương nước hoa Giorgio Armani Acqua Di Gio được lấy cảm hứng từ những gì tinh túy nhất. Chai nước hoa được chính thức tung lên thị trường vào năm 1996 và vẫn được sử dụng rộng rãi tới bây giờ.\r\n\r\nNhà sáng chế Alberto Morillas lấy cảm hứng từ vẻ đẹp của vùng đất Pantellerie. Hương thơm không phân biệt bất kỳ giới tính nào. Sự tự do, hoà hợp giữa vị mặn ngọt của biển và nắng, gió ấm áp từ tinh không. Hương nước hoa đầy ánh nắng mặt trời Địa Trung Hải nóng như thiêu đốt mơn trơn trên làn da. Chai nước hoa bùng nổ sự nam tính trong con người bạn.', 100);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

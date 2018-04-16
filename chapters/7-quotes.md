# Quotes
- Luôn luôn sử dụng dấu ngoặc kép (`"`) cho các thuộc tính JSX, nhưng dấu nháy đơn (`'`) cho tất cả các JS khác. Eslint: [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)

*Tại sao? Các thuộc tính HTML thông thường thường sử dụng dấu ngoặc kép thay vì đơn, vì vậy thuộc tính JSX phản chiếu quy ước này.*
```sh
// Chưa chuẩn
<Foo bar='bar' />

// Chuẩn
<Foo bar="bar" />

// Chưa chuẩn
<Foo style={{ left: "20px" }} />

// Chuẩn
<Foo style={{ left: '20px' }} />
```

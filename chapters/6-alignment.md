**Alignment**
- Thực hiện theo các kiểu sắp xếp này cho cú pháp JSX. eslint: `react/jsx-closing-bracket-location` `react/jsx-closing-tag-location`
```sh
// Chưa chuẩn
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// Chuẩn
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// Nếu props phù hợp trong một dòng thì giữ nó trên cùng một dòng
<Foo bar="bar" />

// Phần tử con được thụt lề bình thường
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
```

Spacing 
1.Luôn luôn có một khoảng trắng duy nhất trong thẻ tự đóng 
    // không có khoảng trắng  => không tốt
    <Foo/>
    // quá nhiều khoảng trắng  => không tốt một chút nào 
    <Foo                 />
    // khong có ký tự khoảng trắng trước dấu / => không tốt
    <Foo
    />
    // chuẩn
    <Foo />
  2. Không cho phép dùng khoảng trắng giữa giá trị bên trong ngoặc nhọn và nó
      // có 2 khoảng trắng giữa giá trị bên trong ngoặc nhọn và ngoặc nhọn => không tốt
      <Foo bar={ baz } />

      // chuẩn 
      <Foo bar={baz} />

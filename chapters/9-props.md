Props
1.Luôn luôn sử dụng camelCase khi đặt tên cho prop ( camelCase : viết hoa chữa cái đầu của các từ , từ đầu tiên của cụm thì viết thường)

    // không chuẩn camelCase
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // chuẩn
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
  
2.Bỏ giá trị của prop khi nó thực sự rõ ràng 

    // hidden khởi tạo mặc định bằng true k cần khai báo value 
    <Foo
      hidden={true}
    />

    // chuẩn 
    <Foo
      hidden
    />

    // chuẩn 
    <Foo hidden />
    
 3. Luôn luôn sử dụng thuộc tính alt trong thẻ <img>  . Nếu link link ảnh = NULL , alt  có thể là một chuỗi rỗng hoặc thẻ <img> phải có thuộc tính role="presentation"
    // thiếu alt
    <img src="hello.jpg" />

    // chuẩn
    <img src="hello.jpg" alt="Me waving hello" />

    // chuẩn
    <img src="hello.jpg" alt="" />

    // chuẩn
    <img src="hello.jpg" role="presentation" />
 4. Không dùng các từ "image", "photo", "picture" trong <img> alt props 
    // dùng Picture trong alt 
    <img src="hello.jpg" alt="Picture of me waving hello" />

    // chuẩn 
    <img src="hello.jpg" alt="Me waving hello" />
    
 5. Không sử dụng accessKey trong elements
      // sử dụng accessKey => không tốt
      <div accessKey="h" />

      // chuẩn 
      <div />
      
 6. Tránh sử dụng chỉ số của mảng như key của prop, nên sử dụng ID duy nhất
    // sử dụng index của mảng todos làm key => không tốt
    {todos.map((todo, index) =>
      <Todo
        {...todo}
        key={index}
      />
    )}

    // mỗi todo có một id riêng => chuẩn 
    {todos.map(todo => (
      <Todo
        {...todo}
        key={todo.id}
      />
    ))}
    
    

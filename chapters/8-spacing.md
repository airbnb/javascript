 ## Khoảng trắng
 - Luôn luôn có một khoảng trắng duy nhất trong thẻ tự đóng. eslint: [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

    ```jsx
    // tệ
    <Foo/>

    // rất tệ
    <Foo                 />

    // tệ
    <Foo
     />

    // tốt
    <Foo />
    ```
    
     - Không cho phép dùng khoảng trắng giữa giá trị bên trong ngoặc nhọn và nó
. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // tệ
    <Foo bar={ baz } />

    // tốt 
    <Foo bar={baz} />
    ```

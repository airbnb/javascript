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

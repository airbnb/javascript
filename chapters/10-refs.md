## Refs

  - Luôn sử dụng callback với ref. eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

    ```jsx
    // tệ
    <Foo
      ref="myRef"
    />

    // tốt
    <Foo
      ref={(ref) => { this.myRef = ref; }}
    />
    ```



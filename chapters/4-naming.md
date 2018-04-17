## Naming

  - **Extensions**: Sử dụng phần đuôi `.jsx` cho React components.
  - **Filename**: Sử dụng chuẩn PascalCase cho tên file. Ví dụ:  `ReservationCard.jsx`.
  - **Reference Naming**: Sử dụng PascalCase cho React components và dùng camelCase cho instances của chúng. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // bad
    import reservationCard from './ReservationCard';

    // good
    import ReservationCard from './ReservationCard';

    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

  - **Đặt tên Component **: Sử dụng tên file làm tên component. Ví dụ: `ReservationCard.jsx` nên có tên tham khảo của `ReservationCard`. Tuy nhiên, với components gốc của một thu mục sử dụng `index.jsx` thành tên file và sử dụng tên thu mục làm tên component:

    ```jsx
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```
  - **Đặt tên Component bậc cao **: Sử dụng một hỗn hợp tên của component bậc cao và tên của component đuợc truyền nhu `displayName` trên component đuợc tạo ra. Ví dụ component bậc cao `withFoo()`, khi truyền một component `Bar` nên tạo ra một component với `displayName` của `withFoo(Bar)`.

    > Tại sao? `displayName` của component có thể đuợc sử dụng bởi những công cụ phát triển hoặc trong các thông báo lỗi, và có một giá trị mà thể hiện rõ mối quan hệ này sẽ giúp mọi nguời hiểu rõ chuyện gì đang xảy ra.

    ```jsx
    // bad
    export default function withFoo(WrappedComponent) {
      return function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
      }
    }

    // good
    export default function withFoo(WrappedComponent) {
      function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
      }

      const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

      WithFoo.displayName = `withFoo(${wrappedComponentName})`;
      return WithFoo;
    }
    ```

  - **Đặt tên Props**: Tránh xa việc sử dụng tên prop DOM component cho mục đích khác.

    > Tại sao? Mọi nguời mong đợi props nhu `style` và `className` có ý nghia là một điều cụ thể. Thay đổi API này cho một tập con của ứng dụng 
làm cho code khó đọc và khó bảo trì hon, và có thể gây ra lỗi.

    ```jsx
    // bad
    <MyComponent style="fancy" />

    // bad
    <MyComponent className="fancy" />

    // good
    <MyComponent variant="fancy" />
    ```



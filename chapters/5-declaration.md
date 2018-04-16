## Khai báo

  - Không nên sử dụng `displayName` để đặt tên cho các component. Thay vào đó, đặt tên cho các components bằng tham chiếu.

    ```jsx
    // tệ
    export default React.createClass({
      displayName: 'ReservationCard',
      // stuff goes here
    });

    // tốt
    export default class ReservationCard extends React.Component {
    }
    ```
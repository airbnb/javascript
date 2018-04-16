<<<<<<< HEAD
## Khai báo

  - Không nên sử dụng `displayName` để đặt tên cho các component. Thay vào đó, đặt tên cho các components bằng tham chiếu.

    ```jsx
    // tệ
=======
Khai báo

    Không sử dụng displayName để đặt tên cho các components.Thay vào đó, đặt tên cho component bằng tham chiếu.
    // Không nên
>>>>>>> 15a87cb8698d1999d84961332a1b49720b848e1f
    export default React.createClass({
      displayName: 'ReservationCard',
      // stuff goes here
    });

<<<<<<< HEAD
    // tốt
    export default class ReservationCard extends React.Component {
    }
    ```
=======
    // Nên
    export default class ReservationCard extends React.Component {
    }

>>>>>>> 15a87cb8698d1999d84961332a1b49720b848e1f

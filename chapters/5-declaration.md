Khai báo

    Không sử dụng displayName để đặt tên cho các components.Thay vào đó, đặt tên cho component bằng tham chiếu.
    // Không nên
    export default React.createClass({
      displayName: 'ReservationCard',
      // stuff goes here
    });

    // Nên
    export default class ReservationCard extends React.Component {
    }


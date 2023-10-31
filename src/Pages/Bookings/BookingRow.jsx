/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const BookingRow = ({ booking }) => {
  const { orderDate, service, price, img } = booking;

  return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
            <div className="avatar">
              <div className="rounded w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              
            </div>
        </td>
        <div className="font-bold">{service}</div>
        <td>{orderDate}</td>
        <td>${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
  );
};

export default BookingRow;

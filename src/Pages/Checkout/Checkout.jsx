import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;
  const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const date = form.date.value;
        const email = user.email;
        const orderInfo = {
            customerName: name,
            email,
            orderDate: date,
            service: _id,
            price
        }
        console.log(orderInfo);

    }

  return (
    <div>
      <h2 className="text-center text-3xl font-extrabold">Book Service: {title}</h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" defaultValue={user?.displayName} placeholder="Name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date"  className="input input-bordered" required />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input type="text" defaultValue={'$ '+price} className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Add to Cart" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;

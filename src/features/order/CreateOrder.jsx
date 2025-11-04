import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import InputComponent from '../../utils/InputComponent';
import Button from '../../utils/Button';
import { useSelector } from 'react-redux';
import { clearCart, getCart } from '../cart/CartSlice';
import EmptyCart from '../cart/EmptyCart';
import { store } from '../../store';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export default function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const formErrors = useActionData();
  const userName = useSelector((state) => state.user.userName);

  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* <form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <label className="sm:basis-40">First Name</label>

          <div className="grow">
            <InputComponent
              type="text"
              name="customer"
              placeholder="name"
              defaultValue={userName}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <InputComponent type="tel" name="phone" placeholder="tel No" />
            {formErrors?.phone && (
              <p className="mt-1 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <InputComponent type="text" placeholder="address" name="address" />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-5 w-5 cursor-pointer rounded-md border border-gray-400 accent-yellow-500"
            // value={withPriority}

            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Button type="primary" isDisabled={isSubmitting}>
            {isSubmitting ? 'Placing the order' : 'order now'}
          </Button>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  console.log(request, 'request');

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(formData, 'formdata');
  console.log(data, 'Data');
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you';
  //if everything is okay create thee order and redirect
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

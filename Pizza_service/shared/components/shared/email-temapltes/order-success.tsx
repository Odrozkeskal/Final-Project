import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import React from 'react';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Thanks for the purchase! </h1>

    <p>Your order #{orderId} has been paid for. List of products:</p>

    <hr />

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price} ILS x {item.quantity} units. ={' '}
          {item.productItem.price * item.quantity} ILS
        </li>
      ))}
    </ul>
  </div>
);

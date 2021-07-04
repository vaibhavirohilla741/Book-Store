import React from "react";
import "./FooterTable.css";

const FooterTable = () => {
  return (
    <div className="FooterTable">
      <table >
        <tbody>
        <tr>
          <th>Business Hours</th>
          <th>Footer Menu</th>
          <th>Extra Menu</th>
        </tr>
        <tr>
          <td>Mon - Fri: 8AM - 10PM</td>
          <td>Home</td>
          <td>About Us</td>
        </tr>
        <tr>
          <td>Sat: 9AM-8PM</td>
          <td>Shop</td>
          <td>Our Office</td>
        </tr>
        <tr>
          <td>Sun: Closed</td>
          <td>Blog</td>
          <td>Delivery</td>
        </tr>
        <tr>
          <td></td>
          <td>Contact</td>
          <td>Gurantee</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FooterTable;

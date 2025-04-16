
import { Mail, MapPin, PhoneCall } from "lucide-react";


const Footer = () => {
  return (
    

    <footer className="bg-gray-100 text-gray-800">
      {/* Feature Highlights */}
      <div className="grid md:grid-cols-5 gap-6 px-6 py-10 border-b border-gray-300">
        <div>
          <h4 className="font-bold">Best prices & offers</h4>
          <p>Orders $50 or more</p>
        </div>
        <div>
          <h4 className="font-bold">Free delivery</h4>
          <p>24/7 amazing services</p>
        </div>
        <div>
          <h4 className="font-bold">Great daily deal</h4>
          <p>When you sign up</p>
        </div>
        <div>
          <h4 className="font-bold">Wide assortment</h4>
          <p>Mega Discounts</p>
        </div>
        <div>
          <h4 className="font-bold">Easy returns</h4>
          <p>Within 30 days</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid md:grid-cols-6 gap-8 px-6 py-12 text-sm">
        {/* Logo and Contact */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-2">Nest</h2>
          <p className="mb-4">Awesome grocery store website template</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              Address: 5171 W Campbell Ave, Kent, Utah 53127, United States
            </li>
            <li className="flex items-start gap-2">
              <PhoneCall className="w-4 h-4 mt-1" />
              Call Us: (+91) - 540-025-124553
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1" />
              Email: sale@Nest.com
            </li>
            <li>Hours: 10:00 - 18:00, Mon - Sat</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Support Center</li>
            <li>Careers</li>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare products</li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="font-semibold mb-3">Corporate</h3>
          <ul className="space-y-2">
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Farm Business</li>
            <li>Farm Careers</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions</li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h3 className="font-semibold mb-3">Popular</h3>
          <ul className="space-y-2">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>
      </div>

      {/* Install App Section */}
      <div className="px-6 py-6 border-t border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">Install App</h3>
            <p>From App Store or Google Play</p>
          </div>

          <div className="text-center md:text-right">
            <p className="font-semibold">Secured Payment Gateways</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-4 border-t border-gray-300 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© 2024, Nest - HTML Ecommerce Template. All rights reserved</p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="font-semibold">Hotline:</span> 1900 - 6666 (8:00 - 22:00) | 1900 - 8888 (24/7 Support Center)
        </div>
      </div>
    </footer>

  );
};

export default Footer;

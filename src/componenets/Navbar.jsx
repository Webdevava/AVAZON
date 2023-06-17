import logo from "../assets/avazon.png";
import point from "../assets/location.png";
import SubNav from "./SubNav";
const Navbar = () => {
  let name = "Ankur";
  let location = "Majalgaon";
  let pincode = 431131;

  return (
    <>
      <nav>
        <div id="logo_container">
          <img id="logo" src={logo} />
          <p id="logo_txt">.in</p>
        </div>

        <div id="location_container">
          <p id="deliver">Deliver to {name}</p>

          <div id="loc_txt">
            <img id="point" src={point} />
            <p id="location">
              {location}&nbsp;{pincode}
            </p>
          </div>
        </div>

        <div id="input_area">
          <section>
            <select id="categoryDropdown">
              <option value="all">All categories</option>
              <option value="devices">Devices</option>
              <option value="fashion">Fashion</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="appliance">Appliance</option>
              <option value="apps">Apps &amp; Games</option>
              <option value="baby">Baby</option>
              <option value="beauty">Beauty</option>
              <option value="car">Car &amp; Motorcycle</option>
            </select>
          </section>
          <input type="text" placeholder="Search Avazon.in" />
          <button>Q</button>
        </div>
        <div id="lang">
          <section id="lang-Dropdown">
            <select>
              <option value="En">EN</option>
              <option value="Mr">MR</option>
              <option value="Hi">HI</option>
            </select>
          </section>
        </div>
      </nav>
      <SubNav />
    </>
  );
};

export default Navbar;

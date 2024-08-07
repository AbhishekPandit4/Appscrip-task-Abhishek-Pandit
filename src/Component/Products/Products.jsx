import React, { useEffect, useState } from "react";
import "./Product.css";
import left from "../Products/Imegs/arrow-left.png";
import down from "../Products/Imegs/arrow-down.png";
// import heart from "../Products/Images/heart.png";
import heart from "../Products/Imegs/heart.png";
import jeans from "../Products/Imegs/jeans.jpg";

const Products = () => {
  const [data, setData] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [dropdownsVisible, setDropdownsVisible] = useState({
    idealfor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitablefor: false,
    materials: false,
    patterns: false,
  });
  //   const [selectedIdealFor, setSelectedIdealFor] = useState([]);
  const [filters, setFilters] = useState({
    idealfor: {
      Women: false,
      Men: false,
      Kids: false,
    },
    occasion: {
      Formal: false,
      Party: false,
      Casual: false,
    },
    fabric: {
      Gold: false,
      Plastic: false,
      Linen: false,
    },
    segment: {
      Women: false,
      Men: false,
      Kids: false,
    },
    suitablefor: {
      Summer: false,
      Winter: false,
      Rainy: false,
      Allseason: false,
    },
    materials: {
      Wool: false,
      Polyester: false,
      Cotton: false,
    },
    patterns: {
      Solid: false,
      Striped: false,
      Printed: false,
    },
  });

  const [serch, setSerch] = useState("");
  const getData = async () => {
    try {
      const res = await fetch(
        "https://65f6dc7ffec2708927c9d9eb.mockapi.io/crud/task-2"
      );
      const item = await res.json();
      console.log("items-->", item);
      setData(item);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (key) => {
    setDropdownsVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const handleHideShowClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleCheckboxChange = (event) => {
    let { name, value, checked } = event.target;
    console.log("value", value, checked);
    // value = value.toLowerCase();

    setFilters((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        [value]: checked,
      },
    }));
  };

  const filteredItems = data.filter(
    (item) =>
      (filters.idealfor[item.idealfor] ||
        Object.values(filters.idealfor).every((val) => !val)) &&
      (filters.occasion[item.occasion] ||
        Object.values(filters.occasion).every((val) => !val)) &&
      (filters.fabric[item.fabric] ||
        Object.values(filters.fabric).every((val) => !val)) &&
      (filters.segment[item.segment] ||
        Object.values(filters.segment).every((val) => !val)) &&
      (filters.suitablefor[item.suitablefor] ||
        Object.values(filters.suitablefor).every((val) => !val)) &&
      (filters.patterns[item.patterns] ||
        Object.values(filters.patterns).every((val) => !val))
  );

  return (
    <>
      {/* navbar */}
      <nav className="nav-container">
        <div className="nav-main-left">
          <div className="nav-left-text">
            <a>3425 ITEMS</a>
            <img src={left} className="nav-left-img" />
            &nbsp;
            <a
              className="nav-hide-btn"
              onClick={handleHideShowClick}
              style={{ cursor: "pointer" }}
            >
              {sidebarVisible ? "HIDE FILTER" : "SHOW FILTER"}
            </a>
          </div>
          <div className="nav-hide-show-btn"></div>
          <select className="nav-dropdown">
            <option value="option1">Recommended</option>
            <option value="option2">Newest first</option>
            <option value="option3">Popular</option>
            <option value="option4">Price: high to low</option>
            <option value="option5">Price: low to high</option>
          </select>
        </div>
      </nav>
      {/* sidebar */}
      <div className="product-grid">
        {sidebarVisible && (
          <div className="filters">
            <label>
              <input type="checkbox" />
              CUSTOMIZABLE
            </label>
            <hr />
            <nav>
              <ul style={{ listStyleType: "none" }}>
                <div
                  className="nav-dropdown"
                  onClick={() => handleClick("idealfor")}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span>IDEAL FOR</span>
                  </div>
                  &nbsp;
                  <img src={down} alt="dropdown" style={{ height: 20 }} />
                </div>
                {dropdownsVisible.idealfor && (
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      marginTop: 10,
                      backgroundColor: "#fff",
                    }}
                  >
                    {["Men", "Women", "Kids"].map((idealFor) => (
                      <label key={idealFor}>
                        <input
                          name="idealfor"
                          type="checkbox"
                          value={idealFor}
                          onChange={handleCheckboxChange}
                        />{" "}
                        {idealFor.charAt(0).toUpperCase() + idealFor.slice(1)}
                      </label>
                    ))}
                  </ul>
                )}

                <hr />
                <li>
                  <div
                    className="nav-dropdown"
                    onClick={() => handleClick("occasion")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span>Occasion</span>
                    </div>
                    &nbsp;
                    <img src={down} alt="dropdown" style={{ height: 20 }} />
                  </div>
                  {dropdownsVisible.occasion && (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginTop: 10,
                        backgroundColor: "#fff",
                      }}
                    >
                      {["Formal", "Party", "Casual"].map((occasion) => (
                        <label key={occasion}>
                          <input
                            name="occasion"
                            type="checkbox"
                            value={occasion}
                            onChange={handleCheckboxChange}
                          />{" "}
                          {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                        </label>
                      ))}
                    </ul>
                  )}
                </li>
                <hr />
                <li>
                  <div
                    className="nav-dropdown"
                    onClick={() => handleClick("fabric")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span>Fabric</span>
                    </div>
                    &nbsp;
                    <img src={down} alt="dropdown" style={{ height: 20 }} />
                  </div>
                  {dropdownsVisible.fabric && (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginTop: 10,
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        {["Gold", "Plastic", "Linen"].map((fabric) => (
                          <label key={fabric}>
                            <input
                              name="fabric"
                              type="checkbox"
                              value={fabric}
                              onChange={handleCheckboxChange}
                            />{" "}
                            {fabric.charAt(0).toUpperCase() + fabric.slice(1)}
                          </label>
                        ))}
                      </li>
                    </ul>
                  )}
                </li>
                <hr />
                <li>
                  <div
                    className="nav-dropdown"
                    onClick={() => handleClick("segment")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span>Segment</span>
                    </div>
                    &nbsp;
                    <img src={down} alt="dropdown" style={{ height: 20 }} />
                  </div>
                  {dropdownsVisible.segment && (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginTop: 10,
                        backgroundColor: "#fff",
                      }}
                    >
                      {["Men", "Women", "Kids"].map((segment) => (
                        <label key={segment}>
                          <input
                            type="checkbox"
                            name="segment"
                            value={segment}
                            onChange={handleCheckboxChange}
                          />{" "}
                          {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </label>
                      ))}
                    </ul>
                  )}
                </li>
                <hr />
                <li>
                  <div
                    className="nav-dropdown"
                    onClick={() => handleClick("suitable")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span>Suitable for</span>
                    </div>
                    &nbsp;
                    <img src={down} alt="dropdown" style={{ height: 20 }} />
                  </div>
                  {dropdownsVisible.suitable && (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginTop: 10,
                        backgroundColor: "#fff",
                      }}
                    >
                      {["Summer", "Winter", "Rainy", "Allseason"].map(
                        (suitablefor) => (
                          <label key={suitablefor}>
                            <input
                              type="checkbox"
                              name="suitablefor"
                              value={suitablefor}
                              onChange={handleCheckboxChange}
                            />{" "}
                            {suitablefor.charAt(0).toUpperCase() +
                              suitablefor.slice(1)}
                          </label>
                        )
                      )}
                    </ul>
                  )}
                </li>
                <hr />
                <li>
                  <div
                    className="nav-dropdown"
                    onClick={() => handleClick("materials")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span>Raw Materials</span>
                    </div>
                    &nbsp;
                    <img src={down} alt="dropdown" style={{ height: 20 }} />
                  </div>
                  {dropdownsVisible.materials && (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginTop: 10,
                        backgroundColor: "#fff",
                      }}
                    >
                      {["Wool", "Polyester", "Cotton"].map((materials) => (
                        <label key={materials}>
                          <input
                            type="checkbox"
                            name="materials"
                            value={materials}
                            onChange={handleCheckboxChange}
                          />{" "}
                          {materials.charAt(0).toUpperCase() +
                            materials.slice(1)}
                        </label>
                      ))}
                    </ul>
                  )}
                </li>
                <hr />
                <li>
                  <div
                    className="nav-dropdown"
                    onClick={() => handleClick("patterns")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span>Pattern</span>
                    </div>
                    &nbsp;
                    <img src={down} alt="dropdown" style={{ height: 20 }} />
                  </div>
                  {dropdownsVisible.patterns && (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginTop: 10,
                        backgroundColor: "#fff",
                      }}
                    >
                      {["Printed", "Striped", "Solid"].map((patterns) => (
                        <label key={patterns}>
                          <input
                            type="checkbox"
                            name="patterns"
                            value={patterns}
                            onChange={handleCheckboxChange}
                          />{" "}
                          {patterns.charAt(0).toUpperCase() + patterns.slice(1)}
                        </label>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        )}
        {/* product list */}
        <div className="products">
          {(filteredItems.length ? filteredItems : data).map((item) => (
            <div key={item.id} className="product">
              <img src={jeans} alt="Product" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>account to see pricing</span>
                <img
                  src={heart}
                  style={{ height: 20, width: 20 }}
                  alt="Heart"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

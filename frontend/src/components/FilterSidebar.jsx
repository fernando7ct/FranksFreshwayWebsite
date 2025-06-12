const FilterSidebar = () => (
  <aside className="filters">
    <h3>Filter</h3>
    <label>
      Category
      <select>
        <option>All Categories</option>
      </select>
    </label>
    <label>
      Dietary
      <select>
        <option>All Dietary</option>
      </select>
    </label>
    <label>
      Brand
      <select>
        <option>All Brands</option>
      </select>
    </label>
    <label>
      Price
      <select>
        <option>All Prices</option>
      </select>
    </label>
    <button className="filter-btn">Apply Filters</button>
  </aside>
);

export default FilterSidebar;


const PageSize = ({
  totalItems,
  itemsPerPage,
  onPageSizeChange,
}) => {
  const pageSizes = [5, 10, 15];

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    onPageSizeChange(newSize);
  };
  return (
    <div className="flex items-center gap-3 text-[#8B909A] text-sm font-normal">
      <span className="">Showing</span>
      <select
        value={itemsPerPage}
        onChange={handlePageSizeChange}
        style={{margin:'0 0.5rem', color:'#1875F0', background:'none', fontSize:'16px'}}>
          
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span className="">out of {totalItems} payments</span>
    </div>
  );
};

export default PageSize;
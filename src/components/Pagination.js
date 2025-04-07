export default Pagination = ({
  noOfPages,
  goToPrevPage,
  currentPage,
  goToNextPage,
  handlePageChange,
}) => {
  return (
    <div className="page-container">
      <button
        disabled={currentPage === 0}
        onClick={goToPrevPage}
        className="page-number"
      >
        ◀️
      </button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button
          onClick={() => handlePageChange(n)}
          className={`page-number ${n === currentPage ? "active" : ""}`}
          key={n}
        >
          {n}
        </button>
      ))}
      <button
        disabled={currentPage === noOfPages - 1}
        onClick={goToNextPage}
        className="page-number"
      >
        ▶️
      </button>
    </div>
  );
};

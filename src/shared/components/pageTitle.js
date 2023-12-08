const PageTitle = ({ title, className = 'custom_page_title' }) => {
  return (
    <div className="card_header px-5">
      <label className={`page_title ${className}`}>{title}</label>
    </div>
  );
};

export default PageTitle;

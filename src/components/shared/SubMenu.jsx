const SubMenu = () => {
  return (
    <div className="submenu-outer rounded-r-lg">
      <form className="search-box flex justify-center items-center">
        <img src="/images/search.svg" className="mr-2" />
        <input className="mr-2" type="search" placeholder="Search" />
        <img src="/images/search-short-cut.svg" />
      </form>
      <div>
        <section role="menus"></section>
      </div>
    </div>
  );
};

export default SubMenu;

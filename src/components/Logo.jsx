import logo from "/library.png";

const Logo = () => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <img src={logo} alt="Logo" width={30} height={36} />
      <h1>Library</h1>
    </div>
  );
};

export default Logo;

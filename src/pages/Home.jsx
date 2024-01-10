const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="../code-sync.png"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            name=""
            className="inputBox"
            placeholder="ROOM ID"
          />
          <input
            type="text"
            name=""
            className="inputBox"
            placeholder="USERNAME"
          />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If You dont have an invite &nbsp;
            <a href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built By &nbsp;
          <a href="https://www.deepsoni5.me" target="_blank" rel="noreferrer">
            Deep Soni
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;

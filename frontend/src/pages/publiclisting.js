const Publiclisting = () => (
  <div>
    <div style={{ padding: 50 }}>
      <div className="text-center" style={{ height: 450 }}>
        <div style={{ backgroundImage: 'url("/assets/img/bg.jpeg")', height: 350 }}>
          <div className="page-wrapper1 bg-red1 p-t-1801 p-b-1001 font-robo">
            <div className="wrapper1 wrapper--w9601">
              <div className="card1 card-21">
                <div className="card-heading1" />
                <div className="card-body1">
                  <h2 className="title1">Log In</h2>
                  <form action="log_in.php" method="post" encType="multipart/form-data">
                    <div className="input-group1">
                      <input className="input--style-2" type="text" placeholder="Enter your Username" id="username" name="username" />
                    </div>
                    <div className="input-group1">
                      <input className="input--style-21" type="password" placeholder="Enter Password" id="password" name="password" />
                    </div>
                    <div className="p-t-30">
                      <button className="btn1 btn--radius1 btn--green1" type="submit" id="submit" name="submit">Log in</button>
                    </div>
                    Not have an account Yet <a href="/signup">Sign Up</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Publiclisting;

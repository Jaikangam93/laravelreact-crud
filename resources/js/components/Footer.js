import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
      return(
        <div>
          <div className="container">
              <footer className="blog-footer">
                <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                <p>
                  <a href="#">Back to top</a>
                </p>
              </footer>
            </div>
        </div>
      );
    }

}

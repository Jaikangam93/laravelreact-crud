import React, { Component } from 'react';

export default class Home extends Component {
    render(){
      return(
        <div>
        <section className="jumbotron text-center">
         <div className="container">
           <h1 className="jumbotron-heading">Welcome to Laravel & React Crud </h1>
           <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
           <p>
             <a href="#" className="btn btn-primary my-2 pl-2">Main call to action</a>
             <a href="#" className="btn btn-secondary my-2">Secondary action</a>
           </p>
         </div>
       </section>
        </div>
      );
    }

}

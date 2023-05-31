import React from "react";
import "./testimonial.css";
import IMG from "../../assets/changerr.jpg";
import AV1 from "../../assets/avatr1.jpg";
import AV2 from "../../assets/avatr2.jpg";
import AV3 from "../../assets/avat3.png";
import AV4 from "../../assets/avtr4.jpg";
import AV5 from "../../assets/avtr5.jpg";


const Testimonial = () => {
  return(
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AV1} alt="avatar-one"/>
            <h5 className="client__name">Ernerst Achiever</h5>
            <small classNam='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto unde reiciendis, aperiam eos voluptas voluptatem sit a eveniet voluptates!
              Quisquam pariatur quam error aspernatur!
              Neque vel cupiditate reprehenderit libero autem veniam!
              Ratione aliquid magni mollitia doloribus nostrum, laudantium quis adipisci illum dolore suscipit repellendus!
              Cumque autem nesciunt illo earum! Officia dicta explicabo voluptatem? Ducimus recusandae ipsam quas voluptates, perferendis totam distinctio odio, impedit voluptatibus adipisci a mollitia
              Eveniet incidunt voluptate provident numquam, dicta id dolorem doloribus tenetur necessitatibus blanditiis repudiandae at autem. Assumenda modi eveniet atque omnis ipsum dolore ad autem mollitia vitae, animi, quaerat unde sapiente debitis nam inventore.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AV2} alt="avatar-one"/>
            <h5 className="client__name">Ernerst Achiever</h5>
            <small classNam='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto unde reiciendis, aperiam eos voluptas voluptatem sit a eveniet voluptates!
              Quisquam pariatur quam error aspernatur!
              Neque vel cupiditate reprehenderit libero autem veniam!
              Ratione aliquid magni mollitia doloribus nostrum, laudantium quis adipisci illum dolore suscipit repellendus!
              Cumque autem nesciunt illo earum! Officia dicta explicabo voluptatem? Ducimus recusandae ipsam quas voluptates, perferendis totam distinctio odio, impedit voluptatibus adipisci a mollitia
              Eveniet incidunt voluptate provident numquam, dicta id dolorem doloribus tenetur necessitatibus blanditiis repudiandae at autem. Assumenda modi eveniet atque omnis ipsum dolore ad autem mollitia vitae, animi, quaerat unde sapiente debitis nam inventore.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AV3} alt="avatar-one"/>
            <h5 className="client__name">Ernerst Achiever</h5>
            <small classNam='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto unde reiciendis, aperiam eos voluptas voluptatem sit a eveniet voluptates!
              Quisquam pariatur quam error aspernatur!
              Neque vel cupiditate reprehenderit libero autem veniam!
              Ratione aliquid magni mollitia doloribus nostrum, laudantium quis adipisci illum dolore suscipit repellendus!
              Cumque autem nesciunt illo earum! Officia dicta explicabo voluptatem? Ducimus recusandae ipsam quas voluptates, perferendis totam distinctio odio, impedit voluptatibus adipisci a mollitia
              Eveniet incidunt voluptate provident numquam, dicta id dolorem doloribus tenetur necessitatibus blanditiis repudiandae at autem. Assumenda modi eveniet atque omnis ipsum dolore ad autem mollitia vitae, animi, quaerat unde sapiente debitis nam inventore.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AV4} alt="avatar-one"/>
            <h5 className="client__name">Ernerst Achiever</h5>
            <small classNam='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto unde reiciendis, aperiam eos voluptas voluptatem sit a eveniet voluptates!
              Quisquam pariatur quam error aspernatur!
              Neque vel cupiditate reprehenderit libero autem veniam!
              Ratione aliquid magni mollitia doloribus nostrum, laudantium quis adipisci illum dolore suscipit repellendus!
              Cumque autem nesciunt illo earum! Officia dicta explicabo voluptatem? Ducimus recusandae ipsam quas voluptates, perferendis totam distinctio odio, impedit voluptatibus adipisci a mollitia
              Eveniet incidunt voluptate provident numquam, dicta id dolorem doloribus tenetur necessitatibus blanditiis repudiandae at autem. Assumenda modi eveniet atque omnis ipsum dolore ad autem mollitia vitae, animi, quaerat unde sapiente debitis nam inventore.
            </small>
          </div>
        </article>
        
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AV5} alt="avatar-one"/>
            <h5 className="client__name">Ernerst Achiever</h5>
            <small classNam='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto unde reiciendis, aperiam eos voluptas voluptatem sit a eveniet voluptates!
              Quisquam pariatur quam error aspernatur!
              Neque vel cupiditate reprehenderit libero autem veniam!
              Ratione aliquid magni mollitia doloribus nostrum, laudantium quis adipisci illum dolore suscipit repellendus!
              Cumque autem nesciunt illo earum! Officia dicta explicabo voluptatem? Ducimus recusandae ipsam quas voluptates, perferendis totam distinctio odio, impedit voluptatibus adipisci a mollitia
              Eveniet incidunt voluptate provident numquam, dicta id dolorem doloribus tenetur necessitatibus blanditiis repudiandae at autem. Assumenda modi eveniet atque omnis ipsum dolore ad autem mollitia vitae, animi, quaerat unde sapiente debitis nam inventore.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Testimonial;

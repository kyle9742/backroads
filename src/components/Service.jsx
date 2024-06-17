import { services } from "../data";
import Title from "./Title";

const Service = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="Services" />

      <section className="section-center services-center">
        {services.map((service) => {
          return (
            
              <article key={service.id} className="service">
                <span className="service-icon">
                  <i className={service.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-text">{service.text}</p>
                </div>
              </article>
            
          );
        })}
      </section>

      
    </section>
  );
};

export default Service;

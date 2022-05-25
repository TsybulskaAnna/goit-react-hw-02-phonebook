import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.protoTypes = { title: PropTypes.string };

export default Section;
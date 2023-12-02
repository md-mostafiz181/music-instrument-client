import React from "react";
import Container from "../../../components/Container/Container";

const InstructorCard = ({ singleIns }) => {
  const { image, name, email } = singleIns;
  return (
    <div>
      <Container>
        <div className="card  w-full bg  shadow-xl">
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold uppercase font-popins">
              {name}
            </h2>
            <p className="font-semibold ">{email}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InstructorCard;

import AwardsData from "../../Data/AwardsData"
import Title from "../Title/Title"
import CardBenefits from "../CardBenefits/CardBenefits"
import "./Awards.css"
import { useState } from "react"

const Awards = () => {
  const [index, setIndex] = useState(0);

  const getVisibleCount = () =>
    typeof window !== "undefined" && window.innerWidth < 992 ? 1 : 3;

  const next = () => {
    setIndex((prev) =>
      prev + visible >= AwardsData.length ? 0 : prev + 1
    );
  };

const prev = () => {
  setIndex((prev) =>
    prev === 0 ? AwardsData.length - visible : prev - 1
  );
};

  const visible = getVisibleCount();
    return (
        <section className="awards whiteSpace conatiner">
            <Title intro= "Our Achievements"
                    title= "Our Awards and Recognitions"
                    desc= "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
            />
            <div className="allCards" >
                <div className="top" style={{ "--idx": index, "--visible": visible }}>
                    {AwardsData.map((card, index) => {
                        return(
                            <CardBenefits key={index}
                                            icon={card.icon}
                                            title={card.title}
                                            desc={card.desc}
                            />
                        )
                    })}
                </div>
                <div className="bottom">
                    <p>8 Word Awards</p>
                    <div className="arrows">
                        <button className="left" onClick={prev}>
                            <img src="assets/img/arrow-left.png" alt=""  />
                        </button>
                        <button className="right" onClick={next}>
                            <img src="assets/img/arrow-right.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards

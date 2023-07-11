import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-Item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check It Out"
                heading="Feature Item"
            >
            </SectionTitle>
            <div className="md:flex justify-center  bg-slate-500 bg-opacity-40 items-center py-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Jul 11, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, tempora, neque necessitatibus exercitationem eligendi esse vel eius earum dolorem adipisci ab deleniti amet repellendus? Nam,  </p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-6">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
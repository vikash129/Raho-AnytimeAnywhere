// import Featured from "../../components/featured/Featured";
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
// import MailList from "../../components/mailList/MailList";
// import PropertyList from "../../components/propertyList/PropertyList";
import Navbar from "../../Components/navbar/Navbar";
// import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        {/* <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/> */}
        {/* <MailList/> */}
      </div>
        {/* <Footer/> */}
    </div>
  );
};

export default Home;

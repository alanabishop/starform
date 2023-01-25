//Styles
import "./sass/App.scss";

//Assets
import ttiImage from "./assets/tti.jpg";

//Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedText from "./components/FeaturedText";
import TitleTextImage from "./components/TitleTextImage";
import FullWidthSlider from "./components/FullWidthSlider";
import Marquee from "./components/Marquee";
import { CardSlider } from "./components/CardSlider";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

//Utils
import { Grid } from "./utils/Grid";
import CookieBanner from "./components/CookieBanner";

function App() {
	return (
		<div className="App">
			<Header />
			<Grid/>
			<Hero
				title={"Welcome to StarForm"}
				subtitle={"Helping nations achieve "}
				featuredText={"Lower emissions with Star-Based Solar Technology"}
			/>
			<FeaturedText
				subtitle={"Our Mission"}
				text={
					"Climate change and the pressures on global energy resources are urgent problems. The UK has set out an ambitious national clean energy policy to fully decarbonise the economy by 2050."
				}
				buttonText={"Business Plan"}
			/>
			<TitleTextImage
				subtitle={"The Global Challenge"}
				title={
					"Climate change and the pressures on global energy resources are urgent problems."
				}
				text={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vitae elementum interdum scelerisque quisque donec nulla. Velit diam quam nullam elit hac sit. Nunc, lacus, facilisis mattis amet mauris volutpat dui tellus nam. Neque, rhoncus placerat vitae arcu habitant. Dignissim quam ipsum dolor egestas non orci. At enim ut elementum."
				}
				buttonText={"About Us"}
				imageSrc={ttiImage}
			/>
			<FullWidthSlider />
			<Marquee subtitle={"Partnerships"} />
			<CardSlider title={"Media"} />
			<Cta
				subtitle={"Get In Touch"}
				title={
					"Help us get one step closer to Net Zero Star-Based Solar Power."
				}
				buttonText={"Contact us"}
			/>
			<CookieBanner />
			<Footer />
		</div>
	);
}

export default App;

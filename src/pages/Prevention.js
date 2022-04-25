import React from "react";
import Header from "../components/Header";
import "../css/Header.css";
import "../css/Footer.css";
import "../css/Prevention.css";
import Bamboo from "../video/bamboo-toothbrush.jpg";
import Straws from "../video/reusable-straw.jpg";
import Jar from "../video/glass jar.jpg";
import Bottles from "../video/steele-bottles.jpg";
import Footer from "../components/Footer";
import ThreeR from "../video/3rs.jpg";

const Prevention = () => {
	return (
		<div className="Prevention">
			<Header />
			<section id="Prevention__container">
				<h1 className="Prevention__title">Preventions & Alternatives</h1>
				<div className="Prevention__image">
					<img src={ThreeR} loading="lazy" alt="3-R's" />
				</div>
				<div className="Prevention__content">
					<div id="Prevention__reduce">
						<h3>Reduce</h3>
						<div>
							Reduce is all about using lesser resources in the first place.
							This is one of the most effective yet most difficult method.
							<br />
							<b>Things you can do: </b>
							<ul>
								<li>Avoid using plastic bags.</li>
								<li>When shopping look for things that lasts long.</li>
								<li>Choose products with less packaging.</li>
							</ul>
						</div>
					</div>
					<div id="Prevention__reuse">
						<h3>Reuse</h3>
						<div>
							Before you recycle or dispose of anything, consider whether it has
							life left in it. For instance, a jam jar can store leftovers.
							<br />
							<b>Things you can do: </b>
							<ul>
								<li>
									Refill a water bottle with water from home instead of buying a
									new one.
								</li>
								<li>
									Update your computer rather than throwing it out and getting a
									replacement
								</li>
								<li>
									Ditch plastic bags and choose reusable,
									environmentally-friendly bags instead.
								</li>
								<li>Use empty plastic jars as container.</li>
							</ul>
						</div>
					</div>
					<div id="Prevention__recycle">
						<h3>Recycle</h3>
						<div>
							Recycling is all about making sure you separate items that can be
							recycled, meaning they can be used for a new purpose.
							<br />
							<b> Materials that can be recycled include: </b>
							<ul>
								<li> Glass </li>
								<li> Plastic bottles </li>
								<li> Aluminium </li>
								<li> Lead batteries </li>
								<li> Computer Components </li>
							</ul>
						</div>
					</div>

					<div className="alternatives">
						<div className="alternative alternatives-glass">
							<div className="alternatives__image">
								<img src={Jar} loading="lazy" alt="toothbrush" />
							</div>

							<div className="alternatives__content">
								<h2>Glass</h2>
								<p>
									While glass is not bio-degradable, it is still infintely
									recyclable Glases can be melted and molded into new shapes
									according to our uses.
								</p>
							</div>
						</div>

						<div className="alternative alternatives-straws">
							<div className="alternatives__image">
								<img src={Straws} loading="lazy" alt="toothbrush" />
							</div>

							<div className="alternatives__content">
								<h2>Reusable Straws</h2>
								<p>
									Another most widely used plastic product is straws. A lot of
									restaurants initially used plastic straws. However, now paper
									straws have become a popular option. Reusable straws can save
									you from spending too much money on plastic straws. Apart from
									this, they are also environmentally friendly and can be
									disposed of easily without a concern.{" "}
								</p>
							</div>
						</div>

						<div className="alternative alternatives-bottles">
							<div className="alternatives__image">
								<img src={Bottles} loading="lazy" alt="toothbrush" />
							</div>
							<div className="alternatives__content">
								<h2>Bottles</h2>
								<p>
									Steel bottles or Copper bottles are the best alternative to
									harmful chemicals that are released through the use of plastic
									products. Apart from this, steel bottles are highly durable
									and reusable. They are easily available in the market for
									affordable prices.
								</p>
							</div>
						</div>

						<div className="alternative alternatives--toothbrush">
							<div className="alternatives__image">
								<img src={Bamboo} loading="lazy" alt="toothbrush" />
							</div>

							<div className="alternatives__content">
								<h2>Bamboo toothbrush</h2>
								<p>
									Toothbrushes are disposable items that must be replaced every
									few months. The frequent disposal of toothbrushes makes them a
									threat to the environment. It takes around 400 years for them
									to decompose, and burning them is not an option as they
									release toxic chemicals. Switching to a bamboo toothbrush can
									save you from using too much plastic while also contributing
									to an eco-friendly environment.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="Landing__footer">
				<div className="footer__container">
					<Footer />
				</div>
			</section>
		</div>
	);
};

export default Prevention;

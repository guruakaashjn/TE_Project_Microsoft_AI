import React from "react";
import Header from "../components/Header";
import "../css/Header.css";
import "../css/Footer.css";
import "../css/Prevention.css";
import Footer from "../components/Footer";

const Prevention = () => {
	return (
		<div className="Prevention">
			<Header />
			<section id="Prevention__container">
				<div className="Prevention__content">
					<h1 className="Prevention__title">Preventions & Alternatives</h1>
					<div id="Prevention__reduce">
						<h3>Reduce</h3>
						<p>
							Reduce is all about using lesser resources in the first place.
							This is one of the most effective yet most difficult method.
							<br />
							<b>Things you can do: </b>
							<ul>
								<li>Avoid using plastic bags.</li>
								<li>When shopping look for things that lasts long.</li>
								<li>Choose products with less packaging.</li>
							</ul>
						</p>
					</div>
					<div id="Prevention__reuse">
						<h3>Reuse</h3>
						<p>
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
						</p>
					</div>
					<div id="Prevention__recycle">
						<h3>Recycle</h3>
						<p>
							Recycling is all about making sure you separate items that can be
							recycled, meaning they can be used for a new purpose.
							<br />
							<b> Materials that can be recycled include: </b>
							<ul>
								<li> Glass </li>
								<li> Cardboards </li>
								<li> Aluminium </li>
								<li> Lead batteries </li>
								<li> Computer Components </li>
							</ul>
						</p>
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